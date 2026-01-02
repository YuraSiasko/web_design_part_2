import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useClips } from '../context/ClipContext';
import PrimaryButton from '../components/PrimaryButton';

const ItemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { allClips } = useClips();

    const clip = allClips.find(c => c.id === parseInt(id));

    if (!clip) {
        return (
            <div className="main-content" style={{ textAlign: 'center' }}>
                <h2>404: Кліп не знайдено</h2>
                <PrimaryButton text="На головну" onClick={() => navigate('/')} style={{ marginTop: '20px' }} />
            </div>
        );
    }

    return (
        <div className="main-content" style={{ maxWidth: '800px', margin: '40px auto' }}>
            <h2>{clip.title} — {clip.artist}</h2>
            
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', marginTop: '30px' }}>
                <img 
                    src={`https://via.placeholder.com/300x200?text=${clip.title.replace(' ', '+')}`} 
                    alt={clip.title} 
                    style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
                />
                
                <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>
                        **Виконавець:** {clip.artist}
                    </p>
                    <p>**Тривалість:** {clip.duration} сек</p>
                    <p>**Перегляди:** {clip.views.toLocaleString()}</p>
                    <p>**Жанр:** {clip.type}</p>
                    
                    <PrimaryButton 
                        text="➕ Додати до кошика" 
                        style={{ marginTop: '20px', backgroundColor: '#2ecc71' }} 
                    />
                </div>
            </div>
            
            <p style={{ marginTop: '30px', textAlign: 'justify' }}>
                Це сторінка деталізації кліпу, яка відображає всю інформацію, отриману з глобального сховища (контексту), відповідно до ID у URL.
            </p>
        </div>
    );
};

export default ItemPage;