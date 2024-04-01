// pages/trigger-isr.tsx
import React from 'react';

const TriggerISRPage: React.FC = () => {
    const handleClick = async () => {
        try {
            // Hit the API route to trigger revalidation
            const response = await fetch('/api/trigger-revalidate');
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error triggering ISR:', error);
            alert('Error triggering ISR. See console for details.');
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Trigger ISR</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                    Trigger ISR
                </button>
            </div>
        </main>
    );
};

export default TriggerISRPage;
