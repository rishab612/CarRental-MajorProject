import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Chatbot = () => {
    const location = useLocation()
    const isOwnerPath = location.pathname.startsWith('/owner')

    useEffect(() => {
        // If we are on an owner path, ensure the script is not present or clean up if possible.
        // However, since this script likely injects a global UI, we simply return if on owner path.
        // For a cleaner 'unmount', we might need to remove the injected script and any DOM elements it created.
        // Given the script type, it's likely a persistent widget.

        if (isOwnerPath) {
            // Attempt to cleanup if it exists from a previous navigation
            const existingScript = document.querySelector('script[src="https://app.thinkstack.ai/bot/thinkstackai-loader.min.js"]');
            if (existingScript) {
                existingScript.remove();
            }
            // Also look for the chatbot container if known, e.g., standard IDs used by such bots.
            // Without knowing the exact ID, we hope script removal stops it or it wasn't loaded yet.
            return;
        }

        const scriptId = 'thinkstack-chatbot';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://app.thinkstack.ai/bot/thinkstackai-loader.min.js";
            script.setAttribute('chatbot_id', "696418541977a7ea19fcc985");
            script.setAttribute('data-type', "default");
            script.async = true;

            document.body.appendChild(script);

            return () => {
                // Cleanup on unmount is tricky with global widgets.
                // If the user navigates TO the owner dashboard, this unmount runs.
                // We can remove the script tag.
                document.body.removeChild(script);
            }
        }
    }, [isOwnerPath]);

    // Return null as this component doesn't render DOM itself, just injects script
    return null
}

export default Chatbot
