// Nova.jsx
import React, { useEffect } from 'react';

const Nova = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.onload = function () {
      window.voiceflow.chat.load({
        verify: { projectID: "6579a0dea484f9a58503480e" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        assistant: {
          title: "Nova",
          description: "Technico-commerciale chez GDM-Pixel",
          stylesheet: "https://dev.gdm-pixel.fr/css/nova.css", // lien vers votre feuille de style auto-hébergée
        },
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return <div id="nova-chat"></div>;
};

export default Nova;