import React from 'react';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom'; 

const ItemCard = ({ clip }) => {
    const navigate = useNavigate(); 
    
    const handleViewDetails = () => {
        navigate(`/item/${clip.id}`); 
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
            
            <div style={{ marginTop: '10px' }}>
                <PrimaryButton text="Деталі" onClick={handleViewDetails} /> 
            </div>
        </div>
    );
};

export default ItemCard;