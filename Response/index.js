const products = [
    {
        id: 0,
        name: 'ABC Malt',
        price: '₹320.00 - ₹1130.00',
        image: 'img/products/abc1.jpg',
        category: 'Malt',
        description: 'ABC Malt—a delicious and nutritious blend made from Apple, Beetroot, Carrot, Almonds, and Cashews. Crafted with care, our malt is 100% natural and homemade, with no preservatives, chemicals, or white sugar. Enjoy the wholesome goodness of pure ingredients in every spoonful, perfect for those who value health and taste.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/abc1.jpg', 'img/products/abc 2.jpg', 'img/products/abc 3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹400.00-₹1200.00",
        productdescription: "INGREDIENTS:\n\nApple, Beetroot, Carrot, Jaggery powder, Cashews, Almonds, and Elachi.\n\n SHELF LIFE:\n\n6 months",
        information: "TO MAKE A DELICIOUS NISSY ABC MALT:\n\n• Take 1-2 teaspoons of NISSY ABC malt mix to your mug.\n• Pour 200 ml of milk either hot or cold.\n• Stir well and enjoy it.\n(Don’t boil it along with milk.)\n\nHEALTH BENEFITS:\n\n• Encourage healthy brain growth\n• Enhances your memory power.\n• Promises to heal the gut well\n• Helps maintain the glow of the skin.\n• Beneficial for both skin and hair\n• Regulating your blood pressure",
        productImage: [
            "img/products/abc1.jpg",
            "img/products/abc 2.jpg",
            "img/products/abc 3.jpg",
            "img/products/Untitled design.png",
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 1130 },
            { id: "weight2", value: "250GM", label: "250GM", price: 320 },
            { id: "weight3", value: "500GM", label: "500GM", price: 590 }
        ],
    },
    {
        id: 1,
        name: 'Beetroot Malt',
        price: '₹ 300.00- ₹1050.00',
        image: 'img/products/beetroot1.jpg',
        category: 'Malt',
        description: 'Experience the natural goodness of our Beetroot Malt, a wholesome blend crafted from Beetroot, Jaggery powder, Cashew, Almond, and Elachi. Made with care, this malt is 100% natural and homemade, with no preservatives, chemicals, or white sugar. Enjoy a delicious and nutritious treat that’s pure, healthy, and packed with the goodness of nature.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/beetroot1.jpg', 'img/products/beetroot2.jpg', 'img/products/beetroot3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 270.00-₹ 1000.00",
        selfLife: '2 months',
        productdescription: "INGREDIENTS:\n\nBeetroot, Jaggery powder, Cashew, Almond and Elachi\n\nSHELF LIFE: 6 months",
        information: "TO MAKE A DELICIOUS NISSY BEETROOT MALT:\n\n• Take 1-2 teaspoons of NISSY Beetroot malt mix to your mug\n• Pour 200 ml of milk either hot or cold\n• Stir well and enjoy it.\n• Don’t boil it along with milk.\n\nHEALTH BENEFITS:\n\n• It increases hemoglobin.\n• Very suitable for pregnant women and children\n• Boosts immunity and stamina\n• Helps keep the skin glowing\n• Keeps blood pressure and sugar levels under control",
        productImage: [
            "img/products/beetroot1.jpg",
            "img/products/beetroot2.jpg",
            "img/products/beetroot3.jpg",
            "img/products/beetroot4.jpg",
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 1050 },
            { id: "weight2", value: "250GM", label: "250GM", price: 300 },
            { id: "weight3", value: "500GM", label: "500GM", price: 550 }
        ],
    },
    {
        id: 2,
        name: 'Carrot Malt',
        price: '₹ 320.00 - ₹ 11300', 
        image: 'img/products/Carrot1.jpg',
        category: 'Malt',
        description: 'Discover the vibrant flavors of our Carrot Malt, a nourishing blend made from Carrot, Jaggery powder, Cashew, Almond, and Elachi. Our malt is 100% natural and homemade, free from preservatives, chemicals, and white sugar. Indulge in a wholesome, delicious treat that brings together the pure goodness of nature in every sip.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/Carrot1.jpg', 'img/products/Carrot2.jpg', 'img/products/Carrot3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: '₹ 320.00 - ₹ 1200',
        selfLife: '1 months',
        productdescription: "INGREDIENTS:\n\nCarrot, Jaggery powder, Cashew, Almond and Elachi\n\nSHELF LIFE: 6 months",
        information: "TO MAKE A DELICIOUS NISSY CARROT MALT:\n\n• Take 1-2 teaspoons of NISSY CARROT malt mix to your mug\n• Pour 200 ml of milk either hot or cold\n• Stir well and enjoy it.\n• Don’t boil it along with milk.\n\nHEALTH BENEFITS:\n\n• Enhances the EyeSight.\n• Promotes Hair Growth.\n• Manages Blood Pressure.\n• Helps to attain Glowing Skin.\n• Naturally Detoxifies the body.",
        productImage: [
            "img/products/Carrot1.jpg",
            "img/products/Carrot2.jpg",
            "img/products/Carrot3.jpg",
            "img/products/Carrot1.jpg",
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 1130 },
            { id: "weight2", value: "250GM", label: "250GM", price: 320 },
            { id: "weight3", value: "500GM", label: "500GM", price: 590 }
        ],
    },
    {
        id: 3,
        name: 'Baby Cereal',
        price: '₹ 250.00 - ₹ 1050',
        image: 'img/products/cereal.jpg',
        category: 'Baby Food',
        description: 'Our Baby Cereal is a nourishing blend made from Rice, Almonds, Yellow Moong dhal, Bengal gram dhal, Split gram dhal, and Urad dhal. Carefully crafted at home, this cereal is 100% natural and free from preservatives, chemicals, and white sugar. It’s the perfect first food for your 6-month-old, providing wholesome nutrition that you can trust.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/cereal1.jpg', 'img/products/cereal2.jpg','img/products/cereal3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '6 months',
        productdescription: "INGREDIENTS:\n\nRice, Almonds, Yellow Moong dhal, Bengal gram dhal, Split gram dhal, Urad dhal\n\nSHELF LIFE - 6 months",
        information: "TO MAKE A DELICIOUS BABY CEREAL:\n\n• Take about 100ml of water into the bowl.\n• Add 1 or 2 scoops of NISSY Baby Cereal as needed and mix it well.\n• Place it on the stove and heat it till it becomes a paste.\n• Stir and feed the baby using a clean spoon.\n\nBENEFITS:\n\n• Rich in fiber, carbohydrates, protein, calcium, and magnesium.\n• Improves the growth of the brain and bones.\n• Boosts immunity and helps to gain weight.",
        productImage: [
            "img/products/cereal.jpg",
            "img/products/cereal1.jpg",
            "img/products/cereal2.jpg",
            "img/products/cereal3.jpg",
            "img/products/cereal.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 1050 },
            { id: "weight2", value: "200GM", label: "200GM", price: 250 },
            { id: "weight3", value: "400GM", label: "400GM", price: 450 }
        ],
    },
    {
        id: 4,
        name: 'NUTRITIONAL ENERGY DRINK MIX',
        price: '₹ 250.00 - ₹ 850', image: 'img/products/nutrimix0.jpg',
        category: 'NATURAL PROTEIN POWDER',
        description: 'Boost your daily protein intake with our Nutritional Energy Drink Mix, a natural protein powder crafted from Almonds, Cashew, Pistachio, Bengal gram, Green gram, Soybeans, Black gram, Barley, and Country Sugar.Homemade and 100% natural, this mix contains no preservatives, chemicals, or white sugar. It is designed to fulfill your daily protein needs and is suitable for anyone over the age of 1. Enjoy the wholesome benefits of this nutrient-rich blend, crafted to support a healthy and active lifestyle for all age groups.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/nutrimix1.jpg', 'img/products/Nutrimix2.jpg','img/products/Nutrimix3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '4 months',
        productdescription: "INGREDIENTS:\n\nAlmonds, Cashew, Pistachio, Bengal gram, Green gram, Soybeans, Peanut, Black gram, Barley, Elaichi, Country Sugar.\n\nSHELF LIFE: 6 MONTHS",
        information: "TO MAKE A DELICIOUS NUTRITIONAL ENERGY DRINK MIX:\n\n• Add 1-2 teaspoons of NISSY ENERGY DRINK MIX to your mug\n• Pour 200ml of hot milk\n• Stir well and enjoy it\n\nHEALTH BENEFITS:\n\n• Rich in protein\n• Boosts energy and strength\n• Strengthens the bones and nerves\n• Relieves joint and knee pains\n• Promotes heart health\n• Increases metabolism level\n• Improves stamina & endurance\n• Strengthens muscle fibers\n• Enriches the immune system\n• Ensures healthy brain function\n• Blood sugar control",
        productImage: [
            "img/products/nutrimix0.jpg",
            "img/products/nutrimix1.jpg",
            "img/products/Nutrimix2.jpg",
            "img/products/Nutrimix3.jpg",
            "img/products/nutrimix0.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 850 },
            { id: "weight2", value: "250GM", label: "250GM", price: 250 },
            { id: "weight3", value: "500GM", label: "500GM", price: 450 }
        ],
    },
    {
        id: 5,
        name: 'NUTRITIONAL ENERGY DRINK MIX FOR DIABETES',
        price: '₹ 250.00 - ₹ 1000', image: 'img/products/diabetes1.jpg',
        category: 'NATURAL PROTEIN POWDER',
        description: 'Elevate your health with our Nutritional Energy Drink Mix for Diabetes. This nutrient-rich mix is designed to meet your daily protein needs, helping to prevent weight loss, boost energy, strengthen bones, and enrich the immune system. Crafted with care, it contains no preservatives, chemicals, or white sugar. Homemade and 100% natural, our mix is suitable for individuals of all ages, offering a natural and effective way to support overall health and vitality. Enjoy the benefits of pure, wholesome nutrition with every serving.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/diabetes2.jpg', 'img/products/diabetes3.jpg', 'img/products/diabetes4.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        selfLife: '6 months',
        rate: " ₹ 400.00",
        productdescription: "INGREDIENTS:\n\nAlmonds, Cashew, Pistachio, Bengal gram, Green gram, Soybeans, Peanut, Black gram, Barley, Elaichi\n\nSHELF LIFE: 6 MONTHS",
        information: "TO MAKE A DELICIOUS NUTRITIONAL ENERGY DRINK MIX:\n\n• Add 1-2 teaspoons of NISSY ENERGY DRINK MIX to your mug\n• Pour 200ml of hot milk\n• Stir well and enjoy it\n\nHEALTH BENEFITS:\n\n• Rich in protein\n• Boosts energy and strength\n• Strengthens the bones and nerves\n• Relieves joint and knee pains\n• Promotes heart health\n• Increases metabolism level\n• Improves stamina & endurance\n• Strengthens muscle fibers\n• Enriches the immune system\n• Ensures healthy brain function\n• Aids in blood sugar control.",
        productImage: [
            "img/products/diabetes1.jpg",
            "img/products/diabetes2.jpg",
            "img/products/diabetes3.jpg",
            "img/products/diabetes4.jpg",
            "img/products/diabetes1.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 1050 },
            { id: "weight2", value: "200GM", label: "200GM", price: 250 },
            { id: "weight3", value: "400GM", label: "400GM", price: 450 }
        ],
    },
    {
        id: 6,
        name: 'BODY GLOW FOR BOYS',
        price: '₹ 150.00 - ₹ 550', image: 'img/products/bodyglow5.jpg',
        category: 'SKIN CARE',
        description: 'Revitalize and enhance your skin with our Body Glow for Girls, crafted from natural ingredients. This homemade, 100% natural formula is designed to Increase skin tone for a healthier appearance, Make the skin glow with a radiant shine, Prevent acne and skin problems for clear, smooth skin, Enjoy the benefits of a product made with care,this product is ideal for babes and provides a nurturing touch to their skincare routine. free from artificial additives, to keep your skin looking its best.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/bodyglow1.jpg', 'img/products/bodyglow2.jpg', 'img/products/bodyglow3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '4 months',
        productdescription: "INGREDIENTS:\n\n• Green Mung\n• Split Chick Peas\n• Vetiver\n• Neem Leaves\n• Nut Grass Dried\n• White Turmeric\n• Avaram\n• Babchi Seeds\n• Saffron\n• Rose Edouard Petals\n\nSHELF LIFE: 6 months",
        information: "DIRECTION FOR USE:\n\n• Mix the required amount of Nissy™ BodyGlow powder with water.\n• Smoothly apply the mixture to your baby's body.\n• Rinse off thoroughly with water after a while.\n\nBENEFITS:\n\n• Increases skin tone.\n• Makes the skin glow.\n• Prevents acne and skin problems.\n• Eliminates sweat odor.\n• Suitable for children's delicate skin.\n\nYou can use it as a face pack and bathing powder.",
        productImage: [
            "img/products/bodyglow1.jpg",
            "img/products/bodyglow2.jpg",
            "img/products/bodyglow3.jpg",
            "img/products/bodyglow4.jpg",
            "img/products/bodyglow5.jpg"
        ],
        weights: [
            { id: "weight1", value: "500GM", label: "500GM", price: 550 },
            { id: "weight2", value: "100GM", label: "100GM", price: 150 },
            { id: "weight3", value: "300GM", label: "300GM", price: 350 }
        ],
    },
    {
        id: 7,
        name: 'BODY GLOW FOR GIRLS',
        price: '₹ 150.00 - ₹ 550', image: 'img/products/bodyglow4.jpg',
        category: 'SKIN CARE',
        description: 'Enhance your natural beauty with our Body Glow for Girls, made from pure, natural ingredients. This homemade, 100% natural formula is perfect for Increasing skin tone for a more even complexion, Making the skin glow with a healthy radiance, Preventing acne and skin problems for clear, smooth skin, Gentle enough for young skin, this product is ideal for babes and provides a nurturing touch to their skincare routine. Enjoy the benefits of a product crafted with care, free from artificial additives.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/bodyglow1.jpg', 'img/products/bodyglow2.jpg', 'img/products/bodyglow3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '6 months',
        productdescription: "INGREDIENTS:\n\n• Green Mung\n• Split Chick Peas\n• Vetiver\n• Neem Leaves\n• Nut Grass Dried\n• Turmeric\n• White Turmeric\n• Avaram\n• Babchi Seeds\n• Saffron\n• Rose Edouard Petals\n\nSHELF LIFE: 6 months",
        information: "DIRECTION FOR USE:\n\n• Mix the required amount of Nissy™ BodyGlow powder with water.\n• Smoothly apply the mixture to your baby's body.\n• Rinse off thoroughly with water after a while.\n\nBENEFITS:\n\n• Increases skin tone.\n• Makes the skin glow.\n• Prevents acne and skin problems.\n• Eliminates sweat odor.\n• Suitable for children's delicate skin.\n\nYou can use it as a face pack and bathing powder.",
        productImage: [
            "img/products/bodyglow1.jpg",
            "img/products/bodyglow2.jpg",
            "img/products/bodyglow3.jpg",
            "img/products/bodyglow4.jpg",
            "img/products/bodyglow5.jpg"
        ],
        weights: [
            { id: "weight1", value: "500GM", label: "500GM", price: 550 },
            { id: "weight2", value: "100GM", label: "100GM", price: 150 },
            { id: "weight3", value: "300GM", label: "300GM", price: 350 }
        ],
    },
    {
        id: 8,
        name: 'HERBAL HAIR OIL',
        price: '₹ 300.00 - ₹ 1300', image: 'img/products/hairoil3.jpg',
        category: 'Haircare',
        description: 'Experience the power of nature with our Herbal Hair Oil, crafted from 36 natural ingredients. Free from preservatives and chemicals, this nourishing oil is designed to:\n\n- Combat dandruff and dry scalp for a healthier scalp\n- Protect against fungal and bacterial infections\n- Promote visible hair growth and strengthen hair roots\n- Prevent premature graying and enhance overall hair health\n\nGive your hair the natural care it deserves with a blend that supports strong, vibrant, and healthy hair. Ideal for those seeking a pure and effective solution for their hair care needs.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/hairoil1.jpg', 'img/products/hairoil2.jpg', 'img/products/hairoil4.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '12 months',
        productdescription: "INGREDIENTS:\n\n• Indian Acalypha\n• Gale of the Wind\n• Spade Flower\n• Hibiscus Leaves\n• Hibiscus Flower\n• Bishops Weed Creeper\n• White Castle Tree\n• Moringa Leaves\n• Lawsonia Inermis\n• Curry Leaves\n• Holy Basil\n• Neem Leaves\n• Betal Leaves\n• Bermuda Grass\n• Amla\n• Davana Plant\n• Tanners Cassia\n• Perennial Grass\n• Bhringraj White\n• Lemon\n• Black Cumin\n• Spanish Cherry Flower\n• Almond\n• Spikenard\n• Indigo\n• Fenugreek\n• Aloe Vera\n• Alkanet Root\n• Small Onion\n• Skunk Vine\n• Leppia Nod Flora\n• False Water Willow\n• Damask Rose\n\n• Virgin Coconut Oil\n• Gingelly Oil\n• Castor Oil\n\nSHELF LIFE: 1 YEAR",
        information: "DIRECTION FOR USE:\n\nStep 1: Split your hair into sections and pour a few drops of the oil on your scalp in each section.\nStep 2: Gently massage your scalp with your fingertips for about 10-12 minutes.\nStep 3: Apply the oil to the lengths of your hair.\nStep 4: Rinse your hair with NISSY Hair Beauty.\n\nBENEFITS:\n\n• Promotes Visible Hair Growth\n• Strengthens Hair Roots & Prevents Premature Graying\n• Combats Dandruff and Dry Scalp\n• Reduces Hair Loss\n• Protects Against Fungal & Bacterial Infections\n• Provides Stress Relief\n• Nourishes the Scalp.",
        productImage: [
            "img/products/hairoil1.jpg",
            "img/products/hairoil2.jpg",
            "img/products/hairoil3.jpg",
            "img/products/hairoil4.jpg",
            "img/products/hairoil5.jpg"
        ],
        weights: [
            { id: "weight1", value: "200ML", label: "200ML", price: 300 },
            { id: "weight2", value: "400ML", label: "400ML", price: 550 },
            { id: "weight3", value: "1LTR", label: "1LTR", price: 1300 }
        ],
    },
    {
        id: 9,
        name: 'HAIR BEAUTY',
        price: '₹ 150.00 - ₹ 550',
        image: 'img/products/hairbeauty1.jpg',
        category: 'Haircare',
        description: 'Revitalize your hair with our Herbal Hair Powder, crafted from natural ingredients to enhance your hair care routine. This powerful formula is designed to:\n\n- Strengthen hair follicles for overall health\n- Correct dandruff problems for a healthier scalp\n- Remove stickiness for a clean, fresh feel\n- Control hair fall and stimulate hair growth for fuller, more vibrant hair\n\nExperience the benefits of a natural solution that supports strong, healthy hair with every use. Ideal for anyone seeking effective, gentle care for their hair.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/hairbeauty1.jpg', 'img/products/hairbeauty2.jpg', 'img/products/hairbeauty3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '6 months',
        productdescription: "INGREDIENTS:\n\n• Acacia Concinna\n• Soapnut\n• White Turmeric\n• Vetiver\n• Sweet Flag\n• Green Mung\n• Fenugreek\n• Babchi Seeds\n• Dried Amla\n• Neem Leaves\n• Curry Leaves\n• Egyptian Privet\n• Hibiscus Leaves\n• Hibiscus\n• Neem Flowers\n• Avaram\n• Maul Sari Flowers\n• Rose Edouard Petals\n\nSHELF LIFE: 6 MONTHS.",
        information: "DIRECTION FOR USE:\n\n• Mix the required amount of Nissy Herbal Hair Powder with water.\n• Smoothly apply the mixture on your hair and its roots.\n• After 2 minutes, rinse off thoroughly with water.\n\nBENEFITS:\n\n• Keeps hair follicles strong and healthy.\n• Corrects dandruff problems.\n• Prevents hair dryness.\n• Helps prevent head lice.\n• Helps retain the natural color of hair.\n• Assists in getting rid of gray hair.\n• Removes stickiness from the hair.\n• Controls hair fall and stimulates hair growth.",
        productImage: [
            "img/products/hairbeauty1.jpg",
            "img/products/hairbeauty2.jpg",
            "img/products/hairbeauty3.jpg",
            "img/products/hairbeauty4.jpg",
            "img/products/hairbeauty5.jpg"
        ],
        weights: [
            { id: "weight1", value: "500GM", label: "500GM", price: 550 },
            { id: "weight2", value: "100GM", label: "100GM", price: 150 },
            { id: "weight3", value: "300GM", label: "300GM", price: 350 }
        ],
    },

    {
        id: 10,
        name: 'ENERGY BALLS',
        price: '₹ 280.00 - ₹ 1250',
        image: 'img/products/balls4.jpg',
        category: 'HEALTHY SNACKS',
        description: 'Enjoy a delicious and nutritious snack with our Energy Balls, crafted from a wholesome blend of Almonds, Cashews, Peanuts, Black Dates, and Poppy Seeds. These treats are completely free from preservatives, chemicals, and white sugar, with no added country sugar.\n\nPerfect as a healthy snack for babies or a crunchy treat for anyone, our Energy Balls provide a natural and satisfying crunch. Ideal for those seeking a wholesome and tasty snack option that’s as good for you as it is enjoyable.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/balls1.jpg', 'img/products/balls2.jpg','img/products/balls3.jpg'],
        availability: "out of Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '2 months',
        productdescription: "INGREDIENTS:\n\nAlmond, Cashew, Peanut, Black Dates, Poppy Seeds\n\nSHELF LIFE: 20 days",
        information: "HEALTH BENEFITS:\n\n• Helps increase hemoglobin.\n• Boosts energy and blood flow.\n• Provides necessary protein for cell growth in the body.\n• Reduces the amount of bad cholesterol.\n• Enhances digestive health.\n• Helps to avoid diabetes and high blood pressure.",
        productImage: [
            "img/products/balls1.jpg",
            "img/products/balls2.jpg",
            "img/products/balls3.jpg",
            "img/products/balls4.jpg",
            "img/products/balls1.jpg"
        ],
        weights: [
            { id: "weight1", value: "1125GM", label: "1225KG", price: 1250 },
            { id: "weight2", value: "225GM", label: "225GM", price: 280 },
            { id: "weight3", value: "550GM", label: "550GM", price: 510 }
        ],
    },

    {
        id: 11,
        name: 'MALT COMBO',
        price: '₹ 280.00 - ₹ 1250',
        image: 'img/products/maltcombo.jpg',
        category: 'COMBO PACK',
        description: 'MALT COMBO:\n\n Discover our wholesome malt trio—ABC Malt, Beetroot Malt, and Carrot Malt. Each blend is crafted from natural ingredients including apple, beetroot, carrot, almond, cashew, and country sugar, offering a nutritious and delicious alternative to tea and coffee. These malts are perfect for children, providing a healthy drink option that supports their growth and development. Packed with essential nutrients, our malts are designed to be both tasty and beneficial, making them an ideal choice for a balanced diet. Give your family the gift of health with our natural malt drinks—free from preservatives and artificial ingredients, and full of the goodness they need to thrive.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/abc1.jpg', 'img/products/beetroot1.jpg','img/products/carrot1.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '2 months',
        productdescription: "MALT COMBO PACK:\n\n ABC MALT - 250GM,\n BEETROOT MALT - 250GM,\n CARROT MALT - 250GM,\n\n SHELF LIFE: 6 months",
        information: "TO MAKE A DELICIOUS NISSY MALT:\n\n • Take 1-2 teaspoons of NISSY malt mix to your mug.\n • Pour 200 ml of milk, either hot or cold.\n • Stir well and enjoy it.\n • Don’t boil it along with milk.",
        productImage: [
            "img/products/maltcombo.jpg",
            "img/products/abc1.jpg",
            "img/products/beetroot1.jpg",
            "img/products/carrot1.jpg"
            
        ],
        weights: [
            { id: "weight1", value: "1125GM", label: "1225KG", price: 1250 },
            { id: "weight2", value: "225GM", label: "225GM", price: 280 },
            { id: "weight3", value: "550GM", label: "550GM", price: 510 }
        ],
    },

    {
        id: 12,
        name: 'COMBOPACK-1',
        price: '₹ 280.00 - ₹ 1250',
        image: 'img/products/COMBOPACK1.jpg',
        category: 'COMBO PACK',
        description: 'Our ABC Malt is a wholesome blend of natural ingredients, This nutritious malt mix is designed to support your overall well-being with its array of health benefits.\n Key Benefits:\n Gut Health: Promises to heal the gut and promote healthy digestion.\n Radiant Skin: Helps maintain a natural glow of the skin.\n Brain Development: Supports healthy brain growth for improved cognitive function.\n Memory Power: Enhances your memory and mental clarity.\n\n Enjoy a delicious and healthy drink that nurtures your body from within. Perfect for those seeking a natural, nourishing alternative to regular beverages.\nBoost your daily protein intake with our Nutritional Energy Drink Mix, It is designed to fulfill your daily protein needs and is suitable for anyone. Enjoy the wholesome benefits of this nutrient-rich blend, crafted to support a healthy and active lifestyle for all age groups.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/COMBOPACK1.jpg', 'img/products/abc1.jpg','img/products/nutrimix1.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '2 months',
        productdescription: "COMBO PACK-1:\n\n ABC MALT - 250GM,\n NUTRITIONAL ENERGY DRINK MIX - 250GM.\n\n SHELF LIFE: 6 months.",
        information: "TO MAKE A DELICIOUS NISSY MIX:\n\n • Take 1-2 teaspoons of NISSY malt mix to your mug.\n • Pour 200 ml of milk, either hot or cold.\n • Stir well and enjoy it.\n • Do not boil it along with milk.",
        productImage: [
            "img/products/COMBOPACK1.jpg",
            "img/products/abc1.jpg",
            "img/products/nutrimix1.jpg"
            
        ],
        weights: [
            { id: "weight1", value: "1125GM", label: "1225KG", price: 1250 },
            { id: "weight2", value: "225GM", label: "225GM", price: 280 },
            { id: "weight3", value: "550GM", label: "550GM", price: 510 }
        ],
    },

    {
        id: 13,
        name: 'COMBO PACK-2',
        price: '₹ 280.00 - ₹ 1250',
        image: 'img/products/COMBOPACK2.jpg',
        category: 'COMBO PACK',
        description: 'Experience the natural goodness of our Beetroot Malt, a wholesome blend crafted from Beetroot, Jaggery powder, Cashew, Almond, and Elachi. Made with care, this malt is 100% natural and homemade, with no preservatives, chemicals, or white sugar. Enjoy a delicious and nutritious treat that’s pure, healthy, and packed with the goodness of nature.\n\nEnjoy a delicious and healthy drink that nurtures your body from within. Perfect for those seeking a natural, nourishing alternative to regular beverages.\nBoost your daily protein intake with our Nutritional Energy Drink Mix, It is designed to fulfill your daily protein needs and is suitable for anyone. Enjoy the wholesome benefits of this nutrient-rich blend, crafted to support a healthy and active lifestyle for all age groups.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/COMBOPACK2.jpg', 'img/products/beetroot1.jpg','img/products/nutrimix1.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '2 months',
        productdescription: "COMBO PACK-1:\n\n BEETROOT MALT - 250GM,\n NUTRITIONAL ENERGY DRINK MIX - 250GM.\n\n SHELF LIFE: 6 months.",
        information: "TO MAKE A DELICIOUS NISSY MIX:\n\n • Take 1-2 teaspoons of NISSY malt mix to your mug.\n • Pour 200 ml of milk, either hot or cold.\n • Stir well and enjoy it.\n • Do not boil it along with milk.",
        productImage: [
            "img/products/COMBOPACK2.jpg",
            "img/products/beetroot1.jpg",
            "img/products/nutrimix1.jpg"
            
        ],
        weights: [
            { id: "weight1", value: "1125GM", label: "1225KG", price: 1250 },
            { id: "weight2", value: "225GM", label: "225GM", price: 280 },
            { id: "weight3", value: "550GM", label: "550GM", price: 510 }
        ],
    },

    {
        id: 14,
        name: 'COMBO-4',
        price: '₹ 280.00 - ₹ 1250',
        image: 'img/Nissy/Newimages/4.jpg',
        category: 'HEALTHY SNACKS',
        description: 'Enjoy a delicious and nutritious snack with our Energy Balls, crafted from a wholesome blend of Almonds, Cashews, Peanuts, Black Dates, and Poppy Seeds. These treats are completely free from preservatives, chemicals, and white sugar, with no added country sugar.\n\nPerfect as a healthy snack for babies or a crunchy treat for anyone, our Energy Balls provide a natural and satisfying crunch. Ideal for those seeking a wholesome and tasty snack option that’s as good for you as it is enjoyable.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg','img/Nissy/Newimages/1.jpg'],
        availability: "out of Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '2 months',
        productdescription: "INGREDIENTS:\n\nAlmond, Cashew, Peanut, Black Dates, Poppy Seeds\n\nSHELF LIFE: 20 days",
        information: "HEALTH BENEFITS:\n\n• Helps increase hemoglobin.\n• Boosts energy and blood flow.\n• Provides necessary protein for cell growth in the body.\n• Reduces the amount of bad cholesterol.\n• Enhances digestive health.\n• Helps to avoid diabetes and high blood pressure.",
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-4.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1125GM", label: "1225KG", price: 1250 },
            { id: "weight2", value: "225GM", label: "225GM", price: 280 },
            { id: "weight3", value: "550GM", label: "550GM", price: 510 }
        ],
    },
    // Add more products as needed
];


