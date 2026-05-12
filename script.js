document.addEventListener('DOMContentLoaded', function() {
    const cities = document.querySelectorAll('.city');
    const cityTitle = document.getElementById('city-title');
    const cityContent = document.getElementById('city-content');

    const itineraries = {
        tokyo: {
            title: 'Tokyo Itinerary',
            content: `
                <p><strong>Overview:</strong> Tokyo is Japan's bustling capital, a dynamic metropolis blending ultramodern skyscrapers, historic temples, vibrant pop culture, and serene gardens. It's a city of contrasts where tradition meets innovation.</p>
                <h3>Top Attractions:</h3>
                <ul>
                    <li><strong>Shibuya Crossing:</strong> The world's busiest pedestrian crossing, iconic for its synchronized traffic lights and neon lights.</li>
                    <li><strong>Senso-ji Temple:</strong> Tokyo's oldest temple in Asakusa, featuring the Kaminarimon Gate and Nakamise Shopping Street.</li>
                    <li><strong>Tokyo Tower and Skytree:</strong> Observation decks offering panoramic views of the city skyline.</li>
                    <li><strong>Imperial Palace:</strong> The residence of Japan's Imperial Family, surrounded by beautiful gardens and moats.</li>
                    <li><strong>Akihabara:</strong> The hub for electronics, anime, manga, and otaku culture.</li>
                    <li><strong>Meiji Shrine:</strong> A peaceful Shinto shrine dedicated to Emperor Meiji, set in a lush forest.</li>
                    <li><strong>Harajuku and Takeshita Street:</strong> Trendy area for fashion, street food, and youth culture.</li>
                    <li><strong>Tsukiji Outer Market:</strong> Famous for fresh seafood, sushi, and street food (note: the inner market has moved).</li>
                </ul>
                <h3>Cuisine:</h3>
                <p>Tokyo offers world-class dining. Try sushi at Tsukiji, ramen in Shinjuku, tempura in Ginza, or street food in Shibuya. Don't miss conveyor-belt sushi or izakayas for casual eats.</p>
                <h3>Transportation:</h3>
                <p>Use the efficient JR Pass or subway system. Walk in central areas, or take taxis for short trips. The Shinkansen (bullet train) connects to other cities.</p>
                <p><strong>Best time to visit:</strong> Spring (March-May) for cherry blossoms or Autumn (September-November) for fall foliage. Avoid humid summers.</p>
            `
        },
        kyoto: {
            title: 'Kyoto Itinerary',
            content: `
                <p><strong>Overview:</strong> Kyoto, once Japan's capital, is a treasure trove of ancient temples, shrines, and traditional culture. It's less hectic than Tokyo, offering a glimpse into Japan's historical heart.</p>
                <h3>Top Attractions:</h3>
                <ul>
                    <li><strong>Kinkaku-ji (Golden Pavilion):</strong> A Zen temple covered in gold leaf, surrounded by serene gardens.</li>
                    <li><strong>Fushimi Inari Shrine:</strong> Famous for its thousands of vermilion torii gates winding up the mountain.</li>
                    <li><strong>Arashiyama Bamboo Grove:</strong> A magical forest of towering bamboo, perfect for peaceful walks.</li>
                    <li><strong>Nijo Castle:</strong> A UNESCO site with beautiful architecture and "nightingale floors" that squeak to warn of intruders.</li>
                    <li><strong>Kiyomizu-dera Temple:</strong> Offers stunning views from its wooden stage over Kyoto's rooftops.</li>
                    <li><strong>Gion District:</strong> Historic geisha quarter with traditional machiya houses and teahouses.</li>
                    <li><strong>Philosopher's Path:</strong> A scenic stone path along a canal, lined with cherry trees.</li>
                    <li><strong>Ryoan-ji:</strong> Famous for its rock garden, a masterpiece of Zen design.</li>
                </ul>
                <h3>Cuisine:</h3>
                <p>Kyoto is renowned for kaiseki (multi-course meals), yudofu (tofu hot pot), and matcha desserts. Try obanzai (Kyoto-style home cooking) and sweets like yatsuhashi.</p>
                <h3>Transportation:</h3>
                <p>The subway and buses are efficient. Rent bikes for exploring temples. It's accessible by Shinkansen from Tokyo.</p>
                <p><strong>Best time to visit:</strong> Spring (April) for cherry blossoms or Autumn (October-November) for vibrant maple leaves.</p>
            `
        },
        osaka: {
            title: 'Osaka Itinerary',
            content: `
                <p><strong>Overview:</strong> Osaka, Japan's "Nation's Kitchen," is known for its friendly locals, delicious food, and vibrant nightlife. It's more laid-back than Tokyo, with a focus on fun and gastronomy.</p>
                <h3>Top Attractions:</h3>
                <ul>
                    <li><strong>Osaka Castle:</strong> A reconstructed feudal castle with museums and gardens.</li>
                    <li><strong>Dotonbori:</strong> The heart of Osaka's food scene, with neon signs, street food, and entertainment.</li>
                    <li><strong>Tempozan Giant Ferris Wheel:</strong> Offers panoramic views of Osaka Bay and the city.</li>
                    <li><strong>Shitenno-ji Temple:</strong> One of Japan's oldest temples, founded in 593 AD.</li>
                    <li><strong>Universal Studios Japan:</strong> A theme park with rides, shows, and character experiences.</li>
                    <li><strong>Aquarium Kaiyukan:</strong> One of the world's largest aquariums, featuring whale sharks and penguins.</li>
                    <li><strong>Umeda Sky Building:</strong> Floating Garden Observatory provides 360-degree city views.</li>
                    <li><strong>Shinsekai:</strong> Retro district with Tsutenkaku Tower and nostalgic atmosphere.</li>
                </ul>
                <h3>Cuisine:</h3>
                <p>Osaka is a food paradise. Famous for takoyaki (octopus balls), okonomiyaki (savory pancakes), and kushikatsu (deep-fried skewers). Try street food in Dotonbori or conveyor-belt sushi.</p>
                <h3>Transportation:</h3>
                <p>Excellent subway and train systems. Walkable downtown areas. Shinkansen connects to other cities.</p>
                <p><strong>Best time to visit:</strong> Year-round, but summer (July-August) for festivals like Tenjin Matsuri, or spring for milder weather.</p>
            `
        },
        hiroshima: {
            title: 'Hiroshima Itinerary',
            content: `
                <p><strong>Overview:</strong> Hiroshima is a symbol of peace and resilience, known for its tragic history and beautiful recovery. It's a thoughtful destination combining memorials with natural beauty.</p>
                <h3>Top Attractions:</h3>
                <ul>
                    <li><strong>Hiroshima Peace Memorial Park and Museum:</strong> A poignant reminder of the atomic bombing, with exhibits on peace and nuclear disarmament.</li>
                    <li><strong>Atomic Bomb Dome:</strong> The only structure left standing after the 1945 bombing, now a UNESCO World Heritage Site.</li>
                    <li><strong>Miyajima Island:</strong> Accessible by ferry, home to the floating Itsukushima Shrine and wild deer.</li>
                    <li><strong>Hiroshima Castle:</strong> A reconstructed castle with exhibits on Hiroshima's history.</li>
                    <li><strong>Mazda Museum:</strong> Showcases the history of Mazda cars and Hiroshima's industrial heritage.</li>
                    <li><strong>Peace Memorial Museum:</strong> Detailed accounts of the bombing and its aftermath.</li>
                    <li><strong>Shukkei-en Garden:</strong> A traditional Japanese garden with ponds and teahouses.</li>
                    <li><strong>Onomichi:</strong> Nearby town with scenic hills, temples, and cycling paths.</li>
                </ul>
                <h3>Cuisine:</h3>
                <p>Try Hiroshima-style okonomiyaki (with noodles), oysters (in season), and anago (conger eel). The food reflects the region's coastal location.</p>
                <h3>Transportation:</h3>
                <p>Shinkansen from Tokyo takes about 4 hours. Local trains and ferries to Miyajima. Hiroshima Airport for international flights.</p>
                <p><strong>Best time to visit:</strong> Spring (March-May) or Autumn (September-November) for comfortable weather and fewer crowds.</p>
            `
        },
        // New Nara itinerary 
        nara: {
            title: 'Nara Itinerary',
            content: `
                <p><strong>Overview:</strong> Nara is famous for its historic temples and friendly deer.</p>

                <h3>Top Attractions:</h3>
                <ul>
                    <li>Todai-ji Temple</li>
                    <li>Nara Park</li>
                    <li>Kasuga Taisha Shrine</li>
                    <li>Isuien Garden</li>
                </ul>

                <p><strong>Best time to visit:</strong> Spring and autumn.</p>
            `
        }
    };

    cities.forEach(city => {
        city.addEventListener('click', function(event) {
            event.preventDefault();
            const cityId = this.id;
            const itinerary = itineraries[cityId];
            if (itinerary) {
                cityTitle.textContent = itinerary.title;
                cityContent.innerHTML = itinerary.content;
            }
        });
    });
});