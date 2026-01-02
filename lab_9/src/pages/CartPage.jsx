import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartActions';
import PrimaryButton from '../components/PrimaryButton'; 

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };
    
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="main-content" style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            
            <h1 style={{ borderBottom: '2px solid #3498db', paddingBottom: '10px', color: '#333' }}>🛒 Ваш Кошик</h1>
            
            <div style={{ padding: '15px 0', borderBottom: '1px solid #ddd', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                 <p style={{ fontWeight: 'bold' }}>Всього позицій: {cartItems.length}</p>
                 <p style={{ fontWeight: 'bold' }}>Загальна кількість: {totalItems}</p>
            </div>


            {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#777' }}>Кошик порожній. Час додати щось!</p>
            ) : (
                <div style={{ display: 'grid', gap: '20px' }}>
                    {cartItems.map(item => (
                        <div key={item.id} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            padding: '15px', 
                            border: '1px solid #eee', 
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>
                            
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginRight: '15px' }} 
                            />
                            
                            <div style={{ flexGrow: 1 }}>
                                <h3 style={{ margin: '0 0 5px', color: '#3498db' }}>{item.title}</h3>
                                <p style={{ margin: 0, fontSize: '0.9em', color: '#555' }}>Виконавець: {item.artist}</p>
                                <p style={{ margin: '5px 0 0', fontWeight: 'bold' }}>Кількість: {item.quantity}</p>
                            </div>

                            <PrimaryButton 
                                text="Видалити" 
                                onClick={() => handleRemoveItem(item.id)} 
                                style={{ backgroundColor: '#e74c3c', padding: '8px 15px' }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;