const Bannerimages = [
    { src: "img/banner/herobanner1.jpg", alt: "First slide",category: "Malt", },
    { src: "img/banner/herobanner2.jpg", alt: "Second slide" , category: "Baby Food",},
    { src: "img/banner/herobanner3.jpg", alt: "Third slide" , category: "SKIN CARE",},
    { src: "img/banner/herobanner4.jpg", alt: "Fourth slide", category: "NATURAL PROTEIN POWDER" },
    { src: "img/banner/herobanner5.jpg", alt: "Fifth slide", category: "Malt" }
];

const categoryItems = [
    { src: "img/Category/3.jpg", category: "Malt", alt: "Malt" },
    { src: "img/Category/Me.jpg", category: "Baby Food", alt: "Baby Food" },
    { src: "img/Category/2.jpg", category: "SKIN CARE", alt: "Skin Care" },
    { src: "img/Category/1.jpg", category: "NATURAL PROTEIN POWDER", alt: "Natural Protien Powder" },
    { src: "img/Category/2.jpg", category: "Haircare", alt: "Haircare" },
    { src: "img/products/maltcombo.jpg", category: "COMBO PACK", alt: "COMBO PACK" },
    { src: "img/Category/3.jpg", category: "HEALTHY SNACKS", alt: "HEALTHY SNACKS" },
];


