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
            { name: "Red Square", time: "45 min", description: "The main square of the country", coordinates: [55.7539, 37.6208] },
            { name: "St. Basil's Cathedral", time: "30 min", description: "Symbol of Moscow", coordinates: [55.7525, 37.6230] },
            { name: "GUM Department Store", time: "1 hour", description: "Historical shopping complex", coordinates: [55.7547, 37.6217] },
            { name: "Manezhnaya Square", time: "30 min", description: "Pedestrian zone with fountains", coordinates: [55.7560, 37.6156] },
            { name: "Alexander Garden", time: "45 min", description: "Park near the Kremlin walls", coordinates: [55.7519, 37.6136] }
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
            { name: "Moscow City Business Center", time: "1 hour", description: "Business district with skyscrapers", coordinates: [55.7498, 37.5398] },
            { name: "Victory Park", time: "40 min", description: "Memorial complex", coordinates: [55.7362, 37.5083] },
            { name: "Bagration Bridge", time: "30 min", description: "Pedestrian bridge with panoramic views", coordinates: [55.7500, 37.5425] },
            { name: "Presnenskaya Embankment", time: "20 min", description: "View of the Moscow River", coordinates: [55.7510, 37.5400] }
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
            { name: "Patriarch's Pond", time: "45 min", description: "Charming pond with literary history", coordinates: [55.7625, 37.5944] },
            { name: "Arbat Street", time: "1 hour", description: "Historic pedestrian street", coordinates: [55.7497, 37.5908] },
            { name: "Christ the Savior Cathedral", time: "40 min", description: "Illuminated cathedral at night", coordinates: [55.7445, 37.6054] },
            { name: "Sofiyskaya Embankment", time: "30 min", description: "Romantic riverside walk", coordinates: [55.7440, 37.6180] },
            { name: "Gorky Park", time: "35 min", description: "Evening lights and fountains", coordinates: [55.7292, 37.6044] }
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
            { name: "Gorky Park", time: "2 hours", description: "Central recreational park", coordinates: [55.7292, 37.6044] },
            { name: "Neskuchny Garden", time: "1.5 hours", description: "Oldest park in Moscow", coordinates: [55.7333, 37.6000] },
            { name: "Vorobyovy Gory", time: "1 hour", description: "Sparrow Hills viewpoint", coordinates: [55.7100, 37.5600] },
            { name: "Losiny Ostrov National Park", time: "2.5 hours", description: "Urban national park", coordinates: [55.8500, 37.8000] }
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
            { name: "Palace Square", time: "1 hour", description: "Main square of the city", coordinates: [59.9390, 30.3158] },
            { name: "The Hermitage Museum", time: "2 hours", description: "One of the largest museums in the world", coordinates: [59.9398, 30.3146] },
            { name: "Nevsky Prospect", time: "1 hour", description: "Main street of the city", coordinates: [59.9358, 30.3259] },
            { name: "Kazan Cathedral", time: "30 min", description: "Orthodox cathedral", coordinates: [59.9344, 30.3247] },
            { name: "Summer Garden", time: "1 hour", description: "Oldest park in Saint Petersburg", coordinates: [59.9431, 30.3358] }
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
            { name: "Fontanka River Embankment", time: "1 hour", description: "Beautiful canals and architecture", coordinates: [59.9333, 30.3417] },
            { name: "Anichkov Bridge", time: "30 min", description: "Bridge with famous horse statues", coordinates: [59.9350, 30.3417] },
            { name: "Moyka River", time: "45 min", description: "Scenic river walk", coordinates: [59.9367, 30.3200] },
            { name: "St. Isaac's Cathedral", time: "40 min", description: "Golden dome viewpoint", coordinates: [59.9342, 30.3061] },
            { name: "New Holland Island", time: "35 min", description: "Trendy revitalized area", coordinates: [59.9289, 30.2867] }
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
            { name: "Kuznechny Market", time: "1 hour", description: "Traditional food market", coordinates: [59.9278, 30.3500] },
            { name: "Bolshaya Morskaya Street", time: "1.5 hours", description: "Upscale restaurants and cafes", coordinates: [59.9361, 30.3167] },
            { name: "Sennoy Market", time: "45 min", description: "Local food and produce", coordinates: [59.9250, 30.3194] },
            { name: "Rubinstein Street", time: "45 min", description: "Restaurant street with diverse cuisine", coordinates: [59.9306, 30.3472] }
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
            { name: "Kazan Kremlin", time: "1.5 hours", description: "UNESCO World Heritage Site", coordinates: [55.7964, 49.1064] },
            { name: "Kul Sharif Mosque", time: "45 min", description: "Main mosque of Tatarstan", coordinates: [55.7981, 49.1053] },
            { name: "Bauman Street", time: "1 hour", description: "Main pedestrian street", coordinates: [55.7900, 49.1147] },
            { name: "Peter and Paul Cathedral", time: "30 min", description: "Baroque architecture monument", coordinates: [55.7953, 49.1131] }
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
            { name: "Koltso Shopping Mall", time: "1.5 hours", description: "Large shopping center", coordinates: [55.7786, 49.1228] },
            { name: "Central Market", time: "1 hour", description: "Traditional Tatar products", coordinates: [55.7875, 49.1222] },
            { name: "Pyramid Entertainment Complex", time: "1 hour", description: "Shopping and entertainment", coordinates: [55.7914, 49.1086] },
            { name: "Tatarskaya Sloboda", time: "30 min", description: "Traditional Tatar crafts and souvenirs", coordinates: [55.7778, 49.1178] }
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
            { name: "Dam on Iset River", time: "45 min", description: "Historical city foundation site", coordinates: [56.8386, 60.6056] },
            { name: "Church on the Blood", time: "45 min", description: "Memorial church at Romanov execution site", coordinates: [56.8444, 60.6064] },
            { name: "Literary Quarter", time: "1 hour", description: "Museum of Ural writers", coordinates: [56.8400, 60.6139] },
            { name: "Rastorguev-Kharitonov Estate", time: "30 min", description: "Architectural monument", coordinates: [56.8350, 60.6208] }
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
            { name: "Vaynera Street", time: "45 min", description: "Pedestrian street with installations", coordinates: [56.8389, 60.6108] },
            { name: "Yeltsin Center", time: "1 hour", description: "Modern cultural center", coordinates: [56.8378, 60.6072] },
            { name: "Industrial Loft District", time: "45 min", description: "Street art and galleries", coordinates: [56.8333, 60.6250] }
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
            { name: "Sochi Arboretum", time: "2 hours", description: "Park with unique plants", coordinates: [43.5744, 39.7425] },
            { name: "Sea Port", time: "1 hour", description: "Walk along the embankment", coordinates: [43.5800, 39.7194] },
            { name: "Riviera Park", time: "2 hours", description: "Entertainment park", coordinates: [43.5869, 39.7197] },
            { name: "Mount Akhun", time: "3 hours", description: "Mountain with observation tower", coordinates: [43.5500, 39.8500] }
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
            { name: "Sochi Embankment", time: "1 hour", description: "Seaside promenade at sunset", coordinates: [43.5800, 39.7200] },
            { name: "Winter Theater", time: "30 min", description: "Illuminated neoclassical building", coordinates: [43.5856, 39.7236] },
            { name: "Marine Station", time: "40 min", description: "Historic port building", coordinates: [43.5792, 39.7178] },
            { name: "Primorskaya Alley", time: "20 min", description: "Palm tree-lined walkway", coordinates: [43.5833, 39.7264] }
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
            { name: "Old Arbat Restaurants", time: "1.5 hours", description: "Traditional Russian cuisine", coordinates: [55.7497, 37.5908] },
            { name: "GUM Gastronomic Hall", time: "1 hour", description: "Food court with local specialties", coordinates: [55.7547, 37.6217] },
            { name: "Danilovsky Market", time: "1.5 hours", description: "Food market with local produce", coordinates: [55.7061, 37.6242] }
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
            { name: "Krestovsky Island", time: "2 hours", description: "Park and recreational area", coordinates: [59.9711, 30.2339] },
            { name: "Yelagin Island", time: "1.5 hours", description: "Park with palace", coordinates: [59.9772, 30.2589] },
            { name: "Tauride Garden", time: "1.5 hours", description: "Historic landscape garden", coordinates: [59.9458, 30.3769] },
            { name: "Mikhailovsky Garden", time: "1 hour", description: "Formal garden near the Russian Museum", coordinates: [59.9392, 30.3347] }
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
            { name: "Kremlin Embankment", time: "1 hour", description: "Evening views of illuminated Kremlin", coordinates: [55.7964, 49.1097] },
            { name: "Millennium Bridge", time: "40 min", description: "Modern bridge with light show", coordinates: [55.7986, 49.0958] },
            { name: "Palace of Farmers", time: "30 min", description: "Illuminated architectural masterpiece", coordinates: [55.7989, 49.1100] },
            { name: "Kaban Lakes", time: "20 min", description: "Lakeside evening walk", coordinates: [55.7750, 49.1333] }
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
            { name: "Shartash Forest Park", time: "2 hours", description: "Large urban forest park", coordinates: [56.8667, 60.6500] },
            { name: "Lake Shartash", time: "1.5 hours", description: "Natural lake within city limits", coordinates: [56.8833, 60.6667] },
            { name: "Ural Mineralogical Museum", time: "1 hour", description: "Ural gemstones and minerals", coordinates: [56.8378, 60.6064] },
            { name: "City Pond Park", time: "30 min", description: "Recreational area by the pond", coordinates: [56.8386, 60.6056] }
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
            { name: "Stalin's Dacha", time: "1 hour", description: "Historical Soviet-era residence", coordinates: [43.5833, 39.7500] },
            { name: "Sochi Art Museum", time: "1 hour", description: "Art collection in historical building", coordinates: [43.5833, 39.7333] },
            { name: "Matsesta District", time: "1.5 hours", description: "Historic spa and resort area", coordinates: [43.5667, 39.8000] }
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
            { name: "Tverskaya Street", time: "1.5 hours", description: "Luxury boutiques and department stores", coordinates: [55.7625, 37.6083] },
            { name: "TsUM Department Store", time: "1 hour", description: "Historic luxury department store", coordinates: [55.7600, 37.6222] },
            { name: "Stoleshnikov Lane", time: "1 hour", description: "Boutique shopping street", coordinates: [55.7606, 37.6144] },
            { name: "Petrovka Street", time: "30 min", description: "Fashion district", coordinates: [55.7639, 37.6167] }
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
            { name: "Dostoevsky District", time: "1 hour", description: "Atmospheric courtyards and staircases", coordinates: [59.9250, 30.3458] },
            { name: "Italian Street", time: "45 min", description: "Architectural details and facades", coordinates: [59.9367, 30.3350] },
            { name: "Singing Bridges", time: "45 min", description: "Decorative bridge elements", coordinates: [59.9333, 30.3417] },
            { name: "Mikhailovsky Castle", time: "30 min", description: "Unique architectural complex", coordinates: [59.9406, 30.3378] }
        ]
    }
];


