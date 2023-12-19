import { useEffect } from 'react';

const useTakuLauncher = () => {
    useEffect(() => {
        const scriptId = "taku-js";

        // Fonction pour initialiser Taku
        const takuLauncher = () => {
            if (!window.Taku || !window.takuLoaded) return;

            window.Taku("news:boot", {
                api_public_key: "oI/KXl6RR47CCmPPlLn3VL9bCzveD7AkrbX0r+1ZldI=",
                custom_launcher: "#taku-launcher",
            });
        };

        // Vérifier si le script est déjà chargé
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://cdn.taku-app.com/js/latest.js";
            script.async = true;
            script.onload = () => {
                window.takuLoaded = true;
                takuLauncher();
            };
            document.head.appendChild(script);
        } else if (!window.takuLoaded) {
            takuLauncher();
        }

        // Attacher l'événement mouseenter à l'élément taku-launcher
        const launcherElement = document.getElementById("taku-launcher");
        if (launcherElement) {
            launcherElement.addEventListener("mouseenter", takuLauncher);
        }

        // Nettoyage lors du démontage du composant
        return () => {
            if (launcherElement) {
                launcherElement.removeEventListener("mouseenter", takuLauncher);
            }
        };
    }, []);
};

export default useTakuLauncher;