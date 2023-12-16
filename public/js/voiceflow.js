function setupNovaListeners() {
    console.log("setupNovaListeners appelée");
    (function (d, t) {
        var v = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
        console.log("Élément script créé, prêt à charger le widget Voiceflow");
        v.onload = function () {
            console.log("Script Voiceflow chargé, configuration en cours");
            window.voiceflow.chat.load({
                verify: { projectID: "6579a0dea484f9a58503480e" },
                url: "https://general-runtime.voiceflow.com",
                versionID: "production",
                assistant: {
                    title: "Nova",
                    description: "Technico-commerciale chez GDM-Pixel",
                    stylesheet: "https://dev.gdm-pixel.fr/css/nova.css", // Remplacez par votre lien de feuille de style
                },
            });
        };
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        v.type = "text/javascript";
        s.parentNode.insertBefore(v, s);
        console.log("Script Voiceflow inséré dans le DOM");
    })(document, "script");
}

function reloadVoiceflow() {
    console.log("Rechargement du widget Voiceflow");
    // Supprimer toute référence de l'ancien widget dans window
    if (window.voiceflow) {
        delete window.voiceflow.chat; // Ajustez selon l'objet réel
        console.log("Référence Voiceflow supprimée de window");
    }
    // Recréer le widget
    setupNovaListeners();
}

// Appel initial de la fonction
setupNovaListeners();

// Écouter l'événement astro:page-load pour recharger le widget
document.addEventListener('astro:page-load', function () {
    console.log("Événement astro:page-load détecté");
    reloadVoiceflow();
});
