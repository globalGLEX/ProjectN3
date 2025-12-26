export const data = { 
    
    restaurants: [{
        name: "Fastburger",
        category: ['burger', 'american'],
        logoUrl: "/src/assets/fastburgerlogo.png",
        imageUrl: "/src/assets/fastburger.jpg",
        imageUrlAlt: "Fastburger counter with burgers",
        categories: ['Burgers','Ice Cream','Fries', 'Drinks', 'Salads'],
        products :[{
             
                name: "Cheeseburger",
                desc: "Classic burger with ketchup, mayo, pickles and onion slices",
                price: 6,
                options: ['No pickles','No mayo','No ketchup','No onion', 'No cheese'],
                imageUrl: "/src/assets/categories-burger.jpg",
                alt: "A cheeseburger on wooden table"
            },
             {
                name: "Fries",
                desc: "Medium size crispy fries",
                price: 3,
                options: ['With ketchup'],
                imageUrl: "/src/assets/fries.jpg",
                alt: "A cheeseburger on wooden table"
            },
            {
                name: "Coca Cola 0.33l",
                desc: "Regular Coke with optional ice",
                price: 1.5,
                options: ['With ice'],
                imageUrl: "/src/assets/coke.jpg",
                alt: "A cheeseburger on wooden table"
            },
            {
                name: "Fanta 0.33l",
                desc: "Regular Fanta with optional ice",
                price: 1.5,
                options: ['With ice'],
                imageUrl: "/src/assets/fanta.jpg",
                alt: "A cheeseburger on wooden table"
            },
            {
                name: "Caesar salad",
                desc: "Salad with chicken, cheese, bread cubes, lettuce",
                price: 3.5,
                options: ['Without chicken', 'Without cheese', 'Without bread cubes'],
                imageUrl: "/src/assets/caesar.jpg",
                alt: "A cheeseburger on wooden table"
            },{
                name: "Chocolate ice cream",
                desc: "Creamy chocolate taste, 150g portion size",
                price: 3.5,
                options: [],
                imageUrl: "/src/assets/katsucurryrice.jpg",
                alt: "A cheeseburger on wooden table"
            }
        ]
    },{
        name: "Shohei Restaurant",
        category: "japanese",
        logoUrl: "/src/assets/shoheilogo.png",
        imageUrl: "/src/assets/shohei.jpg",
        imageUrlAlt: "Japanese restaurant",
        categories: ['Burgers','Fries', 'Drinks', 'Salads'],
        products: [{
             
            name: "Pork Ramen",
            desc: "Noodles, pork, boiled egg, onion, shrimp and nori sheet  ",
            price: 6,
            options: ['No shrimp', 'No nori sheet', 'No egg'],
            imageUrl: "/src/assets/porkramen.jpg",
            alt: "A bowl of pork ramen"
        },{
             
            name: "Katsu curry rice",
            desc: "Crispy, deep-fried cutlet (katsu) served alongside Japanese-style curry and steamed rice.",
            price: 6.5,
            options: [''],
            imageUrl: "/src/assets/katsucurryrice.jpg",
            alt: "Katsu curry rice bowl"
        },{
             
            name: "Sushi selection",
            desc: "Tuna, steamed carrot and tofu sushi, 6 pieces",
            price: 7,
            options: [''],
            imageUrl: "/src/assets/sushiselection.jpg",
            alt: "6 sushi rolls on a wooden plate"
        },{
             
            name: "Tuna nigiri",
            desc: "Tuna and rice with chilli topping",
            price: 1.5,
            options: ['No chilli topping'],
            imageUrl: "/src/assets/tunanigiri.jpg",
            alt: "Tuna nigiri held up with chopsticks"
        },{
             
            name: "Tempura bento box",
            desc: "Crispy, deep-fried shrimp with cabbage, lemon, with rice, and tentsuyu sauce",
            price: 6,
            options: [''],
            imageUrl: "/src/assets/tempurabento.jpg",
            alt: "Tempura bento box with fried shrimp and cabbage"
        }
    
    ]
    },{
        name: "John's Cafe",
        category: "cafe",
        logoUrl: "/src/assets/johnscafelogo.png",
        imageUrl: "/src/assets/johnscafe.jpg",
        imageUrlAlt: "Cafe counter with cakes",
        categories: ['Coffee','Cocoa', 'Milkshakes', 'Sandwiches'],
        products: [{
             
            name: "Cappuchino",
            desc: "With sugar and cream. Delivered in a paper cup",
            price: 3.5,
            options: [],
            imageUrl: "/src/assets/cappuchino.jpg",
            alt: "A cup of cappuchino on a plate"
        },{
             
            name: "Espresso",
            desc: "2 shots with optional sugar. Delivered in a paper cup",
            price: 3,
            options: ['With sugar'],
            imageUrl: "/src/assets/espresso.jpg",
            alt: "A cup of espresso on a plate"
        },{
             
            name: "Cupcake with creamy icing",
            desc: "",
            price: 3,
            options: [],
            imageUrl: "/src/assets/cupcakecreamyicing.jpg",
            alt: "A cupcake with white icing"
        },{
             
            name: "Cheesecake",
            desc: "With strawberry and orange jello",
            price: 3.5,
            options: [],
            imageUrl: "/src/assets/cheesecake.jpg",
            alt: "A slice of cheesecake with strawberry"
        },{
             
            name: "Biscuit cheesecake",
            desc: "With chocolate icing and biscuit pieces",
            price: 4,
            options: [],
            imageUrl: "/src/assets/biscuitcheesecake.jpg",
            alt: "A slice of biscuit cheesecake"
        },{
             
            name: "Chocolate ice cream",
            desc: "One 50g ball",
            price: 2.5,
            options: [],
            imageUrl: "/src/assets/icecream.jpg",
            alt: "A ball of chocolete ice cream in a paper cup"
        }
    
    ]
    }]
        
}; 
