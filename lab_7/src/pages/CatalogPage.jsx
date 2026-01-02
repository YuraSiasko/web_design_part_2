import ItemCard from '../components/ItemCard'; 
import PrimaryButton from '../components/PrimaryButton'; 

const FAKE_CLIPS = [
    { id: 1, artist: "The Weeknd", title: "Blinding Lights", duration: 200, views: 7000000000, image: "https://via.placeholder.com/220x150?text=The+Weeknd" },
    { id: 2, artist: "Adele", title: "Hello", duration: 295, views: 3200000000, image: "https://via.placeholder.com/220x150?text=Adele" },
    { id: 3, artist: "Ed Sheeran", title: "Shape of You", duration: 263, views: 6100000000, image: "https://via.placeholder.com/220x150?text=Ed+Sheeran" },
    { id: 4, artist: "Imagine Dragons", title: "Believer", duration: 204, views: 2500000000, image: "https://via.placeholder.com/220x150?text=Imagine+Dragons" },
    { id: 5, artist: "Coldplay", title: "Viva La Vida", duration: 241, views: 1800000000, image: "https://via.placeholder.com/220x150?text=Coldplay" },
    { id: 6, artist: "Linkin Park", title: "Numb", duration: 188, views: 2000000000, image: "https://via.placeholder.com/220x150?text=Linkin+Park" }
];


const CatalogPage = () => {
    return (
        <div className="main-content">
            <h2>🎵 Каталог музичних кліпів</h2>
            
            <div style={{ margin: '20px 0', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <input type="text" placeholder="🔍 Пошук за назвою/виконавцем..." style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '300px' }} />
                <PrimaryButton text="Фільтр (тривалість)" />
            </div>

            <div className="catalog-grid">
                {FAKE_CLIPS.map(clip => (
                    <ItemCard key={clip.id} clip={clip} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;