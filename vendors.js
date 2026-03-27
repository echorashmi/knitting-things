const vendors = [
  {
    "name": "SweetGeorgia Yarns",
    "category": "Hand-Dyed Yarn",
    "description": "Vancouver-based indie dyer known for rich, hand-dyed semi-solid and variegated yarns in a wide range of bases.",
    "website": "https://sweetgeorgiayarns.com",
    "social": {
      "instagram": "https://www.instagram.com/sweetgeorgiayarns/",
      "facebook": "https://www.facebook.com/SweetGeorgiaYarns",
      "ravelry": "https://www.ravelry.com/yarns/brands/sweetgeorgia-yarns"
    }
  },
  {
    "name": "Fleece & Harmony",
    "category": "Hand-Dyed Yarn",
    "description": "Prince Edward Island dyer offering hand-dyed yarn in small batches using a palette inspired by the natural world.",
    "website": "https://fleeceandharmony.ca",
    "social": {
      "instagram": "https://www.instagram.com/fleeceandharmony/",
      "facebook": "https://www.facebook.com/FleeceandHarmony"
    },
    "isShopify": true
  },
  {
    "name": "Tanis Fiber Arts",
    "category": "Hand-Dyed Yarn",
    "description": "Ontario-based indie dyer creating vibrant, consistently dyed yarns beloved by knitters and crocheters across Canada.",
    "website": "https://tanisfiberarts.com",
    "social": {
      "instagram": "https://www.instagram.com/tanisfiberarts/",
      "facebook": "https://www.facebook.com/TanisFiberArts",
      "ravelry": "https://www.ravelry.com/yarns/brands/tanis-fiber-arts"
    }
  },
  {
    "name": "Koigu Wool Designs",
    "category": "Yarn",
    "description": "A family-run farm and yarn company in Ontario, home of the iconic hand-painted KPPPM and Koigu Kersti.",
    "website": "https://koigu.com",
    "social": {
      "instagram": "https://www.instagram.com/koiguwooldesigns/",
      "facebook": "https://www.facebook.com/koigu",
      "ravelry": "https://www.ravelry.com/yarns/brands/koigu-wool-designs"
    }
  },
  {
    "name": "The Fibre Co.",
    "category": "Yarn",
    "description": "Luxury yarn company combining natural fibres and traditional spinning with contemporary colour design.",
    "website": "https://thefibreco.com",
    "social": {
      "instagram": "https://www.instagram.com/thefibrecoyarns/",
      "facebook": "https://www.facebook.com/TheFibreCo"
    },
    "isShopify": true
  },
  {
    "name": "Quince & Co.",
    "category": "Yarn",
    "description": "Maine-based company focused on American-made, natural-fibre yarns in a thoughtful, wearable palette.",
    "website": "https://quinceandco.com",
    "social": {
      "instagram": "https://www.instagram.com/quinceandco/",
      "facebook": "https://www.facebook.com/quinceandco",
      "ravelry": "https://www.ravelry.com/yarns/brands/quince-co"
    },
    "isShopify": true
  },
  {
    "name": "Malabrigo Yarn",
    "category": "Hand-Dyed Yarn",
    "description": "Uruguayan yarn company famous for its kettle-dyed single-ply Merino and a stunning range of fibre blends.",
    "website": "https://malabrigoyarn.com",
    "social": {
      "instagram": "https://www.instagram.com/malabrigoyarn/",
      "facebook": "https://www.facebook.com/malabrigoyarn",
      "ravelry": "https://www.ravelry.com/yarns/brands/malabrigo"
    }
  },
  {
    "name": "laine magazine",
    "category": "Publications & Patterns",
    "description": "Nordic slow-knitting magazine celebrating thoughtful design, natural fibres, and beautiful photography.",
    "website": "https://lainemagazine.com",
    "social": {
      "instagram": "https://www.instagram.com/lainemagazine/",
      "facebook": "https://www.facebook.com/lainemagazine"
    },
    "isShopify": true
  },
  {
    "name": "Fringe Supply Co.",
    "category": "Notions & Accessories",
    "description": "Beautifully designed knitting tools, bags, and accessories for the modern maker.",
    "website": "https://fringesupply.com",
    "social": {
      "instagram": "https://www.instagram.com/fringesupplyco/",
      "facebook": "https://www.facebook.com/fringesupplyco"
    }
  },
  {
    "name": "Knitter's Pride",
    "category": "Notions & Accessories",
    "description": "Premium knitting and crochet needles, hooks, and accessories crafted for comfort and performance.",
    "website": "https://www.knitterspride.com",
    "social": {
      "instagram": "https://www.instagram.com/knitterspride/",
      "facebook": "https://www.facebook.com/KnittersPride"
    }
  },
  {
    "name": "Neighborhood Fiber Co.",
    "category": "Hand-Dyed Yarn",
    "description": "Baltimore-based indie dyer creating neighbourhood-inspired colourways on a variety of yarn bases.",
    "website": "https://neighborhoodfiber.com",
    "social": {
      "instagram": "https://www.instagram.com/neighborhoodfiberco/",
      "ravelry": "https://www.ravelry.com/yarns/brands/neighborhood-fiber-co"
    }
  },
  {
    "name": "Hedgehog Fibres",
    "category": "Hand-Dyed Yarn",
    "description": "Irish indie dyer known for vibrant, richly saturated colourways on a beautiful range of yarn bases and fibre.",
    "website": "https://hedgehogfibres.com",
    "social": {
      "instagram": "https://www.instagram.com/hedgehog_fibres/",
      "facebook": "https://www.facebook.com/hedgehogfibres",
      "ravelry": "https://www.ravelry.com/yarns/brands/hedgehog-fibres"
    },
    "isShopify": true
  },
  {
    "name": "String Theory Colorworks",
    "category": "Hand-Dyed Yarn",
    "description": "Canadian indie dyer specialising in science-inspired colourways and thoughtfully crafted yarn bases.",
    "website": "https://www.stringtheorycolorworks.com",
    "social": {
      "instagram": "https://www.instagram.com/stringtheorycolorworks/",
      "ravelry": "https://www.ravelry.com/yarns/brands/string-theory-colorworks"
    },
    "isShopify": true
  },
  {
    "name": "Blue Sky Fibers",
    "category": "Yarn",
    "description": "Minnesota-based yarn company dedicated to natural, sustainable fibre sourced from family farms worldwide.",
    "website": "https://www.blueskyfibers.com",
    "social": {
      "instagram": "https://www.instagram.com/blueskyfibers/",
      "facebook": "https://www.facebook.com/BlueSkyAlpacas"
    }
  },
  {
    "name": "Loop London",
    "category": "Yarn & Notions",
    "description": "Iconic London yarn shop and publisher bringing a curated selection of indie yarns and knitting books to the market.",
    "website": "https://loopknitlounge.com",
    "social": {
      "instagram": "https://www.instagram.com/looplondon/",
      "facebook": "https://www.facebook.com/loopknitlounge"
    }
  },
  {
    "name": "La Bien Aimée",
    "category": "Hand-Dyed Yarn",
    "description": "Paris-based indie dyer renowned for sophisticated, painterly colourways on luxurious yarn bases.",
    "website": "https://labienaimee.com",
    "social": {
      "instagram": "https://www.instagram.com/labienaimee/",
      "ravelry": "https://www.ravelry.com/yarns/brands/la-bien-aim-e"
    },
    "isShopify": true
  },
  {
    "name": "Spincycle Yarns",
    "category": "Hand-Dyed Yarn",
    "description": "Washington State dyers creating bold, chaotic gradients and unique one-of-a-kind skeins.",
    "website": "https://spincycleyarns.com",
    "social": {
      "instagram": "https://www.instagram.com/spincycleyarns/",
      "ravelry": "https://www.ravelry.com/yarns/brands/spincycle-yarns"
    },
    "isShopify": true
  },
  {
    "name": "Urth Yarns",
    "category": "Yarn",
    "description": "Eco-conscious yarn brand offering ethically sourced, fair-trade certified yarns with a stunning gradient range.",
    "website": "https://urthyarns.com",
    "social": {
      "instagram": "https://www.instagram.com/urthyarns/",
      "facebook": "https://www.facebook.com/UrthYarns"
    },
    "isShopify": true
  },
  {
    "name": "Wool and the Gang",
    "category": "Yarn & Kits",
    "description": "London-based brand making knitting and crochet accessible with chunky yarns, kits, and free patterns.",
    "website": "https://www.woolandthegang.com",
    "social": {
      "instagram": "https://www.instagram.com/woolandthegang/",
      "facebook": "https://www.facebook.com/woolandthegang"
    }
  },
  {
    "name": "Pom Pom Quarterly",
    "category": "Publications & Patterns",
    "description": "Independent knitting magazine and publisher celebrating modern, wearable knitwear design.",
    "website": "https://pompommag.com",
    "social": {
      "instagram": "https://www.instagram.com/pompommag/",
      "facebook": "https://www.facebook.com/pompomquarterly",
      "ravelry": "https://www.ravelry.com/pattern-source/pom-pom-quarterly"
    },
    "isShopify": true
  },
  {
    "name": "Indigodragonfly",
    "category": "Hand-Dyed Yarn",
    "description": "Ontario indie dyer with a bold, playful palette and witty colourway names beloved throughout Canada.",
    "website": "https://indigodragonfly.ca",
    "social": {
      "instagram": "https://www.instagram.com/indigodragonfly/",
      "facebook": "https://www.facebook.com/indigodragonfly",
      "ravelry": "https://www.ravelry.com/yarns/brands/indigodragonfly"
    },
    "isShopify": true
  },
  {
    "name": "Cascade Yarns",
    "category": "Yarn",
    "description": "Seattle-based yarn company offering an enormous range of high-quality, affordable wool and fibre blends.",
    "website": "https://www.cascadeyarns.com",
    "social": {
      "instagram": "https://www.instagram.com/cascadeyarns/",
      "facebook": "https://www.facebook.com/CascadeYarns"
    }
  },
  {
    "name": "Addi Knitting",
    "category": "Notions & Accessories",
    "description": "German manufacturer of precision knitting needles and crochet hooks trusted by crafters worldwide.",
    "website": "https://www.addi.de/en/",
    "social": {
      "instagram": "https://www.instagram.com/addi_knitting/",
      "facebook": "https://www.facebook.com/addi.knitting"
    }
  },
  {
    "name": "Woolhouse Stories",
    "category": "Hand-Dyed Yarn",
    "description": "Canadian indie dyer crafting soft, muted nature-inspired colourways on premium Canadian and global yarn bases.",
    "website": "https://woolhousestories.com",
    "social": {
      "instagram": "https://www.instagram.com/woolhousestories/",
      "ravelry": "https://www.ravelry.com/yarns/brands/woolhouse-stories"
    }
  },
  {
    "name": "A Lair Artifacts",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.alairartifacts.com/en"
  },
  {
    "name": "Addiction Yarns",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.addictionyarns.com",
    "isShopify": true
  },
  {
    "name": "All Wound Up",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://all-wound-up.square.site/"
  },
  {
    "name": "Alley Cat Yarns",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://alleycatyarns.ca/",
    "isShopify": true
  },
  {
    "name": "Amaranth Fibres",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://amaranthfibres.com/",
    "isShopify": true
  },
  {
    "name": "Ancient Arts",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://ancientartsfibre.com/",
    "isShopify": true
  },
  {
    "name": "Artfil",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://artfil.ca/",
    "isShopify": true
  },
  {
    "name": "Atelier Perluette",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.atelierperluette.com/",
    "isShopify": true
  },
  {
    "name": "Bar A Tricot",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://baratricot.com/en/",
    "isShopify": true
  },
  {
    "name": "Big Blue Moma 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.bigbluemoma.com/",
    "isShopify": true
  },
  {
    "name": "Birch Grove",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/birch.grove",
    "social": {
      "instagram": "https://www.instagram.com/birch.grove"
    }
  },
  {
    "name": "Biscotte 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.biscotteyarns.ca",
    "isShopify": true
  },
  {
    "name": "TOGETHER COLOUR 2020",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://shop.thebluebrick.ca/",
    "isShopify": true
  },
  {
    "name": "Black Sheep Farm",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.justblacksheep.com"
  },
  {
    "name": "Boostani",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.boostani.ca"
  },
  {
    "name": "Brine Dyeworks",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://brinedyeworks.ca/",
    "isShopify": true
  },
  {
    "name": "Bunny Mushroom Bags",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/bunnymushroombags/",
    "social": {
      "instagram": "https://www.instagram.com/bunnymushroombags/"
    }
  },
  {
    "name": "BTL Logo 2024 Colour",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://bythelakeside.com/",
    "isShopify": true
  },
  {
    "name": "By the Yhard",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/bytheyhard",
    "social": {
      "instagram": "https://www.instagram.com/bytheyhard"
    }
  },
  {
    "name": "Cherished Goods",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/cherishedcm/",
    "social": {
      "instagram": "https://www.instagram.com/cherishedcm/"
    }
  },
  {
    "name": "Cosy Posy Yarn Co",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/cosyposyyarnco/",
    "social": {
      "instagram": "https://www.instagram.com/cosyposyyarnco/"
    }
  },
  {
    "name": "the Cozy Knitter",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.thecozyknitter.com/",
    "isShopify": true
  },
  {
    "name": "Crazy About Yarn",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.crazyaboutyarn.ca",
    "isShopify": true
  },
  {
    "name": "Creation Miss Couture",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/creation_miss_couture",
    "social": {
      "instagram": "https://www.instagram.com/creation_miss_couture"
    }
  },
  {
    "name": "Dragon Strings 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://dragonstrings.ca/"
  },
  {
    "name": "Electric Ewe",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.etsy.com/shop/ElectricEwe"
  },
  {
    "name": "Emilia & Philomene",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.emiliaphilomene.com/"
  },
  {
    "name": "Entre Soeurs Et Laine",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/entresoeursetlaine/",
    "social": {
      "instagram": "https://www.instagram.com/entresoeursetlaine/"
    }
  },
  {
    "name": "Everwilde",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.everwilde.ca"
  },
  {
    "name": "Fancienancyshop",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://fancienancyshop.com"
  },
  {
    "name": "Feisty Fibres",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://feistyfibres.com",
    "isShopify": true
  },
  {
    "name": "Ferme Fiola Farm",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.fermefiolafarm.ca/",
    "isShopify": true
  },
  {
    "name": "Logo Fermerecreativecaza 300x191",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/fermerecreativecaza/",
    "social": {
      "instagram": "https://www.instagram.com/fermerecreativecaza/"
    }
  },
  {
    "name": "Fibrani 2",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.fibrani.com/"
  },
  {
    "name": "Fibre Goddess",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.fibregoddess.ca",
    "isShopify": true
  },
  {
    "name": "Fibres Filantes",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://fibresfilantes.ca/",
    "isShopify": true
  },
  {
    "name": "Fireweed Fibre Co",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://fireweedfibreco.com/",
    "isShopify": true
  },
  {
    "name": "the Frosted Stitch 2",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://thefrostedstitch.ca/",
    "isShopify": true
  },
  {
    "name": "Full Moon Fibres",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://www.fullmoonfibres.ca",
    "isShopify": true
  },
  {
    "name": "Fyberring Logo New Blue PNG",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://fyberring.com/",
    "isShopify": true
  },
  {
    "name": "Genna",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://gennayarn.ca/en/"
  },
  {
    "name": "Gingersnap",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://gingersnapthat.com/",
    "isShopify": true
  },
  {
    "name": "Gobsmacked Yarn 2",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://gobsmackedyarn.ca",
    "isShopify": true
  },
  {
    "name": "Goobles",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/goobles.tools",
    "social": {
      "instagram": "https://www.instagram.com/goobles.tools"
    }
  },
  {
    "name": "Good Grief",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://goodgriefyarn.com/collections/good-grief-yarns",
    "isShopify": true
  },
  {
    "name": "the Green Button Jar",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://thegreenbuttonjar.etsy.com"
  },
  {
    "name": "Hamstersyarns",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.hamstersyarns.ca",
    "isShopify": true
  },
  {
    "name": "Handknit Yarn Studio",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/handknityarn/",
    "social": {
      "instagram": "https://www.instagram.com/handknityarn/"
    }
  },
  {
    "name": "Hipknitized",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/hipknitized/",
    "social": {
      "instagram": "https://www.instagram.com/hipknitized/"
    }
  },
  {
    "name": "Hoko Hoko 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://hokohokofibreco.com/",
    "isShopify": true
  },
  {
    "name": "Holistic Needle Craft",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/holisticneedlecraft/",
    "social": {
      "instagram": "https://www.instagram.com/holisticneedlecraft/"
    }
  },
  {
    "name": "Hooking Outside the Lines 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://hookingoutsidethelines.com/",
    "isShopify": true
  },
  {
    "name": "Irene Textile 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://irenetextile.com/en",
    "isShopify": true
  },
  {
    "name": "Je Laine Yarns",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://jelaineyarns.com/",
    "isShopify": true
  },
  {
    "name": "Juniper & Ginger",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://juniperandginger.wordpress.com/"
  },
  {
    "name": "Knitted Bliss Stitching",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://shop.knittedbliss.com/",
    "isShopify": true
  },
  {
    "name": "Knitty",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://knitty.com"
  },
  {
    "name": "Knittykitty",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.knittykitty.ca/"
  },
  {
    "name": "the Lab Fibers",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://thelabfibers.com/",
    "isShopify": true
  },
  {
    "name": "L'aime Laine 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://Www.laimelaine.com"
  },
  {
    "name": "LDH Scissors",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://ldhscissors.ca",
    "isShopify": true
  },
  {
    "name": "Leo & Roxy 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.leoandroxyyarnco.com/",
    "isShopify": true
  },
  {
    "name": "Les Belles Bouclettes",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.bellesbouclettes.ca"
  },
  {
    "name": "Les Garcons",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://boutiquelesgarcons.com",
    "isShopify": true
  },
  {
    "name": "Les Laines Mailles A Part",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.leslainesmaillesapart.com/",
    "isShopify": true
  },
  {
    "name": "Les Moutons De Richard",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.facebook.com/p/Les-Moutons-de-Richard-100035338131762/"
  },
  {
    "name": "Lichen and Lace",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://www.lichenandlace.com",
    "isShopify": true
  },
  {
    "name": "Li'l Red Kettlehead",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/lilredkettlehead/",
    "social": {
      "instagram": "https://www.instagram.com/lilredkettlehead/"
    }
  },
  {
    "name": "Little Barn Studio 2",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.littlebarnstudio.ca",
    "isShopify": true
  },
  {
    "name": "the Little Red Mitten 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://littleredmitten.com/",
    "isShopify": true
  },
  {
    "name": "Long Way Homestead 2",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.longwayhomestead.com/"
  },
  {
    "name": "the Loving Path",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.thelovingpathyarn.com/"
  },
  {
    "name": "Lunaspinning",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://lunaspinning.square.site/"
  },
  {
    "name": "Ma Laine Maison 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://malainemaison.com/",
    "isShopify": true
  },
  {
    "name": "Transparent Logo (big)",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://mindfulnessmakesshop.etsy.com"
  },
  {
    "name": "Muster",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://musterpattern.ca/",
    "isShopify": true
  },
  {
    "name": "Nerds With Needles",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://nerdswithneedles.ca/"
  },
  {
    "name": "Numana Yarns 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.numanayarns.com",
    "isShopify": true
  },
  {
    "name": "Ocean Praire Designs",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/oceanprairiedesignscanada/",
    "social": {
      "instagram": "https://www.instagram.com/oceanprairiedesignscanada/"
    }
  },
  {
    "name": "Ok Logo 3",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.octoberknits.com",
    "isShopify": true
  },
  {
    "name": "Odd Cat Yarn",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://odd-cat.square.site/"
  },
  {
    "name": "One Stitch More",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.onestitchmore.com"
  },
  {
    "name": "PINE & PURL NEW LOGO",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.pineandpurl.ca/"
  },
  {
    "name": "Pretty Little Yarns 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://prettylittleyarns.ca/",
    "isShopify": true
  },
  {
    "name": "Pretty String Yarn Co",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.prettystring.ca"
  },
  {
    "name": "Purl and Hank",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.purlandhank.com/"
  },
  {
    "name": "Red Maple Homestead",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/redmaplehomestead/?hl=en",
    "social": {
      "instagram": "https://www.instagram.com/redmaplehomestead/?hl=en"
    }
  },
  {
    "name": "Red Island Fibre",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/redislandfibre?igsh=YnpvZDU1OGNyM3Y3&utm_source=qr",
    "social": {
      "instagram": "https://www.instagram.com/redislandfibre?igsh=YnpvZDU1OGNyM3Y3&utm_source=qr"
    }
  },
  {
    "name": "Revolution Wool",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://revolutionwoolco.com/",
    "isShopify": true
  },
  {
    "name": "Roving Textiles",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.rovingtextiles.com",
    "isShopify": true
  },
  {
    "name": "Ruach Crafts",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://ruachcrafts.com/",
    "isShopify": true
  },
  {
    "name": "Scrumptiouspurl",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.scrumptiouspurl.com/",
    "isShopify": true
  },
  {
    "name": "Sew Shevaun",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/sewshevaun/",
    "social": {
      "instagram": "https://www.instagram.com/sewshevaun/"
    }
  },
  {
    "name": "Sheeps Ahoy",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://sheepsahoy.com/",
    "isShopify": true
  },
  {
    "name": "Signature Yarns 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://signatureyarns.com/",
    "isShopify": true
  },
  {
    "name": "Smiling Sheep",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://smilingsheepfineyarns.com/",
    "isShopify": true
  },
  {
    "name": "Soft Spoken",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.softspokenco.ca/"
  },
  {
    "name": "Sonder Yarn",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://www.sonderyarnco.com",
    "isShopify": true
  },
  {
    "name": "Songbird Yarn & Fibres",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://songbirdfibres.ca",
    "isShopify": true
  },
  {
    "name": "Sound Yarn & Fibre",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://www.soundyarnandfibre.ca",
    "isShopify": true
  },
  {
    "name": "SPJ Retreats Logo",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.southpacificjourneys.com/our-hosted-groups12502671"
  },
  {
    "name": "Spun Up 2",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://spunup.ca"
  },
  {
    "name": "STE.MARG.SCOT.",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://stemargscot.com/",
    "isShopify": true
  },
  {
    "name": "Stix & Stones",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.stixandstonesnb.ca",
    "isShopify": true
  },
  {
    "name": "Thread and Maple",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.threadandmaple.com",
    "isShopify": true
  },
  {
    "name": "Toronto Knitters Guild 1",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://torontoknittersguild.ca/"
  },
  {
    "name": "Tully's Yarn",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.tullysyarn.com/",
    "isShopify": true
  },
  {
    "name": "the Wandering Flock",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://www.thewanderingflock.com",
    "isShopify": true
  },
  {
    "name": "Waxwing 2",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.waxwingyarn.com",
    "isShopify": true
  },
  {
    "name": "Waypoint Fibreworks 2",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://waypointfibreworks.ca/",
    "isShopify": true
  },
  {
    "name": "the Woodlot",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.thewoodlot.ca/"
  },
  {
    "name": "Windswept Fibres",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.instagram.com/windsweptfibres/",
    "social": {
      "instagram": "https://www.instagram.com/windsweptfibres/"
    }
  },
  {
    "name": "Winstonfibresco",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.winstonfibresco.com",
    "isShopify": true
  },
  {
    "name": "Woolgrown Logo",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.woolgrowncompany.com/"
  },
  {
    "name": "Wonder Twin Fibrearts",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "http://www.wondertwinfibrearts.com",
    "isShopify": true
  },
  {
    "name": "Worth Mending",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.worthmending.com",
    "isShopify": true
  },
  {
    "name": "Wyldespun",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.wyldespun.com/"
  },
  {
    "name": "Yarnindulgences",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://YarnIndulgences.com",
    "isShopify": true
  },
  {
    "name": "Yoriko Oki",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.yorikooki.com"
  },
  {
    "name": "Your Next Knit",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://yournextknit.com/",
    "isShopify": true
  },
  {
    "name": "Messenger Creation",
    "category": "Marketplace Vendor",
    "description": "Vendor listed on the Knit Social Knit City Toronto marketplace page.",
    "website": "https://www.etsy.com/shop/zonecreationsmad/?etsrc=sdt"
  }
];
