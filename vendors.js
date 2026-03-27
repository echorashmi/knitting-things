const vendors = [
  {
    name: "SweetGeorgia Yarns",
    category: "Hand-Dyed Yarn",
    description: "Vancouver-based indie dyer known for rich, hand-dyed semi-solid and variegated yarns in a wide range of bases.",
    website: "https://sweetgeorgiayarns.com",
    social: {
      instagram: "https://www.instagram.com/sweetgeorgiayarns/",
      facebook: "https://www.facebook.com/SweetGeorgiaYarns",
      ravelry: "https://www.ravelry.com/yarns/brands/sweetgeorgia-yarns"
    }
  },
  {
    name: "Fleece & Harmony",
    category: "Hand-Dyed Yarn",
    description: "Prince Edward Island dyer offering hand-dyed yarn in small batches using a palette inspired by the natural world.",
    website: "https://fleeceandharmony.ca",
    social: {
      instagram: "https://www.instagram.com/fleeceandharmony/",
      facebook: "https://www.facebook.com/FleeceandHarmony"
    }
  },
  {
    name: "Tanis Fiber Arts",
    category: "Hand-Dyed Yarn",
    description: "Ontario-based indie dyer creating vibrant, consistently dyed yarns beloved by knitters and crocheters across Canada.",
    website: "https://tanisfiberarts.com",
    social: {
      instagram: "https://www.instagram.com/tanisfiberarts/",
      facebook: "https://www.facebook.com/TanisFiberArts",
      ravelry: "https://www.ravelry.com/yarns/brands/tanis-fiber-arts"
    }
  },
  {
    name: "Koigu Wool Designs",
    category: "Yarn",
    description: "A family-run farm and yarn company in Ontario, home of the iconic hand-painted KPPPM and Koigu Kersti.",
    website: "https://koigu.com",
    social: {
      instagram: "https://www.instagram.com/koiguwooldesigns/",
      facebook: "https://www.facebook.com/koigu",
      ravelry: "https://www.ravelry.com/yarns/brands/koigu-wool-designs"
    }
  },
  {
    name: "The Fibre Co.",
    category: "Yarn",
    description: "Luxury yarn company combining natural fibres and traditional spinning with contemporary colour design.",
    website: "https://thefibreco.com",
    social: {
      instagram: "https://www.instagram.com/thefibrecoyarns/",
      facebook: "https://www.facebook.com/TheFibreCo"
    }
  },
  {
    name: "Quince & Co.",
    category: "Yarn",
    description: "Maine-based company focused on American-made, natural-fibre yarns in a thoughtful, wearable palette.",
    website: "https://quinceandco.com",
    social: {
      instagram: "https://www.instagram.com/quinceandco/",
      facebook: "https://www.facebook.com/quinceandco",
      ravelry: "https://www.ravelry.com/yarns/brands/quince-co"
    }
  },
  {
    name: "Malabrigo Yarn",
    category: "Hand-Dyed Yarn",
    description: "Uruguayan yarn company famous for its kettle-dyed single-ply Merino and a stunning range of fibre blends.",
    website: "https://malabrigoyarn.com",
    social: {
      instagram: "https://www.instagram.com/malabrigoyarn/",
      facebook: "https://www.facebook.com/malabrigoyarn",
      ravelry: "https://www.ravelry.com/yarns/brands/malabrigo"
    }
  },
  {
    name: "laine magazine",
    category: "Publications & Patterns",
    description: "Nordic slow-knitting magazine celebrating thoughtful design, natural fibres, and beautiful photography.",
    website: "https://lainemagazine.com",
    social: {
      instagram: "https://www.instagram.com/lainemagazine/",
      facebook: "https://www.facebook.com/lainemagazine"
    }
  },
  {
    name: "Fringe Supply Co.",
    category: "Notions & Accessories",
    description: "Beautifully designed knitting tools, bags, and accessories for the modern maker.",
    website: "https://fringesupply.com",
    social: {
      instagram: "https://www.instagram.com/fringesupplyco/",
      facebook: "https://www.facebook.com/fringesupplyco"
    }
  },
  {
    name: "Knitter's Pride",
    category: "Notions & Accessories",
    description: "Premium knitting and crochet needles, hooks, and accessories crafted for comfort and performance.",
    website: "https://www.knitterspride.com",
    social: {
      instagram: "https://www.instagram.com/knitterspride/",
      facebook: "https://www.facebook.com/KnittersPride"
    }
  },
  {
    name: "Neighborhood Fiber Co.",
    category: "Hand-Dyed Yarn",
    description: "Baltimore-based indie dyer creating neighbourhood-inspired colourways on a variety of yarn bases.",
    website: "https://neighborhoodfiber.com",
    social: {
      instagram: "https://www.instagram.com/neighborhoodfiberco/",
      ravelry: "https://www.ravelry.com/yarns/brands/neighborhood-fiber-co"
    }
  },
  {
    name: "Hedgehog Fibres",
    category: "Hand-Dyed Yarn",
    description: "Irish indie dyer known for vibrant, richly saturated colourways on a beautiful range of yarn bases and fibre.",
    website: "https://hedgehogfibres.com",
    social: {
      instagram: "https://www.instagram.com/hedgehog_fibres/",
      facebook: "https://www.facebook.com/hedgehogfibres",
      ravelry: "https://www.ravelry.com/yarns/brands/hedgehog-fibres"
    }
  },
  {
    name: "String Theory Colorworks",
    category: "Hand-Dyed Yarn",
    description: "Canadian indie dyer specialising in science-inspired colourways and thoughtfully crafted yarn bases.",
    website: "https://www.stringtheorycolorworks.com",
    social: {
      instagram: "https://www.instagram.com/stringtheorycolorworks/",
      ravelry: "https://www.ravelry.com/yarns/brands/string-theory-colorworks"
    }
  },
  {
    name: "Blue Sky Fibers",
    category: "Yarn",
    description: "Minnesota-based yarn company dedicated to natural, sustainable fibre sourced from family farms worldwide.",
    website: "https://www.blueskyfibers.com",
    social: {
      instagram: "https://www.instagram.com/blueskyfibers/",
      facebook: "https://www.facebook.com/BlueSkyAlpacas"
    }
  },
  {
    name: "Loop London",
    category: "Yarn & Notions",
    description: "Iconic London yarn shop and publisher bringing a curated selection of indie yarns and knitting books to the market.",
    website: "https://loopknitlounge.com",
    social: {
      instagram: "https://www.instagram.com/looplondon/",
      facebook: "https://www.facebook.com/loopknitlounge"
    }
  },
  {
    name: "La Bien Aimée",
    category: "Hand-Dyed Yarn",
    description: "Paris-based indie dyer renowned for sophisticated, painterly colourways on luxurious yarn bases.",
    website: "https://labienaimee.com",
    social: {
      instagram: "https://www.instagram.com/labienaimee/",
      ravelry: "https://www.ravelry.com/yarns/brands/la-bien-aim-e"
    }
  },
  {
    name: "Spincycle Yarns",
    category: "Hand-Dyed Yarn",
    description: "Washington State dyers creating bold, chaotic gradients and unique one-of-a-kind skeins.",
    website: "https://spincycleyarns.com",
    social: {
      instagram: "https://www.instagram.com/spincycleyarns/",
      ravelry: "https://www.ravelry.com/yarns/brands/spincycle-yarns"
    }
  },
  {
    name: "Urth Yarns",
    category: "Yarn",
    description: "Eco-conscious yarn brand offering ethically sourced, fair-trade certified yarns with a stunning gradient range.",
    website: "https://urthyarns.com",
    social: {
      instagram: "https://www.instagram.com/urthyarns/",
      facebook: "https://www.facebook.com/UrthYarns"
    }
  },
  {
    name: "Wool and the Gang",
    category: "Yarn & Kits",
    description: "London-based brand making knitting and crochet accessible with chunky yarns, kits, and free patterns.",
    website: "https://www.woolandthegang.com",
    social: {
      instagram: "https://www.instagram.com/woolandthegang/",
      facebook: "https://www.facebook.com/woolandthegang"
    }
  },
  {
    name: "Pom Pom Quarterly",
    category: "Publications & Patterns",
    description: "Independent knitting magazine and publisher celebrating modern, wearable knitwear design.",
    website: "https://pompommag.com",
    social: {
      instagram: "https://www.instagram.com/pompommag/",
      facebook: "https://www.facebook.com/pompomquarterly",
      ravelry: "https://www.ravelry.com/pattern-source/pom-pom-quarterly"
    }
  },
  {
    name: "Indigodragonfly",
    category: "Hand-Dyed Yarn",
    description: "Ontario indie dyer with a bold, playful palette and witty colourway names beloved throughout Canada.",
    website: "https://indigodragonfly.ca",
    social: {
      instagram: "https://www.instagram.com/indigodragonfly/",
      facebook: "https://www.facebook.com/indigodragonfly",
      ravelry: "https://www.ravelry.com/yarns/brands/indigodragonfly"
    }
  },
  {
    name: "Cascade Yarns",
    category: "Yarn",
    description: "Seattle-based yarn company offering an enormous range of high-quality, affordable wool and fibre blends.",
    website: "https://www.cascadeyarns.com",
    social: {
      instagram: "https://www.instagram.com/cascadeyarns/",
      facebook: "https://www.facebook.com/CascadeYarns"
    }
  },
  {
    name: "Addi Knitting",
    category: "Notions & Accessories",
    description: "German manufacturer of precision knitting needles and crochet hooks trusted by crafters worldwide.",
    website: "https://www.addi.de/en/",
    social: {
      instagram: "https://www.instagram.com/addi_knitting/",
      facebook: "https://www.facebook.com/addi.knitting"
    }
  },
  {
    name: "Woolhouse Stories",
    category: "Hand-Dyed Yarn",
    description: "Canadian indie dyer crafting soft, muted nature-inspired colourways on premium Canadian and global yarn bases.",
    website: "https://woolhousestories.com",
    social: {
      instagram: "https://www.instagram.com/woolhousestories/",
      ravelry: "https://www.ravelry.com/yarns/brands/woolhouse-stories"
    }
  }
];
