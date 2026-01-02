
import React from 'react';

const PromoBanner = () => {
    return (
        <div className="banner">
            <h2>🔥 Свіжі хіти!</h2>
            <p>Ознайомтеся з найпопулярнішими кліпами у нашому каталозі.</p>
            <button style={{ 
                marginTop: '15px', 
                padding: '10px 20px', 
                backgroundColor: '#2ecc71', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer' 
            }}>
                Переглянути зараз
            </button>
        </div>
    );
};

export default PromoBanner; 