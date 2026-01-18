// База данных маршрутов
const routesDatabase = [
    {
        id: 1,
        city: "Moscow",
        style: "Historical",
        activity: "Walking tour",
        time: "3-4 hours",
        budget: "Free",
        title: "Historical Center of Moscow",
        description: "A walk through the capital's most iconic historical sites. See the Kremlin, Red Square, and other architectural landmarks.",
        duration: "3 hours",
        distance: "5.2 km",
        points: [
            { name: "Red Square", time: "45 min", description: "The main square of the country" },
            { name: "St. Basil's Cathedral", time: "30 min", description: "Symbol of Moscow" },
            { name: "GUM Department Store", time: "1 hour", description: "Historical shopping complex" },
            { name: "Manezhnaya Square", time: "30 min", description: "Pedestrian zone with fountains" },
            { name: "Alexander Garden", time: "45 min", description: "Park near the Kremlin walls" }
        ]
    },
    {
        id: 2,
        city: "Moscow",
        style: "Modern",
        activity: "Photo walk",
        time: "2-3 hours",
        budget: "Low budget (up to $15)",
        title: "Moscow City & Modern Architecture",
        description: "Route for lovers of modern architecture and skyscrapers. Perfect for photoshoots.",
        duration: "2.5 hours",
        distance: "4 km",
        points: [
            { name: "Moscow City Business Center", time: "1 hour", description: "Business district with skyscrapers" },
            { name: "Victory Park", time: "40 min", description: "Memorial complex" },
            { name: "Bagration Bridge", time: "30 min", description: "Pedestrian bridge with panoramic views" },
            { name: "Presnenskaya Embankment", time: "20 min", description: "View of the Moscow River" }
        ]
    },
    {
        id: 3,
        city: "Moscow",
        style: "Romantic",
        activity: "Walking tour",
        time: "3-4 hours",
        budget: "Medium budget ($15-$40)",
        title: "Romantic Moscow Evening",
        description: "A romantic walk through Moscow's most beautiful evening spots with cozy cafes and illuminated landmarks.",
        duration: "3.5 hours",
        distance: "5.5 km",
        points: [
            { name: "Patriarch's Pond", time: "45 min", description: "Charming pond with literary history" },
            { name: "Arbat Street", time: "1 hour", description: "Historic pedestrian street" },
            { name: "Christ the Savior Cathedral", time: "40 min", description: "Illuminated cathedral at night" },
            { name: "Sofiyskaya Embankment", time: "30 min", description: "Romantic riverside walk" },
            { name: "Gorky Park", time: "35 min", description: "Evening lights and fountains" }
        ]
    },
    {
        id: 4,
        city: "Moscow",
        style: "Natural",
        activity: "Walking tour",
        time: "All day",
        budget: "Free",
        title: "Moscow's Green Parks Tour",
        description: "Explore Moscow's beautiful parks and green spaces, perfect for nature lovers.",
        duration: "6-7 hours",
        distance: "12 km",
        points: [
            { name: "Gorky Park", time: "2 hours", description: "Central recreational park" },
            { name: "Neskuchny Garden", time: "1.5 hours", description: "Oldest park in Moscow" },
            { name: "Vorobyovy Gory", time: "1 hour", description: "Sparrow Hills viewpoint" },
            { name: "Losiny Ostrov National Park", time: "2.5 hours", description: "Urban national park" }
        ]
    },
    {
        id: 5,
        city: "Saint Petersburg",
        style: "Historical",
        activity: "Walking tour",
        time: "5-6 hours",
        budget: "Medium budget ($15-$40)",
        title: "Classical Saint Petersburg",
        description: "Route through the historical center of the Northern Capital. Palaces, canals, and bridges.",
        duration: "5 hours",
        distance: "8 km",
        points: [
            { name: "Palace Square", time: "1 hour", description: "Main square of the city" },
            { name: "The Hermitage Museum", time: "2 hours", description: "One of the largest museums in the world" },
            { name: "Nevsky Prospect", time: "1 hour", description: "Main street of the city" },
            { name: "Kazan Cathedral", time: "30 min", description: "Orthodox cathedral" },
            { name: "Summer Garden", time: "1 hour", description: "Oldest park in Saint Petersburg" }
        ]
    },
    {
        id: 6,
        city: "Saint Petersburg",
        style: "Romantic",
        activity: "Photo walk",
        time: "3-4 hours",
        budget: "Low budget (up to $15)",
        title: "Venice of the North - Canals & Bridges",
        description: "Photogenic route along the canals and drawbridges of Saint Petersburg.",
        duration: "3.5 hours",
        distance: "6 km",
        points: [
            { name: "Fontanka River Embankment", time: "1 hour", description: "Beautiful canals and architecture" },
            { name: "Anichkov Bridge", time: "30 min", description: "Bridge with famous horse statues" },
            { name: "Moyka River", time: "45 min", description: "Scenic river walk" },
            { name: "St. Isaac's Cathedral", time: "40 min", description: "Golden dome viewpoint" },
            { name: "New Holland Island", time: "35 min", description: "Trendy revitalized area" }
        ]
    },
    {
        id: 7,
        city: "Saint Petersburg",
        style: "Modern",
        activity: "Food tour",
        time: "4-5 hours",
        budget: "High budget ($40+)",
        title: "Gourmet Saint Petersburg",
        description: "Culinary journey through Saint Petersburg's best restaurants and food markets.",
        duration: "4 hours",
        distance: "5 km",
        points: [
            { name: "Kuznechny Market", time: "1 hour", description: "Traditional food market" },
            { name: "Bolshaya Morskaya Street", time: "1.5 hours", description: "Upscale restaurants and cafes" },
            { name: "Sennoy Market", time: "45 min", description: "Local food and produce" },
            { name: "Rubinstein Street", time: "45 min", description: "Restaurant street with diverse cuisine" }
        ]
    },
    {
        id: 8,
        city: "Kazan",
        style: "Historical",
        activity: "Walking tour",
        time: "3-4 hours",
        budget: "Free",
        title: "East Meets West - Kazan Heritage",
        description: "Explore the unique blend of Tatar and Russian cultures in Kazan's historical center.",
        duration: "3.5 hours",
        distance: "6 km",
        points: [
            { name: "Kazan Kremlin", time: "1.5 hours", description: "UNESCO World Heritage Site" },
            { name: "Kul Sharif Mosque", time: "45 min", description: "Main mosque of Tatarstan" },
            { name: "Bauman Street", time: "1 hour", description: "Main pedestrian street" },
            { name: "Peter and Paul Cathedral", time: "30 min", description: "Baroque architecture monument" }
        ]
    },
    {
        id: 9,
        city: "Kazan",
        style: "Modern",
        activity: "Shopping",
        time: "4-5 hours",
        budget: "High budget ($40+)",
        title: "Kazan Shopping Experience",
        description: "Shopping route through Kazan's modern malls and traditional markets.",
        duration: "4 hours",
        distance: "3.5 km",
        points: [
            { name: "Koltso Shopping Mall", time: "1.5 hours", description: "Large shopping center" },
            { name: "Central Market", time: "1 hour", description: "Traditional Tatar products" },
            { name: "Pyramid Entertainment Complex", time: "1 hour", description: "Shopping and entertainment" },
            { name: "Tatarskaya Sloboda", time: "30 min", description: "Traditional Tatar crafts and souvenirs" }
        ]
    },
    {
        id: 10,
        city: "Yekaterinburg",
        style: "Historical",
        activity: "Walking tour",
        time: "3-4 hours",
        budget: "Low budget (up to $15)",
        title: "Ural Industrial Heritage",
        description: "Discover Yekaterinburg's industrial history and architectural landmarks.",
        duration: "3 hours",
        distance: "4.5 km",
        points: [
            { name: "Dam on Iset River", time: "45 min", description: "Historical city foundation site" },
            { name: "Church on the Blood", time: "45 min", description: "Memorial church at Romanov execution site" },
            { name: "Literary Quarter", time: "1 hour", description: "Museum of Ural writers" },
            { name: "Rastorguev-Kharitonov Estate", time: "30 min", description: "Architectural monument" }
        ]
    },
    {
        id: 11,
        city: "Yekaterinburg",
        style: "Modern",
        activity: "Photo walk",
        time: "2-3 hours",
        budget: "Free",
        title: "Yekaterinburg Street Art & Modernity",
        description: "Urban exploration of street art, modern architecture, and creative spaces.",
        duration: "2.5 hours",
        distance: "3.5 km",
        points: [
            { name: "Vaynera Street", time: "45 min", description: "Pedestrian street with installations" },
            { name: "Yeltsin Center", time: "1 hour", description: "Modern cultural center" },
            { name: "Industrial Loft District", time: "45 min", description: "Street art and galleries" }
        ]
    },
    {
        id: 12,
        city: "Sochi",
        style: "Natural",
        activity: "Walking tour",
        time: "All day",
        budget: "Medium budget ($15-$40)",
        title: "Sochi Coastal & Mountain Adventure",
        description: "Combination of coastal promenades and mountain viewpoints in Russia's premier resort city.",
        duration: "7-8 hours",
        distance: "15 km",
        points: [
            { name: "Sochi Arboretum", time: "2 hours", description: "Park with unique plants" },
            { name: "Sea Port", time: "1 hour", description: "Walk along the embankment" },
            { name: "Riviera Park", time: "2 hours", description: "Entertainment park" },
            { name: "Mount Akhun", time: "3 hours", description: "Mountain with observation tower" }
        ]
    },
    {
        id: 13,
        city: "Sochi",
        style: "Romantic",
        activity: "Walking tour",
        time: "2-3 hours",
        budget: "Low budget (up to $15)",
        title: "Sochi Evening Romance",
        description: "Romantic evening walk along the Black Sea coast with sunset views.",
        duration: "2.5 hours",
        distance: "4 km",
        points: [
            { name: "Sochi Embankment", time: "1 hour", description: "Seaside promenade at sunset" },
            { name: "Winter Theater", time: "30 min", description: "Illuminated neoclassical building" },
            { name: "Marine Station", time: "40 min", description: "Historic port building" },
            { name: "Primorskaya Alley", time: "20 min", description: "Palm tree-lined walkway" }
        ]
    },
    {
        id: 14,
        city: "Moscow",
        style: "Historical",
        activity: "Food tour",
        time: "4-5 hours",
        budget: "High budget ($40+)",
        title: "Moscow Traditional Cuisine Tour",
        description: "Taste traditional Russian dishes in historic Moscow restaurants and cafes.",
        duration: "4 hours",
        distance: "3 km",
        points: [
            { name: "Old Arbat Restaurants", time: "1.5 hours", description: "Traditional Russian cuisine" },
            { name: "GUM Gastronomic Hall", time: "1 hour", description: "Food court with local specialties" },
            { name: "Danilovsky Market", time: "1.5 hours", description: "Food market with local produce" }
        ]
    },
    {
        id: 15,
        city: "Saint Petersburg",
        style: "Natural",
        activity: "Walking tour",
        time: "All day",
        budget: "Free",
        title: "Saint Petersburg Parks & Islands",
        description: "Explore the green islands and parks of Saint Petersburg's northern landscape.",
        duration: "6 hours",
        distance: "10 km",
        points: [
            { name: "Krestovsky Island", time: "2 hours", description: "Park and recreational area" },
            { name: "Yelagin Island", time: "1.5 hours", description: "Park with palace" },
            { name: "Tauride Garden", time: "1.5 hours", description: "Historic landscape garden" },
            { name: "Mikhailovsky Garden", time: "1 hour", description: "Formal garden near the Russian Museum" }
        ]
    },
    {
        id: 16,
        city: "Kazan",
        style: "Romantic",
        activity: "Photo walk",
        time: "2-3 hours",
        budget: "Free",
        title: "Kazan Night Illuminations",
        description: "Evening photo walk capturing Kazan's beautifully illuminated landmarks.",
        duration: "2.5 hours",
        distance: "4 km",
        points: [
            { name: "Kremlin Embankment", time: "1 hour", description: "Evening views of illuminated Kremlin" },
            { name: "Millennium Bridge", time: "40 min", description: "Modern bridge with light show" },
            { name: "Palace of Farmers", time: "30 min", description: "Illuminated architectural masterpiece" },
            { name: "Kaban Lakes", time: "20 min", description: "Lakeside evening walk" }
        ]
    },
    {
        id: 17,
        city: "Yekaterinburg",
        style: "Natural",
        activity: "Walking tour",
        time: "5-6 hours",
        budget: "Low budget (up to $15)",
        title: "Ural Nature in the City",
        description: "Discover how Yekaterinburg incorporates Ural nature into its urban landscape.",
        duration: "5 hours",
        distance: "8 km",
        points: [
            { name: "Shartash Forest Park", time: "2 hours", description: "Large urban forest park" },
            { name: "Lake Shartash", time: "1.5 hours", description: "Natural lake within city limits" },
            { name: "Ural Mineralogical Museum", time: "1 hour", description: "Ural gemstones and minerals" },
            { name: "City Pond Park", time: "30 min", description: "Recreational area by the pond" }
        ]
    },
    {
        id: 18,
        city: "Sochi",
        style: "Historical",
        activity: "Walking tour",
        time: "3-4 hours",
        budget: "Medium budget ($15-$40)",
        title: "Sochi Soviet Heritage",
        description: "Explore architectural monuments from Sochi's Soviet period and famous resorts.",
        duration: "3.5 hours",
        distance: "5 km",
        points: [
            { name: "Stalin's Dacha", time: "1 hour", description: "Historical Soviet-era residence" },
            { name: "Sochi Art Museum", time: "1 hour", description: "Art collection in historical building" },
            { name: "Matsesta District", time: "1.5 hours", description: "Historic spa and resort area" }
        ]
    },
    {
        id: 19,
        city: "Moscow",
        style: "Modern",
        activity: "Shopping",
        time: "4-5 hours",
        budget: "High budget ($40+)",
        title: "Moscow Luxury Shopping",
        description: "High-end shopping experience in Moscow's most exclusive districts.",
        duration: "4 hours",
        distance: "3 km",
        points: [
            { name: "Tverskaya Street", time: "1.5 hours", description: "Luxury boutiques and department stores" },
            { name: "TsUM Department Store", time: "1 hour", description: "Historic luxury department store" },
            { name: "Stoleshnikov Lane", time: "1 hour", description: "Boutique shopping street" },
            { name: "Petrovka Street", time: "30 min", description: "Fashion district" }
        ]
    },
    {
        id: 20,
        city: "Saint Petersburg",
        style: "Historical",
        activity: "Photo walk",
        time: "3-4 hours",
        budget: "Low budget (up to $15)",
        title: "Architectural Details of Saint Petersburg",
        description: "Focus on architectural elements, details, and hidden gems of imperial Saint Petersburg.",
        duration: "3 hours",
        distance: "4 km",
        points: [
            { name: "Dostoevsky District", time: "1 hour", description: "Atmospheric courtyards and staircases" },
            { name: "Italian Street", time: "45 min", description: "Architectural details and facades" },
            { name: "Singing Bridges", time: "45 min", description: "Decorative bridge elements" },
            { name: "Mikhailovsky Castle", time: "30 min", description: "Unique architectural complex" }
        ]
    }
];










