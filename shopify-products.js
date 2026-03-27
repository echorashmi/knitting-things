async function loadShopifyProducts() {
  if (typeof shopifyProductsCatalog !== "undefined" && shopifyProductsCatalog) {
    return shopifyProductsCatalog;
  }

  const response = await fetch("shopify-products.json");
  if (!response.ok) {
    throw new Error(`Failed to load shopify-products.json (${response.status})`);
  }
  return response.json();
}

function formatCurrency(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "Price N/A";
  }
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(value);
}

function formatGeneratedAt(isoDate) {
  const dt = new Date(isoDate);
  if (Number.isNaN(dt.getTime())) {
    return "Unknown";
  }
  return dt.toLocaleString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function formatNumber(value, unit) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "Not specified";
  }
  if (Number.isInteger(value)) {
    return `${value} ${unit}`;
  }
  return `${value.toFixed(1)} ${unit}`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getAvailabilityLabel(product) {
  if (product.available === true) return "In stock";
  if (product.available === false) return "Sold out";
  return "Unknown stock";
}

function getAvailabilityClass(product) {
  if (product.available === true) return "in-stock";
  if (product.available === false) return "sold-out";
  return "unknown";
}

function matchesAvailability(product, filter) {
  if (filter === "all") return true;
  if (filter === "in-stock") return product.available === true;
  if (filter === "sold-out") return product.available === false;
  return true;
}

function getStoreStats(products) {
  let inStock = 0;
  let soldOut = 0;
  let unknown = 0;

  products.forEach((product) => {
    if (product.available === true) inStock += 1;
    else if (product.available === false) soldOut += 1;
    else unknown += 1;
  });

  return { inStock, soldOut, unknown };
}

function buildProductRow(product) {
  const availabilityLabel = getAvailabilityLabel(product);
  const availabilityClass = getAvailabilityClass(product);
  const compareAtHtml =
    typeof product.compareAtPrice === "number" &&
    typeof product.price === "number" &&
    product.compareAtPrice > product.price
      ? `<span class="product-compare-at">${formatCurrency(product.compareAtPrice)}</span>`
      : "";
  const imageHtml = product.image
    ? `<img class="product-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}" loading="lazy" decoding="async" />`
    : '<div class="product-image product-image-placeholder" aria-hidden="true">No image</div>';
  const yarnWeight = product.yarnWeight ? escapeHtml(product.yarnWeight) : "Not specified";
  const ballSizeGrams = formatNumber(product.ballSizeGrams, "g");
  const ballSizeMeters = formatNumber(product.ballSizeMeters, "m");
  const colorFamily = product.colorFamily ? escapeHtml(product.colorFamily) : "Not specified";

  return `
    <li class="product-row">
      <div class="product-main">
        <a href="${escapeHtml(product.productUrl)}" target="_blank" rel="noopener noreferrer" class="product-thumb-link" aria-label="${escapeHtml(product.title)}">
          ${imageHtml}
        </a>
        <div class="product-details">
          <a href="${escapeHtml(product.productUrl)}" target="_blank" rel="noopener noreferrer" class="product-link">
            ${escapeHtml(product.title)}
          </a>
          <div class="product-spec-grid">
            <span class="spec-chip"><strong>Yarn weight:</strong> ${yarnWeight}</span>
            <span class="spec-chip"><strong>Ball/hank:</strong> ${ballSizeGrams} / ${ballSizeMeters}</span>
            <span class="spec-chip"><strong>Colour:</strong> ${colorFamily}</span>
          </div>
        </div>
      </div>
      <div class="product-side">
        <div class="product-price-wrap">
          <span class="product-price">${formatCurrency(product.price)}</span>
          ${compareAtHtml}
        </div>
        <span class="availability-tag ${availabilityClass}">${availabilityLabel}</span>
      </div>
    </li>
  `;
}

