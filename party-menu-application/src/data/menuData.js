const menuData = [
  {
    "id": 1,
    "name": "Tandoori Chicken",
    "category": "main",
    "isVeg": false,
    "description": "Succulent chicken marinated in yogurt and spices, roasted in a clay oven until charred and juicy.",
    "fullDescription": "Succulent chicken marinated in yogurt, ginger-garlic paste, and aromatic spices, then roasted in a traditional clay tandoor until perfectly charred on the outside and juicy inside. Served with mint chutney and onion rings.",
    "image": "https://source.unsplash.com/featured/1200x800/?Tandoori+Chicken&sig=1",
    "ingredients": [
      {
        "name": "Chicken (bone-in)",
        "quantity": "500 g"
      },
      {
        "name": "Hung curd",
        "quantity": "1/2 cup"
      },
      {
        "name": "Kashmiri chilli",
        "quantity": "1 tsp"
      },
      {
        "name": "Garam masala",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Mustard oil",
        "quantity": "2 tbsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 2,
    "name": "Dal Makhani",
    "category": "main",
    "isVeg": true,
    "description": "Slow-cooked black lentils simmered overnight with butter, cream, and warming spices.",
    "fullDescription": "Creamy black lentils slow-cooked for hours with tomatoes, butter, and cream until rich and velvety. A classic Punjabi comfort dish finished with kasuri methi.",
    "image": "https://source.unsplash.com/featured/1200x800/?Dal+Makhani&sig=2",
    "ingredients": [
      {
        "name": "Black urad dal",
        "quantity": "1 cup"
      },
      {
        "name": "Butter",
        "quantity": "3 tbsp"
      },
      {
        "name": "Fresh cream",
        "quantity": "1/4 cup"
      },
      {
        "name": "Tomato puree",
        "quantity": "1/2 cup"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "1 tbsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 3,
    "name": "Paneer Tikka",
    "category": "starter",
    "isVeg": true,
    "description": "Cubes of cottage cheese grilled with bell peppers and onion in spiced marinade.",
    "fullDescription": "Soft paneer cubes and vegetables marinated in hung curd and tandoori masala, skewered and grilled until lightly smoky. Served with lemon and chaat masala.",
    "image": "https://source.unsplash.com/featured/1200x800/?Paneer+Tikka&sig=3",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "250 g"
      },
      {
        "name": "Bell pepper",
        "quantity": "1 Pc"
      },
      {
        "name": "Onion",
        "quantity": "1 Pc"
      },
      {
        "name": "Tandoori masala",
        "quantity": "2 tsp"
      },
      {
        "name": "Hung curd",
        "quantity": "1/2 cup"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 4,
    "name": "Chicken 65",
    "category": "starter",
    "isVeg": false,
    "description": "Crispy fried chicken bites tossed with curry leaves, chilli, and South Indian spices.",
    "fullDescription": "Bite-sized chicken marinated in chilli and curry leaf tempering, deep-fried until crisp, then tossed with yogurt and spice mix for a fiery starter.",
    "image": "https://source.unsplash.com/featured/1200x800/?Chicken+65&sig=4",
    "ingredients": [
      {
        "name": "Chicken cubes",
        "quantity": "400 g"
      },
      {
        "name": "Curry leaves",
        "quantity": "12 leaves"
      },
      {
        "name": "Red chilli powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Corn flour",
        "quantity": "2 tbsp"
      },
      {
        "name": "Yogurt",
        "quantity": "3 tbsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 5,
    "name": "Gulab Jamun",
    "category": "desert",
    "isVeg": true,
    "description": "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup.",
    "fullDescription": "Golden fried khoya balls soaked in warm sugar syrup infused with rose water and cardamom. Served warm with a sprinkle of pistachios.",
    "image": "https://source.unsplash.com/featured/1200x800/?Gulab+Jamun&sig=5",
    "ingredients": [
      {
        "name": "Khoya",
        "quantity": "200 g"
      },
      {
        "name": "Sugar",
        "quantity": "1 cup"
      },
      {
        "name": "Rose water",
        "quantity": "1 tsp"
      },
      {
        "name": "Cardamom powder",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Ghee",
        "quantity": "for frying"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 6,
    "name": "Jeera Rice",
    "category": "sides",
    "isVeg": true,
    "description": "Fragrant basmati rice tempered with cumin seeds and ghee.",
    "fullDescription": "Fluffy basmati rice cooked with whole cumin seeds, bay leaf, and ghee for a light aromatic side that pairs with any curry.",
    "image": "https://source.unsplash.com/featured/1200x800/?Jeera+Rice&sig=6",
    "ingredients": [
      {
        "name": "Basmati rice",
        "quantity": "1 cup"
      },
      {
        "name": "Cumin seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Ghee",
        "quantity": "2 tbsp"
      },
      {
        "name": "Bay leaf",
        "quantity": "1 Pc"
      },
      {
        "name": "Salt",
        "quantity": "to taste"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 7,
    "name": "Fried Avocado Tacos",
    "category": "main",
    "isVeg": true,
    "description": "Crispy tortillas filled with fried avocado, salsa, and fresh herbs.",
    "fullDescription": "Corn tortillas loaded with crispy fried avocado slices, pico de gallo, lime crema, and microgreens for a fresh party favourite.",
    "image": "https://source.unsplash.com/featured/1200x800/?Fried+Avocado+Tacos&sig=7",
    "ingredients": [
      {
        "name": "Avocado",
        "quantity": "2 Pc"
      },
      {
        "name": "Corn tortillas",
        "quantity": "6 Pc"
      },
      {
        "name": "Cherry tomato",
        "quantity": "100 g"
      },
      {
        "name": "Lime",
        "quantity": "2 Pc"
      },
      {
        "name": "Fresh coriander",
        "quantity": "1 bunch"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 8,
    "name": "Butter Naan",
    "category": "sides",
    "isVeg": true,
    "description": "Soft leavened flatbread brushed with butter from the tandoor.",
    "fullDescription": "Classic tandoor-baked naan with a pillowy interior, brushed with melted butter and served hot alongside curries.",
    "image": "https://source.unsplash.com/featured/1200x800/?Butter+Naan&sig=8",
    "ingredients": [
      {
        "name": "Refined flour",
        "quantity": "2 cups"
      },
      {
        "name": "Yeast",
        "quantity": "1 tsp"
      },
      {
        "name": "Butter",
        "quantity": "3 tbsp"
      },
      {
        "name": "Yogurt",
        "quantity": "2 tbsp"
      },
      {
        "name": "Sugar",
        "quantity": "1 tsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 9,
    "name": "Samosa Platter",
    "category": "starter",
    "isVeg": true,
    "description": "Crisp pastry pockets stuffed with spiced potatoes and peas, served with chutneys.",
    "fullDescription": "Golden fried samosas with a flaky crust and hearty potato-pea filling, tempered with cumin and coriander. Served with tangy tamarind and mint chutney.",
    "image": "https://source.unsplash.com/featured/1200x800/?Samosa+Platter&sig=9",
    "ingredients": [
      {
        "name": "Potato",
        "quantity": "3 Pc"
      },
      {
        "name": "Peas",
        "quantity": "1/2 cup"
      },
      {
        "name": "Refined flour",
        "quantity": "2 cups"
      },
      {
        "name": "Cumin seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "for frying"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 10,
    "name": "Papdi Chaat",
    "category": "starter",
    "isVeg": true,
    "description": "Crispy wafers topped with yogurt, chutneys, sev, and chaat masala.",
    "fullDescription": "Layered street-style chaat with chilled yogurt, sweet tamarind chutney, green chutney, boiled potato, and crunchy sev for the perfect bite.",
    "image": "https://source.unsplash.com/featured/1200x800/?Papdi+Chaat&sig=10",
    "ingredients": [
      {
        "name": "Papdi",
        "quantity": "24 Pc"
      },
      {
        "name": "Yogurt",
        "quantity": "1 cup"
      },
      {
        "name": "Boiled potato",
        "quantity": "2 Pc"
      },
      {
        "name": "Sev",
        "quantity": "1/2 cup"
      },
      {
        "name": "Chaat masala",
        "quantity": "2 tsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 11,
    "name": "Hara Bhara Kebab",
    "category": "starter",
    "isVeg": true,
    "description": "Spinach and green pea patties shallow-fried until crisp outside.",
    "fullDescription": "Nutritious kebabs bound with potato and paneer, flavoured with green chilli and garam masala. Ideal vegetarian starter with mint chutney.",
    "image": "https://source.unsplash.com/featured/1200x800/?Hara+Bhara+Kebab&sig=11",
    "ingredients": [
      {
        "name": "Spinach",
        "quantity": "200 g"
      },
      {
        "name": "Green peas",
        "quantity": "1/2 cup"
      },
      {
        "name": "Paneer",
        "quantity": "100 g"
      },
      {
        "name": "Potato",
        "quantity": "1 Pc"
      },
      {
        "name": "Bread crumbs",
        "quantity": "3 tbsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 12,
    "name": "Fish Amritsari",
    "category": "starter",
    "isVeg": false,
    "description": "Batter-fried fish fillets with ajwain and carom-spiced coating.",
    "fullDescription": "Fresh river fish marinated in gram flour, carom seeds, and chilli, deep-fried to a golden crunch. A Punjabi favourite with onion rings.",
    "image": "https://source.unsplash.com/featured/1200x800/?Fish+Amritsari&sig=12",
    "ingredients": [
      {
        "name": "Fish fillet",
        "quantity": "400 g"
      },
      {
        "name": "Gram flour",
        "quantity": "1/2 cup"
      },
      {
        "name": "Ajwain",
        "quantity": "1 tsp"
      },
      {
        "name": "Red chilli powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Lemon",
        "quantity": "1 Pc"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 13,
    "name": "Tom Yum Soup",
    "category": "starter",
    "isVeg": false,
    "description": "Hot and sour soup with lemongrass, galangal, and prawns.",
    "fullDescription": "Classic Thai soup with aromatic broth, mushrooms, prawns, lime leaves, and bird eye chilli for a bold party opener.",
    "image": "https://source.unsplash.com/featured/1200x800/?Tom+Yum+Soup&sig=13",
    "ingredients": [
      {
        "name": "Prawns",
        "quantity": "200 g"
      },
      {
        "name": "Lemongrass",
        "quantity": "2 stalks"
      },
      {
        "name": "Galangal",
        "quantity": "30 g"
      },
      {
        "name": "Lime juice",
        "quantity": "2 tbsp"
      },
      {
        "name": "Fish sauce",
        "quantity": "1 tbsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 14,
    "name": "Bruschetta Trio",
    "category": "starter",
    "isVeg": true,
    "description": "Toasted baguette with tomato-basil, olive tapenade, and ricotta.",
    "fullDescription": "Three Italian-inspired toppings on crisp crostini \u2014 classic tomato basil, black olive tapenade, and whipped ricotta with honey.",
    "image": "https://source.unsplash.com/featured/1200x800/?Bruschetta+Trio&sig=14",
    "ingredients": [
      {
        "name": "Baguette",
        "quantity": "1/2 loaf"
      },
      {
        "name": "Cherry tomato",
        "quantity": "200 g"
      },
      {
        "name": "Fresh basil",
        "quantity": "1 bunch"
      },
      {
        "name": "Ricotta",
        "quantity": "100 g"
      },
      {
        "name": "Black olives",
        "quantity": "80 g"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 15,
    "name": "Spring Rolls",
    "category": "starter",
    "isVeg": true,
    "description": "Crispy rolls with glass noodles, cabbage, and carrot.",
    "fullDescription": "Hand-rolled vegetable spring rolls fried until shatteringly crisp, served with sweet chilli dip.",
    "image": "https://source.unsplash.com/featured/1200x800/?Spring+Rolls&sig=15",
    "ingredients": [
      {
        "name": "Spring roll wrappers",
        "quantity": "12 Pc"
      },
      {
        "name": "Glass noodles",
        "quantity": "50 g"
      },
      {
        "name": "Cabbage",
        "quantity": "1 cup"
      },
      {
        "name": "Carrot",
        "quantity": "1 Pc"
      },
      {
        "name": "Soy sauce",
        "quantity": "1 tbsp"
      }
    ],
    "servings": "For 3 people"
  },
  {
    "id": 16,
    "name": "Buffalo Wings",
    "category": "starter",
    "isVeg": false,
    "description": "Crispy wings glazed in spicy butter sauce with blue cheese dip.",
    "fullDescription": "Double-fried chicken wings tossed in classic buffalo sauce, served cool with celery sticks and ranch or blue cheese.",
    "image": "https://source.unsplash.com/featured/1200x800/?Buffalo+Wings&sig=16",
    "ingredients": [
      {
        "name": "Chicken wings",
        "quantity": "500 g"
      },
      {
        "name": "Hot sauce",
        "quantity": "1/4 cup"
      },
      {
        "name": "Butter",
        "quantity": "3 tbsp"
      },
      {
        "name": "Garlic powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Celery",
        "quantity": "4 stalks"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 17,
    "name": "Caprese Skewers",
    "category": "starter",
    "isVeg": true,
    "description": "Cherry tomato, mozzarella, and basil with balsamic drizzle.",
    "fullDescription": "Bite-sized caprese on skewers with extra virgin olive oil and aged balsamic reduction \u2014 light and elegant.",
    "image": "https://source.unsplash.com/featured/1200x800/?Caprese+Skewers&sig=17",
    "ingredients": [
      {
        "name": "Cherry tomato",
        "quantity": "200 g"
      },
      {
        "name": "Mozzarella balls",
        "quantity": "150 g"
      },
      {
        "name": "Fresh basil",
        "quantity": "20 leaves"
      },
      {
        "name": "Balsamic glaze",
        "quantity": "2 tbsp"
      },
      {
        "name": "Olive oil",
        "quantity": "1 tbsp"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 18,
    "name": "Mutton Rogan Josh",
    "category": "main",
    "isVeg": false,
    "description": "Kashmiri-style lamb curry with yoghurt and aromatic spices.",
    "fullDescription": "Slow-braised mutton in a deep red gravy of Kashmiri chilli, fennel, and yoghurt \u2014 rich, warming, and perfect with rice.",
    "image": "https://source.unsplash.com/featured/1200x800/?Mutton+Rogan+Josh&sig=18",
    "ingredients": [
      {
        "name": "Mutton",
        "quantity": "600 g"
      },
      {
        "name": "Yogurt",
        "quantity": "1 cup"
      },
      {
        "name": "Kashmiri chilli",
        "quantity": "2 tbsp"
      },
      {
        "name": "Fennel powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Onion",
        "quantity": "3 Pc"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 19,
    "name": "Butter Chicken",
    "category": "main",
    "isVeg": false,
    "description": "Tandoori chicken in silky tomato-butter-cream gravy.",
    "fullDescription": "Charred chicken tikka simmered in makhani gravy with kasuri methi, honey, and fresh cream \u2014 the crown jewel of North Indian mains.",
    "image": "https://source.unsplash.com/featured/1200x800/?Butter+Chicken&sig=19",
    "ingredients": [
      {
        "name": "Chicken tikka",
        "quantity": "400 g"
      },
      {
        "name": "Tomato puree",
        "quantity": "2 cups"
      },
      {
        "name": "Butter",
        "quantity": "100 g"
      },
      {
        "name": "Fresh cream",
        "quantity": "1/2 cup"
      },
      {
        "name": "Kasuri methi",
        "quantity": "1 tbsp"
      }
    ],
    "servings": "For 3 people"
  },
  {
    "id": 20,
    "name": "Palak Paneer",
    "category": "main",
    "isVeg": true,
    "description": "Cottage cheese cubes in creamy spinach gravy.",
    "fullDescription": "Blanched spinach pureed with ginger, garlic, and mild spices, finished with pan-fried paneer cubes and a touch of cream.",
    "image": "https://source.unsplash.com/featured/1200x800/?Palak+Paneer&sig=20",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "300 g"
      },
      {
        "name": "Spinach",
        "quantity": "500 g"
      },
      {
        "name": "Onion",
        "quantity": "1 Pc"
      },
      {
        "name": "Fresh cream",
        "quantity": "2 tbsp"
      },
      {
        "name": "Garam masala",
        "quantity": "1/2 tsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 21,
    "name": "Hyderabadi Biryani",
    "category": "main",
    "isVeg": false,
    "description": "Layered basmati rice with marinated chicken, saffron, and mint.",
    "fullDescription": "Dum-cooked biryani with fragrant long-grain rice, yogurt-marinated chicken, fried onions, and kewra water for authentic Hyderabadi aroma.",
    "image": "https://source.unsplash.com/featured/1200x800/?Hyderabadi+Biryani&sig=21",
    "ingredients": [
      {
        "name": "Basmati rice",
        "quantity": "2 cups"
      },
      {
        "name": "Chicken",
        "quantity": "500 g"
      },
      {
        "name": "Yogurt",
        "quantity": "3/4 cup"
      },
      {
        "name": "Fried onion",
        "quantity": "1 cup"
      },
      {
        "name": "Saffron",
        "quantity": "few strands"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 22,
    "name": "Veg Biryani",
    "category": "main",
    "isVeg": true,
    "description": "Aromatic rice with mixed vegetables, mint, and whole spices.",
    "fullDescription": "Colourful vegetable biryani dum-cooked with saffron milk, rose water, and crispy birista for a celebratory vegetarian main.",
    "image": "https://source.unsplash.com/featured/1200x800/?Veg+Biryani&sig=22",
    "ingredients": [
      {
        "name": "Basmati rice",
        "quantity": "2 cups"
      },
      {
        "name": "Mixed vegetables",
        "quantity": "400 g"
      },
      {
        "name": "Mint",
        "quantity": "1/2 cup"
      },
      {
        "name": "Yogurt",
        "quantity": "1/2 cup"
      },
      {
        "name": "Ghee",
        "quantity": "4 tbsp"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 23,
    "name": "Penne Arrabbiata",
    "category": "main",
    "isVeg": true,
    "description": "Penne in spicy tomato sauce with garlic and chilli flakes.",
    "fullDescription": "Al dente penne tossed in a fiery San Marzano tomato sauce with olive oil, garlic, and parsley \u2014 simple and bold.",
    "image": "https://source.unsplash.com/featured/1200x800/?Penne+Arrabbiata&sig=23",
    "ingredients": [
      {
        "name": "Penne pasta",
        "quantity": "400 g"
      },
      {
        "name": "Tomato",
        "quantity": "600 g"
      },
      {
        "name": "Garlic",
        "quantity": "6 cloves"
      },
      {
        "name": "Chilli flakes",
        "quantity": "1 tsp"
      },
      {
        "name": "Olive oil",
        "quantity": "3 tbsp"
      }
    ],
    "servings": "For 3 people"
  },
  {
    "id": 24,
    "name": "Grilled Salmon",
    "category": "main",
    "isVeg": false,
    "description": "Atlantic salmon with lemon butter, asparagus, and herbs.",
    "fullDescription": "Skin-on salmon fillet pan-seared and finished in the oven with caper butter sauce and seasonal greens.",
    "image": "https://source.unsplash.com/featured/1200x800/?Grilled+Salmon&sig=24",
    "ingredients": [
      {
        "name": "Salmon fillet",
        "quantity": "400 g"
      },
      {
        "name": "Butter",
        "quantity": "50 g"
      },
      {
        "name": "Lemon",
        "quantity": "2 Pc"
      },
      {
        "name": "Asparagus",
        "quantity": "200 g"
      },
      {
        "name": "Capers",
        "quantity": "1 tbsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 25,
    "name": "Margherita Pizza",
    "category": "main",
    "isVeg": true,
    "description": "Wood-fired pizza with tomato, mozzarella, and fresh basil.",
    "fullDescription": "Classic Neapolitan-style crust with San Marzano sauce, fior di latte, extra virgin olive oil, and basil leaves.",
    "image": "https://source.unsplash.com/featured/1200x800/?Margherita+Pizza&sig=25",
    "ingredients": [
      {
        "name": "Pizza dough",
        "quantity": "1 ball"
      },
      {
        "name": "Mozzarella",
        "quantity": "200 g"
      },
      {
        "name": "Tomato sauce",
        "quantity": "1/2 cup"
      },
      {
        "name": "Fresh basil",
        "quantity": "12 leaves"
      },
      {
        "name": "Olive oil",
        "quantity": "2 tbsp"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 26,
    "name": "Beef Steak Frites",
    "category": "main",
    "isVeg": false,
    "description": "Grilled sirloin with herb butter and hand-cut fries.",
    "fullDescription": "Prime sirloin cooked to your preference, topped with compound butter, served with crispy fries and peppercorn jus.",
    "image": "https://source.unsplash.com/featured/1200x800/?Beef+Steak+Frites&sig=26",
    "ingredients": [
      {
        "name": "Beef sirloin",
        "quantity": "400 g"
      },
      {
        "name": "Potato",
        "quantity": "4 Pc"
      },
      {
        "name": "Butter",
        "quantity": "60 g"
      },
      {
        "name": "Thyme",
        "quantity": "4 sprigs"
      },
      {
        "name": "Garlic",
        "quantity": "4 cloves"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 27,
    "name": "Pad Thai",
    "category": "main",
    "isVeg": false,
    "description": "Stir-fried rice noodles with prawns, tamarind, and peanuts.",
    "fullDescription": "Wok-charred pad Thai with egg, bean sprouts, chives, and lime \u2014 balanced sweet, sour, and savoury.",
    "image": "https://source.unsplash.com/featured/1200x800/?Pad+Thai&sig=27",
    "ingredients": [
      {
        "name": "Rice noodles",
        "quantity": "300 g"
      },
      {
        "name": "Prawns",
        "quantity": "200 g"
      },
      {
        "name": "Tamarind paste",
        "quantity": "2 tbsp"
      },
      {
        "name": "Peanuts",
        "quantity": "1/4 cup"
      },
      {
        "name": "Bean sprouts",
        "quantity": "1 cup"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 28,
    "name": "Chicken Katsu Curry",
    "category": "main",
    "isVeg": false,
    "description": "Breaded chicken cutlet with mild Japanese curry and rice.",
    "fullDescription": "Panko-crusted chicken katsu sliced over steamed rice with thick roux-based curry sauce and pickled radish.",
    "image": "https://source.unsplash.com/featured/1200x800/?Chicken+Katsu+Curry&sig=28",
    "ingredients": [
      {
        "name": "Chicken breast",
        "quantity": "400 g"
      },
      {
        "name": "Panko",
        "quantity": "1 cup"
      },
      {
        "name": "Japanese curry roux",
        "quantity": "1/2 pack"
      },
      {
        "name": "Steamed rice",
        "quantity": "2 cups"
      },
      {
        "name": "Egg",
        "quantity": "2 Pc"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 29,
    "name": "Chole Bhature",
    "category": "main",
    "isVeg": true,
    "description": "Spiced chickpea curry with fluffy deep-fried bread.",
    "fullDescription": "Amritsari-style chole with tea-bag black colour and tangy masala, paired with airy bhature and pickled onion.",
    "image": "https://source.unsplash.com/featured/1200x800/?Chole+Bhature&sig=29",
    "ingredients": [
      {
        "name": "Chickpeas",
        "quantity": "2 cups"
      },
      {
        "name": "Refined flour",
        "quantity": "2 cups"
      },
      {
        "name": "Yogurt",
        "quantity": "1/2 cup"
      },
      {
        "name": "Tea bag",
        "quantity": "1 Pc"
      },
      {
        "name": "Amchur",
        "quantity": "1 tsp"
      }
    ],
    "servings": "For 3 people"
  },
  {
    "id": 30,
    "name": "Malai Kofta",
    "category": "main",
    "isVeg": true,
    "description": "Fried paneer-potato balls in rich tomato-cashew gravy.",
    "fullDescription": "Silky gravy of tomatoes, cashews, and cream with golden koftas stuffed with nuts and raisins \u2014 festive vegetarian main.",
    "image": "https://source.unsplash.com/featured/1200x800/?Malai+Kofta&sig=30",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200 g"
      },
      {
        "name": "Potato",
        "quantity": "2 Pc"
      },
      {
        "name": "Cashew paste",
        "quantity": "1/4 cup"
      },
      {
        "name": "Fresh cream",
        "quantity": "1/2 cup"
      },
      {
        "name": "Tomato",
        "quantity": "4 Pc"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 31,
    "name": "Prawn Moilee",
    "category": "main",
    "isVeg": false,
    "description": "Kerala-style prawns in coconut milk and curry leaves.",
    "fullDescription": "Coastal curry with mild heat, turmeric, coconut milk, and kokum \u2014 light yet indulgent with appam or rice.",
    "image": "https://source.unsplash.com/featured/1200x800/?Prawn+Moilee&sig=31",
    "ingredients": [
      {
        "name": "Prawns",
        "quantity": "400 g"
      },
      {
        "name": "Coconut milk",
        "quantity": "400 ml"
      },
      {
        "name": "Curry leaves",
        "quantity": "2 sprigs"
      },
      {
        "name": "Turmeric",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Kokum",
        "quantity": "2 Pc"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 32,
    "name": "Mushroom Risotto",
    "category": "main",
    "isVeg": true,
    "description": "Creamy arborio rice with wild mushrooms and parmesan.",
    "fullDescription": "Slow-stirred risotto with porcini stock, white wine, butter, and aged Parmigiano-Reggiano shavings.",
    "image": "https://source.unsplash.com/featured/1200x800/?Mushroom+Risotto&sig=32",
    "ingredients": [
      {
        "name": "Arborio rice",
        "quantity": "300 g"
      },
      {
        "name": "Mixed mushrooms",
        "quantity": "300 g"
      },
      {
        "name": "Parmesan",
        "quantity": "80 g"
      },
      {
        "name": "White wine",
        "quantity": "100 ml"
      },
      {
        "name": "Vegetable stock",
        "quantity": "1 litre"
      }
    ],
    "servings": "For 3 people"
  },
  {
    "id": 33,
    "name": "Lamb Tagine",
    "category": "main",
    "isVeg": false,
    "description": "Moroccan lamb with dried apricots, almonds, and couscous.",
    "fullDescription": "Slow-cooked lamb shoulder with ras el hanout, honeyed apricots, and toasted almonds \u2014 served with fluffy couscous.",
    "image": "https://source.unsplash.com/featured/1200x800/?Lamb+Tagine&sig=33",
    "ingredients": [
      {
        "name": "Lamb shoulder",
        "quantity": "600 g"
      },
      {
        "name": "Dried apricot",
        "quantity": "1/2 cup"
      },
      {
        "name": "Almonds",
        "quantity": "1/4 cup"
      },
      {
        "name": "Couscous",
        "quantity": "1 cup"
      },
      {
        "name": "Ras el hanout",
        "quantity": "2 tbsp"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 34,
    "name": "Katsu Ramen",
    "category": "main",
    "isVeg": false,
    "description": "Rich tonkotsu broth with noodles, egg, and pork chashu.",
    "fullDescription": "12-hour pork bone broth, wavy noodles, soft-boiled ajitama, nori, and tender chashu \u2014 comfort in a bowl.",
    "image": "https://source.unsplash.com/featured/1200x800/?Katsu+Ramen&sig=34",
    "ingredients": [
      {
        "name": "Ramen noodles",
        "quantity": "2 portions"
      },
      {
        "name": "Pork bones",
        "quantity": "1 kg"
      },
      {
        "name": "Chashu",
        "quantity": "150 g"
      },
      {
        "name": "Soft-boiled egg",
        "quantity": "2 Pc"
      },
      {
        "name": "Nori",
        "quantity": "2 sheets"
      }
    ],
    "servings": "For 2 people"
  },
  {
    "id": 35,
    "name": "Rasmalai",
    "category": "desert",
    "isVeg": true,
    "description": "Soft cheese discs soaked in saffron-cardamom milk.",
    "fullDescription": "Chenna patties simmered in thickened milk flavoured with saffron, pistachio, and rose \u2014 chilled and delicate.",
    "image": "https://source.unsplash.com/featured/1200x800/?Rasmalai&sig=35",
    "ingredients": [
      {
        "name": "Full cream milk",
        "quantity": "1 litre"
      },
      {
        "name": "Chenna",
        "quantity": "300 g"
      },
      {
        "name": "Saffron",
        "quantity": "few strands"
      },
      {
        "name": "Cardamom",
        "quantity": "4 pods"
      },
      {
        "name": "Sugar",
        "quantity": "3/4 cup"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 36,
    "name": "Chocolate Lava Cake",
    "category": "desert",
    "isVeg": true,
    "description": "Warm chocolate cake with molten centre and vanilla ice cream.",
    "fullDescription": "Individual ramekin cakes with 70% dark chocolate ganache centre, dusted with cocoa and paired with Madagascan vanilla bean ice cream.",
    "image": "https://source.unsplash.com/featured/1200x800/?Chocolate+Lava+Cake&sig=36",
    "ingredients": [
      {
        "name": "Dark chocolate",
        "quantity": "150 g"
      },
      {
        "name": "Butter",
        "quantity": "80 g"
      },
      {
        "name": "Eggs",
        "quantity": "3 Pc"
      },
      {
        "name": "Caster sugar",
        "quantity": "1/2 cup"
      },
      {
        "name": "Plain flour",
        "quantity": "40 g"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 37,
    "name": "Tiramisu",
    "category": "desert",
    "isVeg": true,
    "description": "Coffee-soaked ladyfingers with mascarpone and cocoa.",
    "fullDescription": "Classic Venetian tiramisu layered with espresso-dipped savoiardi, whipped mascarpone, and a dusting of Dutch cocoa.",
    "image": "https://source.unsplash.com/featured/1200x800/?Tiramisu&sig=37",
    "ingredients": [
      {
        "name": "Mascarpone",
        "quantity": "500 g"
      },
      {
        "name": "Espresso",
        "quantity": "200 ml"
      },
      {
        "name": "Ladyfingers",
        "quantity": "24 Pc"
      },
      {
        "name": "Eggs",
        "quantity": "4 Pc"
      },
      {
        "name": "Cocoa powder",
        "quantity": "2 tbsp"
      }
    ],
    "servings": "For 6 people"
  },
  {
    "id": 38,
    "name": "Mango Kulfi",
    "category": "desert",
    "isVeg": true,
    "description": "Dense mango ice cream on a stick with pistachio.",
    "fullDescription": "Traditional kulfi reduced milk base with Alphonso mango pulp, cardamom, and chopped pistachios \u2014 no churn needed.",
    "image": "https://source.unsplash.com/featured/1200x800/?Mango+Kulfi&sig=38",
    "ingredients": [
      {
        "name": "Full cream milk",
        "quantity": "1 litre"
      },
      {
        "name": "Mango pulp",
        "quantity": "1 cup"
      },
      {
        "name": "Condensed milk",
        "quantity": "1/2 cup"
      },
      {
        "name": "Cardamom",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Pistachio",
        "quantity": "2 tbsp"
      }
    ],
    "servings": "For 6 people"
  },
  {
    "id": 39,
    "name": "Cheesecake Slice",
    "category": "desert",
    "isVeg": true,
    "description": "New York style baked cheesecake with berry compote.",
    "fullDescription": "Vanilla bean cheesecake on graham cracker crust with seasonal mixed berry compote and mint.",
    "image": "https://source.unsplash.com/featured/1200x800/?Cheesecake+Slice&sig=39",
    "ingredients": [
      {
        "name": "Cream cheese",
        "quantity": "600 g"
      },
      {
        "name": "Digestive biscuits",
        "quantity": "200 g"
      },
      {
        "name": "Butter",
        "quantity": "80 g"
      },
      {
        "name": "Mixed berries",
        "quantity": "300 g"
      },
      {
        "name": "Sugar",
        "quantity": "3/4 cup"
      }
    ],
    "servings": "For 8 people"
  },
  {
    "id": 40,
    "name": "Fruit Trifle",
    "category": "desert",
    "isVeg": true,
    "description": "Layers of sponge, custard, jelly, and fresh fruit.",
    "fullDescription": "English trifle in a glass bowl with sherry-soaked sponge, vanilla custard, strawberry jelly, and whipped cream peaks.",
    "image": "https://source.unsplash.com/featured/1200x800/?Fruit+Trifle&sig=40",
    "ingredients": [
      {
        "name": "Sponge cake",
        "quantity": "200 g"
      },
      {
        "name": "Custard",
        "quantity": "2 cups"
      },
      {
        "name": "Mixed fruit",
        "quantity": "400 g"
      },
      {
        "name": "Whipping cream",
        "quantity": "300 ml"
      },
      {
        "name": "Strawberry jelly",
        "quantity": "1 pack"
      }
    ],
    "servings": "For 8 people"
  },
  {
    "id": 41,
    "name": "Baklava",
    "category": "desert",
    "isVeg": true,
    "description": "Layered filo with nuts and honey syrup.",
    "fullDescription": "Crisp phyllo layers with pistachio-walnut filling and orange-blossom scented syrup \u2014 cut into diamonds.",
    "image": "https://source.unsplash.com/featured/1200x800/?Baklava&sig=41",
    "ingredients": [
      {
        "name": "Phyllo sheets",
        "quantity": "20 Pc"
      },
      {
        "name": "Pistachio",
        "quantity": "150 g"
      },
      {
        "name": "Walnut",
        "quantity": "100 g"
      },
      {
        "name": "Honey",
        "quantity": "1/2 cup"
      },
      {
        "name": "Butter",
        "quantity": "150 g"
      }
    ],
    "servings": "For 12 pieces"
  },
  {
    "id": 42,
    "name": "Panna Cotta",
    "category": "desert",
    "isVeg": true,
    "description": "Vanilla cream set with gelatine and passion fruit coulis.",
    "fullDescription": "Silky Italian panna cotta with Tahitian vanilla and tart passion fruit reduction.",
    "image": "https://source.unsplash.com/featured/1200x800/?Panna+Cotta&sig=42",
    "ingredients": [
      {
        "name": "Heavy cream",
        "quantity": "500 ml"
      },
      {
        "name": "Gelatine",
        "quantity": "2 sheets"
      },
      {
        "name": "Sugar",
        "quantity": "50 g"
      },
      {
        "name": "Vanilla pod",
        "quantity": "1 Pc"
      },
      {
        "name": "Passion fruit",
        "quantity": "4 Pc"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 43,
    "name": "Kheer",
    "category": "desert",
    "isVeg": true,
    "description": "Slow-cooked rice pudding with cardamom and nuts.",
    "fullDescription": "Basmati rice simmered in full-fat milk until thick, sweetened with sugar and garnished with almonds and raisins.",
    "image": "https://source.unsplash.com/featured/1200x800/?Kheer&sig=43",
    "ingredients": [
      {
        "name": "Full cream milk",
        "quantity": "1.5 litre"
      },
      {
        "name": "Basmati rice",
        "quantity": "1/4 cup"
      },
      {
        "name": "Sugar",
        "quantity": "3/4 cup"
      },
      {
        "name": "Cardamom",
        "quantity": "4 pods"
      },
      {
        "name": "Almonds",
        "quantity": "2 tbsp"
      }
    ],
    "servings": "For 6 people"
  },
  {
    "id": 44,
    "name": "Macaron Selection",
    "category": "desert",
    "isVeg": true,
    "description": "Assorted almond meringue shells with ganache fillings.",
    "fullDescription": "Box of twelve: pistachio, raspberry, chocolate, and lemon \u2014 crisp shell, chewy interior.",
    "image": "https://source.unsplash.com/featured/1200x800/?Macaron+Selection&sig=44",
    "ingredients": [
      {
        "name": "Almond flour",
        "quantity": "150 g"
      },
      {
        "name": "Icing sugar",
        "quantity": "150 g"
      },
      {
        "name": "Egg whites",
        "quantity": "110 g"
      },
      {
        "name": "Caster sugar",
        "quantity": "150 g"
      },
      {
        "name": "Food colouring",
        "quantity": "as needed"
      }
    ],
    "servings": "For 12 pieces"
  },
  {
    "id": 45,
    "name": "Garlic Bread",
    "category": "sides",
    "isVeg": true,
    "description": "Baguette halves with garlic butter and parsley.",
    "fullDescription": "Toasted until golden with compound garlic-parsley butter and optional mozzarella melt.",
    "image": "https://source.unsplash.com/featured/1200x800/?Garlic+Bread&sig=45",
    "ingredients": [
      {
        "name": "Baguette",
        "quantity": "1 loaf"
      },
      {
        "name": "Butter",
        "quantity": "100 g"
      },
      {
        "name": "Garlic",
        "quantity": "6 cloves"
      },
      {
        "name": "Parsley",
        "quantity": "2 tbsp"
      },
      {
        "name": "Mozzarella",
        "quantity": "100 g"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 46,
    "name": "Garden Salad",
    "category": "sides",
    "isVeg": true,
    "description": "Mixed leaves, cucumber, cherry tomato, and vinaigrette.",
    "fullDescription": "Fresh mesclun with shaved fennel, radish, and lemon-olive oil dressing on the side.",
    "image": "https://source.unsplash.com/featured/1200x800/?Garden+Salad&sig=46",
    "ingredients": [
      {
        "name": "Mixed lettuce",
        "quantity": "200 g"
      },
      {
        "name": "Cherry tomato",
        "quantity": "150 g"
      },
      {
        "name": "Cucumber",
        "quantity": "1 Pc"
      },
      {
        "name": "Olive oil",
        "quantity": "3 tbsp"
      },
      {
        "name": "Lemon",
        "quantity": "1 Pc"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 47,
    "name": "Mashed Potato",
    "category": "sides",
    "isVeg": true,
    "description": "Buttery Yukon gold mash with cream and white pepper.",
    "fullDescription": "Passed through a ricer for silkiness, finished with warm cream and chive oil.",
    "image": "https://source.unsplash.com/featured/1200x800/?Mashed+Potato&sig=47",
    "ingredients": [
      {
        "name": "Potato",
        "quantity": "1 kg"
      },
      {
        "name": "Butter",
        "quantity": "80 g"
      },
      {
        "name": "Cream",
        "quantity": "100 ml"
      },
      {
        "name": "White pepper",
        "quantity": "1/4 tsp"
      },
      {
        "name": "Chives",
        "quantity": "2 tbsp"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 48,
    "name": "Raita Trio",
    "category": "sides",
    "isVeg": true,
    "description": "Cucumber, boondi, and pineapple yogurt dips.",
    "fullDescription": "Three chilled raitas \u2014 classic kheera, crispy boondi, and sweet-tangy pineapple \u2014 to cool spicy mains.",
    "image": "https://source.unsplash.com/featured/1200x800/?Raita+Trio&sig=48",
    "ingredients": [
      {
        "name": "Yogurt",
        "quantity": "600 g"
      },
      {
        "name": "Cucumber",
        "quantity": "1 Pc"
      },
      {
        "name": "Boondi",
        "quantity": "1/2 cup"
      },
      {
        "name": "Pineapple",
        "quantity": "1/2 cup"
      },
      {
        "name": "Roasted cumin",
        "quantity": "2 tsp"
      }
    ],
    "servings": "For 4 people"
  },
  {
    "id": 49,
    "name": "Coleslaw",
    "category": "sides",
    "isVeg": true,
    "description": "Cabbage and carrot slaw with creamy dressing.",
    "fullDescription": "Crunchy shredded cabbage and carrot in buttermilk-mayo dressing with celery seed.",
    "image": "https://source.unsplash.com/featured/1200x800/?Coleslaw&sig=49",
    "ingredients": [
      {
        "name": "Green cabbage",
        "quantity": "1/2 head"
      },
      {
        "name": "Carrot",
        "quantity": "2 Pc"
      },
      {
        "name": "Mayonnaise",
        "quantity": "1/2 cup"
      },
      {
        "name": "Buttermilk",
        "quantity": "2 tbsp"
      },
      {
        "name": "Celery seed",
        "quantity": "1/2 tsp"
      }
    ],
    "servings": "For 6 people"
  },
  {
    "id": 50,
    "name": "Grilled Corn",
    "category": "sides",
    "isVeg": true,
    "description": "Charred corn on the cob with lime and chilli butter.",
    "fullDescription": "Street-style bhutta brushed with chilli-lime butter and chaat masala \u2014 fun finger food.",
    "image": "https://source.unsplash.com/featured/1200x800/?Grilled+Corn&sig=50",
    "ingredients": [
      {
        "name": "Sweet corn",
        "quantity": "4 cobs"
      },
      {
        "name": "Butter",
        "quantity": "60 g"
      },
      {
        "name": "Lime",
        "quantity": "2 Pc"
      },
      {
        "name": "Chilli powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Chaat masala",
        "quantity": "2 tsp"
      }
    ],
    "servings": "For 4 people"
  }
]

export default menuData;