const attractionCoordinates = {
    "Moscow": {
        "Red Square": [55.7539, 37.6208],
        "St. Basil's Cathedral": [55.7525, 37.6230],
        "GUM Department Store": [55.7547, 37.6217],
        "Manezhnaya Square": [55.7560, 37.6156],
        "Alexander Garden": [55.7519, 37.6136],
        "Moscow City Business Center": [55.7498, 37.5398],
        "Victory Park": [55.7362, 37.5083],
        "Bagration Bridge": [55.7500, 37.5425],
        "Presnenskaya Embankment": [55.7510, 37.5400],
        "Patriarch's Pond": [55.7625, 37.5944],
        "Arbat Street": [55.7497, 37.5908],
        "Christ the Savior Cathedral": [55.7445, 37.6054],
        "Sofiyskaya Embankment": [55.7440, 37.6180],
        "Gorky Park": [55.7292, 37.6044],
        "Neskuchny Garden": [55.7333, 37.6000],
        "Vorobyovy Gory": [55.7100, 37.5600],
        "Losiny Ostrov National Park": [55.8500, 37.8000],
        "Old Arbat Restaurants": [55.7497, 37.5908],
        "Danilovsky Market": [55.7061, 37.6242],
        "Tverskaya Street": [55.7625, 37.6083],
        "TsUM Department Store": [55.7600, 37.6222],
        "Stoleshnikov Lane": [55.7606, 37.6144],
        "Petrovka Street": [55.7639, 37.6167]
    },
    "Saint Petersburg": {
        "Palace Square": [59.9390, 30.3158],
        "The Hermitage Museum": [59.9398, 30.3146],
        "Nevsky Prospect": [59.9358, 30.3259],
        "Kazan Cathedral": [59.9344, 30.3247],
        "Summer Garden": [59.9431, 30.3358],
        "Fontanka River Embankment": [59.9333, 30.3417],
        "Anichkov Bridge": [59.9350, 30.3417],
        "Moyka River": [59.9367, 30.3200],
        "St. Isaac's Cathedral": [59.9342, 30.3061],
        "New Holland Island": [59.9289, 30.2867],
        "Kuznechny Market": [59.9278, 30.3500],
        "Bolshaya Morskaya Street": [59.9361, 30.3167],
        "Sennoy Market": [59.9250, 30.3194],
        "Rubinstein Street": [59.9306, 30.3472],
        "Krestovsky Island": [59.9711, 30.2339],
        "Yelagin Island": [59.9772, 30.2589],
        "Tauride Garden": [59.9458, 30.3769],
        "Mikhailovsky Garden": [59.9392, 30.3347],
        "Dostoevsky District": [59.9250, 30.3458],
        "Italian Street": [59.9367, 30.3350],
        "Singing Bridges": [59.9333, 30.3417],
        "Mikhailovsky Castle": [59.9406, 30.3378]
    },
    "Kazan": {
        "Kazan Kremlin": [55.7964, 49.1064],
        "Kul Sharif Mosque": [55.7981, 49.1053],
        "Bauman Street": [55.7900, 49.1147],
        "Peter and Paul Cathedral": [55.7953, 49.1131],
        "Koltso Shopping Mall": [55.7786, 49.1228],
        "Central Market": [55.7875, 49.1222],
        "Pyramid Entertainment Complex": [55.7914, 49.1086],
        "Tatarskaya Sloboda": [55.7778, 49.1178],
        "Kremlin Embankment": [55.7964, 49.1097],
        "Millennium Bridge": [55.7986, 49.0958],
        "Palace of Farmers": [55.7989, 49.1100],
        "Kaban Lakes": [55.7750, 49.1333]
    },
    "Yekaterinburg": {
        "Dam on Iset River": [56.8386, 60.6056],
        "Church on the Blood": [56.8444, 60.6064],
        "Literary Quarter": [56.8400, 60.6139],
        "Rastorguev-Kharitonov Estate": [56.8350, 60.6208],
        "Vaynera Street": [56.8389, 60.6108],
        "Yeltsin Center": [56.8378, 60.6072],
        "Industrial Loft District": [56.8333, 60.6250],
        "Shartash Forest Park": [56.8667, 60.6500],
        "Lake Shartash": [56.8833, 60.6667],
        "Ural Mineralogical Museum": [56.8378, 60.6064],
        "City Pond Park": [56.8386, 60.6056]
    },
    "Sochi": {
        "Sochi Arboretum": [43.5744, 39.7425],
        "Sea Port": [43.5800, 39.7194],
        "Riviera Park": [43.5869, 39.7197],
        "Mount Akhun": [43.5500, 39.8500],
        "Sochi Embankment": [43.5800, 39.7200],
        "Winter Theater": [43.5856, 39.7236],
        "Marine Station": [43.5792, 39.7178],
        "Primorskaya Alley": [43.5833, 39.7264],
        "Stalin's Dacha": [43.5833, 39.7500],
        "Sochi Art Museum": [43.5833, 39.7333],
        "Matsesta District": [43.5667, 39.8000]
    }
};

// Поиск координат по городу и названию достопримечательности
function findCoordinatesForAttraction(city, attractionName) {
    if (attractionCoordinates[city] && attractionCoordinates[city][attractionName]) {
        return attractionCoordinates[city][attractionName];
    }
    
    // Если нет, через координаты центра города
    const cityCenters = {
        "Moscow": [55.7558, 37.6176],
        "Saint Petersburg": [59.9343, 30.3351],
        "Kazan": [55.7963, 49.1082],
        "Yekaterinburg": [56.8389, 60.6057],
        "Sochi": [43.5855, 39.7231]
    };
    
    return cityCenters[city] || [55.7558, 37.6176];
}


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




window.findRoute = findRoute;
window.findCoordinatesForAttraction = findCoordinatesForAttraction;