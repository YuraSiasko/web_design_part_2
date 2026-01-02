import PrimaryButton from './PrimaryButton';

const ItemCard = ({ clip }) => {
    return (
        <div className="item-card">
            <img 
                src={clip.image} 
                alt={clip.title} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }} 
            />
            <h3 style={{ margin: '10px 0 5px' }}>{clip.title}</h3>
            <p><strong>Виконавець:</strong> {clip.artist}</p>
            <p>Переглядів: {(clip.views / 1000000000).toFixed(1)} млрд</p>
            
            <div style={{ marginTop: '10px' }}>
                <PrimaryButton text="Деталі" /> 
            </div>
        </div>
    );
};

export default ItemCard;