function generateProductHTML(product) {
    const weightOptionsHTML = product.weights.map(weight =>
        `<label>
        <input type="radio" name="weight-${product.id}" value="${weight.value}" data-price="${weight.price}" onclick="updatePrice(${product.id})"> 
        ${weight.label}
    </label><br>`).join('');
    const imagesHTML = product.images.map(img =>
        `<img src="${img}" alt="image">`).join('');

    return `

                <div class="featured__filter-items col-lg-3 col-md-6 col-sm-6 mix ${product.category}">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" onclick="location.href='shop-details.html?id=${product.id}'"> 
                        <img src=${product.image} alt="product"> 
                       </div>
                        <div class="featured__item__text">
                            <h6><a href="#">${product.name}</a></h6>
                            <h5>${product.price}</h5>
                            <button class="featured__item__text-optionbtn" onclick="openNav(${product.id})">Select Option</button>
                            <div id="overlay-${product.id}" class="overlay" onclick="closeNav(${product.id})"></div>
                            <div id="mySidenav-${product.id}" class="sidenav">
                                <a href="javascript:void(0)" class="closebtn" onclick="closeNav(${product.id})">&times;</a>
                                <div class="sidenav-content">
                                    <div class="slider" id="slider-${product.id}">
                                        <div class="slides" id="slides-${product.id}">
                                            ${imagesHTML}
                                        </div>
                                        <button class="prev" onclick="moveSlide(${product.id}, -1)">&#10094;</button>
                                        <button class="next" onclick="moveSlide(${product.id}, 1)">&#10095;</button>
                                    </div>
                                    <div class="main-content">
                                        <div class="main-content-heading"><a>${product.name}</a></div>
                                        <p>${product.price}</p>
                                        <p>${product.description}</p>
                                        <div>
                                            <h4>Weight</h4>
                                            <div class="weight-display">
                                                ${weightOptionsHTML}
                                            </div>
                                        </div>
                                        <div id="price-display-${product.id}" class="price-display">
                                    Price: ₹<span id="calculated-price-${product.id}">0</span>
                                </div>
                                        <div class="order-section">
                                            <button class="order-section-countbutton" onclick="changeQuantity1(-1, ${product.id})">-</button>
                                            <span id="quantity-${product.id}">1</span>
                                            <button class="order-section-countbutton" onclick="changeQuantity1(1, ${product.id})">+</button>
                                    <button class="add-to-cart" onclick="addToCartWithSelectedWeight(${product.id})">Add to Cart</button>
                                            <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
}


function addToCartWithSelectedWeight(productId) {
    const selectedWeightElement = document.querySelector(`input[name='weight-${productId}']:checked`);
    if (!selectedWeightElement) {
        showToast(`Please select any weight`,'error')
        return;
    }

    const selectedWeight = selectedWeightElement.value;
    const pricePerUnit = parseFloat(selectedWeightElement.getAttribute('data-price'));

    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (!quantityElement) {
        showToast('Please select the Quantity','error');
        return;
    }

    const quantity = parseInt(quantityElement.textContent);

    if (isNaN(quantity)) {
        showToast('Invalid quantity value','error');
        return;
    }

    addToCart(productId, selectedWeight, quantity, pricePerUnit);
}


function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    
    const selectedWeightElement = document.querySelector(`input[name="weight-${productId}"]:checked`);
    
    if (!selectedWeightElement) {
        showToast('Please select a weight option.','error');
        return;
    }
    
    const selectedWeight = selectedWeightElement.value;
    const pricePerUnit = parseFloat(selectedWeightElement.getAttribute('data-price'));
    
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).textContent);

    const productToCheckout = {
        id: product.id,
        name: product.name,
        pricePerUnit: pricePerUnit * quantity,
        quantity: quantity,
        image: product.image,
        weight: selectedWeight
    };

    localStorage.setItem('checkoutCart', JSON.stringify([productToCheckout]));

    window.location.href = 'checkout.html';
}

function updatePrice(productId) {
    const selectedWeight = document.querySelector(`input[name='weight-${productId}']:checked`);
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).textContent);
    const priceDisplay = document.getElementById(`calculated-price-${productId}`);

    console.log("Selected weight:", selectedWeight);

    if (selectedWeight && priceDisplay) {
        const pricePerUnit = parseFloat(selectedWeight.getAttribute('data-price'));
        console.log("Price per unit:", pricePerUnit);
        const totalPrice = pricePerUnit * quantity;
        priceDisplay.textContent = totalPrice.toFixed(2);
    }
}

function updatePrice1(productId) {
    const selectedWeightElement = document.querySelector("input[name='weight']:checked");
    const quantityElement = document.getElementById(`quantity-${productId}`);
    
    if (selectedWeightElement && quantityElement) {
        const pricePerUnit = parseFloat(selectedWeightElement.getAttribute('data-price'));
        const quantity = parseInt(quantityElement.value);

        const totalPrice = pricePerUnit * quantity;

        document.querySelector(".product-details-info li:nth-child(1) span").innerText = `₹${totalPrice}`;
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');

    toast.classList.remove('success', 'error');
    
    if (type === 'success') {
        toast.classList.add('success');
    } else if (type === 'error') {
        toast.classList.add('error');
    }

    toastMessage.textContent = message; 
    toast.classList.add('show'); 

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function closeToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
}

function addToCart(productId, selectedWeight, quantity, pricePerUnit) {
    const product = products.find(p => p.id === productId);

    if (!selectedWeight) {
        showToast('Please select a weight option','error');
        return;
    }

    if (isNaN(quantity) || quantity < 1) {
        showToast('Please select a valid quantity.','error');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.weight === selectedWeight);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
        cart[existingProductIndex].pricePerUnit += quantity * pricePerUnit;
    } else {
        cart.push({ ...product, weight: selectedWeight, pricePerUnit: quantity * pricePerUnit, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
    closeNav(productId);

    showToast('Item added to cart!','success');
}


function renderProducts(products) {
    const container = document.querySelector('.featured__filter');
    container.innerHTML = products.map(generateProductHTML).join('');
    container.classList.add('fade-in');
}
function filterProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    const container = document.querySelector('.featured__filter');
    
    container.classList.add('fade-out');
    container.classList.remove('fade-in');

    setTimeout(() => {
        renderProducts(filteredProducts);

        container.classList.remove('fade-out');

        setTimeout(() => {
            container.classList.add('fade-in');
        }, 0); 
    }, 500); 
}

// function filterProductsByCategory(category) {
//     const filteredProducts = products.filter(product => product.category === category);
//     renderProducts(filteredProducts);
// }

function setActiveCategory(category) {
    filterProductsByCategory(category);
    document.querySelectorAll('.featured__controls a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-category') === category);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.querySelector('.fa-shopping-bag + span').textContent = cartCount;

    // const favoriteCount = localStorage.getItem('favoriteCount') || 0;
    // document.querySelector('.fa-heart + span').textContent = favoriteCount;

    updateCartCount();
    // updateFavoriteCount();
});

function openNav(id) {
    const screenWidth = window.innerWidth;

    let width;
    if (screenWidth <= 768) { 
        width = "100%";
    } else {
        width = "500px"; 
    }

    document.getElementById(`mySidenav-${id}`).style.width = width;
    document.getElementById(`overlay-${id}`).style.display = "block";

    currentIndex[id] = 0;
    showSlides(id);
}


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.fa-shopping-bag + span').textContent = totalCount;
    localStorage.setItem('cartCount', totalCount);
}



function closeNav(id) {
    const sidebar = document.getElementById(`mySidenav-${id}`);
    const radioButtons = sidebar.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false; 
    });

    const priceDisplay = document.getElementById(`calculated-price-${id}`);
    const quantityDisplay = document.getElementById(`quantity-${id}`);
    
    if (priceDisplay) {
        priceDisplay.textContent = "0"; 
    }
    
    if (quantityDisplay) {
        quantityDisplay.textContent = "1"; 
    }
    document.getElementById(`mySidenav-${id}`).style.width = "0";
    document.getElementById(`overlay-${id}`).style.display = "none";
}

function changeQuantity1(amount, productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        let quantity = parseInt(quantityElement.textContent);
        quantity = Math.max(1, quantity + amount);
        quantityElement.textContent = quantity;
        updatePrice(productId);
    }
}


function changeQuantity(amount, productId) {
    let quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        let oldValue = parseInt(quantityElement.value);
        let newValue = oldValue + amount;

        if (newValue < 1) {
            newValue = 1;
        }

        quantityElement.value = newValue;

        updatePrice1(productId);
    }
}


let currentIndex = {};

function moveSlide(id, n) {
    currentIndex[id] += n;
    showSlides(id);
}

function showSlides(id) {
    const slides = document.querySelectorAll(`#slider-${id} .slides img`);
    if (currentIndex[id] >= slides.length) {
        currentIndex[id] = 0;
    }
    if (currentIndex[id] < 0) {
        currentIndex[id] = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex[id] ? 'block' : 'none';
    });
}


