async function useSendMessage(message){
    try {
        fetch('/api/v1/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });
    } catch (error) {
        console.error("Error sending message:", error);
    }
}

export { useSendMessage };