function buildVendorSection(store) {
  const stats = getStoreStats(store.products);
  const sourceHtml = store.source
    ? `<p class="vendor-source">Source: <code>${escapeHtml(store.source)}</code></p>`
    : '<p class="vendor-source">Source: unavailable</p>';
  const rowsHtml = store.products.length
    ? store.products.map(buildProductRow).join("")
    : '<li class="product-row product-row-empty">No public product listings were found for this vendor.</li>';

  return `
    <section class="vendor-products-card" data-vendor-name="${escapeHtml(store.vendorName.toLowerCase())}">
      <div class="vendor-products-header">
        <h2>${escapeHtml(store.vendorName)}</h2>
        <a href="${escapeHtml(store.website)}" target="_blank" rel="noopener noreferrer" class="btn-website">Visit store</a>
      </div>
      <div class="vendor-products-body">
        <div class="vendor-stats">
          <span class="vendor-stat-pill stock">In stock: ${stats.inStock}</span>
          <span class="vendor-stat-pill sold">Sold out: ${stats.soldOut}</span>
          <span class="vendor-stat-pill">Unknown: ${stats.unknown}</span>
          <span class="vendor-stat-pill">Products: ${store.products.length}</span>
        </div>
        ${sourceHtml}
        <ol class="product-list">${rowsHtml}</ol>
      </div>
    </section>
  `;
}

function renderNoProducts(stores) {
  const section = document.getElementById("no-products-section");
  const list = document.getElementById("no-products-list");

  if (!stores.length) {
    section.hidden = true;
    list.innerHTML = "";
    return;
  }

  section.hidden = false;
  list.innerHTML = stores
    .map(
      (store) => `
        <li>
          <a href="${escapeHtml(store.website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(store.vendorName)}</a>
        </li>`
    )
    .join("");
}

function countVisibleProducts(stores) {
  return stores.reduce((sum, store) => sum + store.products.length, 0);
}

function applyFilters(stores) {
  const query = document.getElementById("vendor-search").value.trim().toLowerCase();
  const availability = document.getElementById("availability-filter").value;

  return stores
    .map((store) => {
      const vendorMatch = store.vendorName.toLowerCase().includes(query);
      const products = store.products.filter((product) => {
        const productMatch = product.title.toLowerCase().includes(query);
        const searchMatch = !query || vendorMatch || productMatch;
        return searchMatch && matchesAvailability(product, availability);
      });
      return { ...store, products };
    })
    .filter(
      (store) => store.products.length > 0 || (!query && availability === "all" && store.products.length === 0)
    );
}

function renderStores(stores) {
  const grid = document.getElementById("vendor-products-grid");
  const emptyState = document.getElementById("empty-state");
  const results = document.getElementById("results-count");

  if (!stores.length) {
    grid.innerHTML = "";
    grid.style.display = "none";
    emptyState.style.display = "block";
    results.textContent = "0 stores / 0 products";
    return;
  }

  grid.innerHTML = stores.map(buildVendorSection).join("");
  grid.style.display = "";
  emptyState.style.display = "none";

  const productCount = countVisibleProducts(stores);
  results.textContent = `${stores.length} store${stores.length === 1 ? "" : "s"} / ${productCount} product${productCount === 1 ? "" : "s"}`;
}

async function init() {
  try {
    const data = await loadShopifyProducts();
    const stores = (Array.isArray(data.stores) ? data.stores : [])
      .map((store) => ({
        ...store,
        products: Array.isArray(store.products) ? store.products.slice(0, 10) : []
      }))
      .sort((a, b) => a.vendorName.localeCompare(b.vendorName));

    const totalProducts = stores.reduce((n, s) => n + s.products.length, 0);
    document.getElementById("vendor-summary").textContent = `${stores.length} Shopify vendors`;
    document.getElementById("product-summary").textContent = `${totalProducts} listed products`;
    document.getElementById("catalog-generated-at").textContent = `Catalog generated: ${formatGeneratedAt(data.generatedAt)}`;
    const coverage = data.coverage || {};
    document.getElementById("catalog-source-note").textContent =
      `Coverage: images ${coverage.withImage || 0}/${coverage.productTotal || 0}, yarn weight ${coverage.withYarnWeight || 0}, grams ${coverage.withBallSizeGrams || 0}, meters ${coverage.withBallSizeMeters || 0}, colour family ${coverage.withColorFamily || 0}.`;

    renderNoProducts(stores.filter((store) => store.products.length === 0));

    const rerender = () => {
      renderStores(applyFilters(stores));
    };

    document.getElementById("vendor-search").addEventListener("input", rerender);
    document.getElementById("availability-filter").addEventListener("change", rerender);
    rerender();
  } catch (error) {
    const grid = document.getElementById("vendor-products-grid");
    const emptyState = document.getElementById("empty-state");
    grid.innerHTML = "";
    grid.style.display = "none";
    emptyState.style.display = "block";
    emptyState.querySelector("h2").textContent = "Unable to load Shopify product catalog";
    emptyState.querySelector("p").textContent = error.message;
  }
}

init();
