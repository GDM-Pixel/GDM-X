import React, { useEffect } from 'react';

const VoiceflowWidget = () => {
    useEffect(() => {
        const loadVoiceflow = () => {
            const existingScript = document.getElementById('voiceflow-script');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.id = 'voiceflow-script';
            script.onload = function () {
                window.voiceflow.chat.load({
                    verify: { projectID: "6579a0dea484f9a58503480e" },
                    url: "https://general-runtime.voiceflow.com",
                    versionID: "production",
                    assistant: {
                        title: "Nova",
                        description: "Technico-commerciale chez GDM-Pixel",
                        stylesheet: "https://dev.gdm-pixel.fr/css/nova.css",
                    },
                });
            };
            script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
            script.type = "text/javascript";
            document.body.appendChild(script);
        };

        loadVoiceflow(); // Charger Voiceflow lors du montage initial

        // Réinitialiser Voiceflow à chaque navigation de page Astro
        document.addEventListener('astro:page-load', loadVoiceflow);

        // Cleanup function
        return () => {
            document.removeEventListener('astro:page-load', loadVoiceflow);
            const existingScript = document.getElementById('voiceflow-script');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return null; // Aucun contenu visuel à rendre
};

export default VoiceflowWidget;