function findRoute(params) {
    const { city, style, activity, time, budget } = params;
    
    // Сначала точное совпадение
    let matchedRoute = routesDatabase.find(route => 
        route.city === city && 
        route.style === style && 
        route.activity === activity && 
        route.time === time &&
        route.budget === budget
    );
    
    // Если нет точного, тогда по городу, стилю и бюджету
    if (!matchedRoute) {
        matchedRoute = routesDatabase.find(route => 
            route.city === city && 
            route.style === style &&
            route.budget === budget
        );
    }


    if (!matchedRoute) {
        matchedRoute = routesDatabase.find(route => 
            route.city === city && 
            route.activity === activity &&
            route.budget === budget
        );
    }


    if (!matchedRoute) {
        matchedRoute = routesDatabase.find(route => 
            route.city === city && 
            route.style === style
        );
    }

    
    if (!matchedRoute) {
        matchedRoute = routesDatabase.find(route => 
            route.city === city && 
            route.activity === activity
        );
    }

    if (!matchedRoute) {
        matchedRoute = routesDatabase.find(route => 
            route.city === city && 
            route.budget === budget
        );
    }



    
    // Если все еще нет, просто по городу
    if (!matchedRoute) {
        matchedRoute = routesDatabase.find(route => route.city === city);
    }
    
    // Если нет маршрута для этого города, то случайный
    if (!matchedRoute) {
        matchedRoute = routesDatabase[Math.floor(Math.random() * routesDatabase.length)];
    }
    
    return matchedRoute;
}