function updateFavoriteUI() {    
    const favoriteLinks = document.querySelectorAll('.product__item__pic__hover li a');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    favoriteLinks.forEach(link => {
        const productId = parseInt(link.getAttribute('onclick').match(/(\d+)/)[0], 10);
        
        console.log(`Product ID: ${productId}, Is Favorite: ${favorites.includes(productId)}`);
        
        if (favorites.includes(productId)) {
            link.classList.add('favorite');
        } else {
            link.classList.remove('favorite');
        }
    });
}




function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const countElement = document.getElementById('favorite-count');
    if (countElement) {
        countElement.textContent = favorites.length;
    }
}


function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const productIndex = favorites.indexOf(productId);
    const isFavorite = productIndex !== -1;

    if (isFavorite) {
        favorites.splice(productIndex, 1);
        showToast('Removed from favorites', 'success'); 
    } else {
        favorites.push(productId);
        showToast('Added to favorites', 'success'); 
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    updateFavoriteCount();
    updateFavoriteUI(productId);
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favoritesList');
    const emptyFavoritesMessage = document.getElementById('emptyFavoritesMessage');

    if (favorites.length === 0) {
        favoritesList.innerHTML = '';  
        if (emptyFavoritesMessage) {
            emptyFavoritesMessage.style.display = 'block';  
        }
    } else {
        emptyFavoritesMessage.style.display = 'none'; 
    favoritesList.innerHTML = '';

    favorites.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product) {
            favoritesList.innerHTML += `
                <div class="Wish-list-main">
                    <div class="Wish-list-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="Wish-list-content">
                        <div class="Wish-list-content-header">${product.name}</div>
                        <div class="Wish-list-content-rate"><span>${product.price}</span></div>
                        <div class="Wish-list-content-viewpro" onclick="location.href='shop-details.html?id=${product.id}'">View Product</div>
                    </div>
                    <div class="Wish-list-close" onclick="removeFavorite(${id})">&times;</div>
                </div>
            `;
        }
    });
}
}
function removeFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    showToast(`WishList Removed Successfully`,'success');
    updateFavoriteCount();
    loadFavorites();
    updateFavoriteUI(productId);
}

