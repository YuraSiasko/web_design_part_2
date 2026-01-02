import React, { useState } from 'react'; 
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartActions';

const ItemCard = ({ clip }) => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const [isAdded, setIsAdded] = useState(false); 

    const handleViewDetails = () => {
        navigate(`/item/${clip.id}`); 
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); 
    
        dispatch(addItem(clip)); 
        
        setIsAdded(true);
        
        setTimeout(() => {
            setIsAdded(false);
        }, 1000); 

    };

    const buttonStyle = {
        flexGrow: 1, 
        backgroundColor: isAdded ? '#f39c12' : '#2ecc71', 
        transition: 'background-color 0.3s' 
    };

    return (
        <div className="item-card">
            <img 
                src={clip.image} 
                alt={clip.title} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }} 
            />
            <h3 style={{ margin: '10px 0 5px' }}>{clip.title}</h3>
            <p><strong>Виконавець:</strong> {clip.artist}</p>
            <p>Тип: {clip.type}</p> 
            
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                
                <PrimaryButton 
                    text="Деталі" 
                    onClick={handleViewDetails}
                    style={{ flexGrow: 1, backgroundColor: '#3498db' }}
                /> 
                
                <PrimaryButton 
                    text={isAdded ? " Додано!" : " Додати"} 
                    onClick={handleAddToCart} 
                    style={buttonStyle} 
                />
            </div>
        </div>
    );
};

export default ItemCard;