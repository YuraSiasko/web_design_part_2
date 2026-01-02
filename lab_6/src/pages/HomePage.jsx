
import PromoBanner from '../components/PromoBanner';

const HomePage = () => {
    return (
        <div className="main-content">
            <PromoBanner /> 
            
            <h2>Ласкаво просимо!</h2>
            <p style={{ maxWidth: '800px', margin: '15px auto 30px' }}>
                Ми пропонуємо вам найкращу колекцію музичних кліпів. Знайдіть свого улюбленого виконавця та насолоджуйтесь переглядом.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
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
        </div>
    );
};

export default HomePage;