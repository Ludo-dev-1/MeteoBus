

const meteo = async () => {
    try {
        // Récupération des fichiers JSON de configuration et des icônes météo
        const weatherIconsResp = await fetch('./weather-icons.json');
        const weatherIcons = await weatherIconsResp.json();

        // Récupération du fichier de configuration
        const confResp = await fetch('./conf.json');
        const config = await confResp.json();

        // Affichage du nom de la ville
        const citySelected = document.querySelector('.city');
        citySelected.textContent += `${config.city} :`;


        // Récupération des données météo depuis l'API
        const inseeCode = config.insee;
        const response = await fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=ef7cf42cb7f8de2125d8015ecdb7bcd8d2398f60697813068ea26840d58da189&insee=${inseeCode}`);
        const data = await response.json();
        console.log(data);

        // Récupération et formatage de la date et de l'heure    
        const dateTime = data.forecast[0].datetime;
        console.log(dateTime);
        const dateString = `${dateTime}`;
        const dateformated = new Date(dateString);

        // Options pour un affichage lisible
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };

        const date = document.querySelector('.dateTime');
        date.textContent += dateformated.toLocaleDateString('fr-FR', options);
        const temp = data.forecast[0].temp2m;

        // Affichage de la température
        const temperature = document.querySelector('.temperature');
        temperature.textContent += temp + " °C";

        // Affichage de la probabilité de pluie   
        const probalyRain = data.forecast[0].probarain;
        const pluie = document.querySelector('.pluie');
        pluie.textContent += probalyRain + " %";

        // Affichage de la vitesse du vent
        const windSpeed = data.forecast[0].wind10m;
        const vent = document.querySelector('.vitesse-du-vent');
        vent.textContent += windSpeed + " km/h";


        // Affichage des conditions météorologiques avec icônes
        const weatherCode = data.forecast[0].weather;
        const iconFile = weatherIcons[weatherCode];

        const weatherDescription = document.querySelector('.conditions');
        weatherDescription.textContent += " " + iconFile.replace(".png", "").replace("_", " ");


        const iconElement = document.querySelector('#weather-icon');

        if (iconFile) {
            iconElement.src = `./public/icons/${iconFile}`;
            iconElement.alt = iconFile;
        } else {
            iconElement.src = "./public/icons/default.png"; // icône par défaut
            iconElement.alt = "default";
        }

    } catch (error) {
        console.error("Erreur lors de la récupération des données météo :", error);
    }
};

meteo();

// Rafraîchissement automatique toutes les heures
setInterval(meteo, 3600000);