function openNavwl() {
    document.getElementById("sideNavbarwl").style.width = window.innerWidth <= 768 ? "100%" : "450px";
    document.getElementById("overlaywl").style.display = "block";
    loadFavorites();
}

function closeNavwl() {
    document.getElementById("sideNavbarwl").style.width = "0";
    document.getElementById("overlaywl").style.display = "none";
}

window.onload = function () {
    updateFavoriteCount();
    updateFavoriteUI();
    document.getElementById("heartIcon").onclick = openNavwl;
    document.getElementById("closeNavwl").onclick = closeNavwl;
    document.getElementById("overlaywl").onclick = closeNavwl;
};



$(document).ready(function() {
    function createBootstrapCarousel(items) {
        const carouselContainer = document.getElementById('carousel-items-bootstrap');
        carouselContainer.innerHTML = ''; 

        items.forEach((item, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            const imgElement = document.createElement('img');
            imgElement.addEventListener('click', () => {
                window.location.href = `shop-grid.html?category=${item.category}`;
            });
            imgElement.className = 'd-block w-100 h-500';
            imgElement.src = item.src;
            imgElement.alt = item.alt;
            
            carouselItem.appendChild(imgElement);
            carouselContainer.appendChild(carouselItem);
        });
    }

    function createOwlCarousel(items) {
        const carouselContainer = document.getElementById('owl-carousel-items');
        carouselContainer.innerHTML = ''; 

        items.forEach(item => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'item';
            
            const imgElement = document.createElement('img');
            imgElement.className = 'sect1 mb-4';
            imgElement.src = item.src;
            imgElement.alt = item.alt;
            imgElement.dataset.category = item.category;
            imgElement.setAttribute('data-aos', 'zoom-in-down');

            imgElement.addEventListener('click', function() {
                window.location.href = `shop-grid.html?category=${item.category}`;
            });
            carouselItem.appendChild(imgElement);
            carouselContainer.appendChild(carouselItem);
        });

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
            navText: [
                '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
                '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                540: {
                    items: 2
                },
                767: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    createBootstrapCarousel(Bannerimages);
    createOwlCarousel(categoryItems);
});

var content = '';

$(document).ready(function () {
    $('a[data-toggle="modal"]').click(function () {
        var title = $(this).data('title');
        content = $(this).data('content');

        $('#exampleModalCenter .modal-title').text(title);
        $('#exampleModalCenter .modal-body').html(content);
    });
});

$('#exampleModalCenter .modal-body').html(content); 


