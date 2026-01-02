import React, { useState } from 'react'; 
import PromoBanner from '../components/PromoBanner';
import PrimaryButton from '../components/PrimaryButton'; 

const initialElementsCount = 1;

const HomePage = () => {
    const [extraElements, setExtraElements] = useState(0);

    const handleViewMore = () => {
        setExtraElements(prev => prev + 3);
    };

    const renderExtraContent = () => {
        const content = [];
        for (let i = 0; i < extraElements; i++) {
            content.push(
                <div key={i} style={{ marginTop: '20px', padding: '15px', borderLeft: '3px solid #f39c12', background: '#fff' }}>
                    <h3>Додатковий елемент #{initialElementsCount + i}</h3>
                    <p>бла бла бла бла бла бла</p>
                </div>
            );
        }
        return content;
    };

    return (
        <div className="main-content">
            <PromoBanner /> 
            
            <h2>Ласкаво просимо!</h2>
            <p style={{ maxWidth: '800px', margin: '15px auto 30px' }}>
                Ми пропонуємо вам найкращу колекцію музичних кліпів. Знайдіть свого улюбленого виконавця та насолоджуйтесь переглядом.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
                <div style={{ width: '200px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h3>Топові Кліпи</h3>
                    <p>Перегляди мільярдів.</p>
                </div>
                <div style={{ width: '200px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h3>Новинки</h3>
                    <p>Щойно вийшло.</p>
                </div>
                <div style={{ width: '200px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h3>Улюблені</h3>
                    <p>Найбільше лайків.</p>
                </div>
            </div>
            
            {renderExtraContent()}

            <div style={{ marginTop: '30px' }}>
                <PrimaryButton text="Показати більше" onClick={handleViewMore} />
            </div>
        </div>
    );
};

export default HomePage;