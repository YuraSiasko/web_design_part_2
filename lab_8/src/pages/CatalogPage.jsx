import ItemCard from '../components/ItemCard'; 
import { useClips } from '../context/ClipContext'; 
import Select from '../components/Select';

const CLIP_TYPES = [
    { value: 'all', label: 'Усі типи' },
    { value: 'Pop', label: 'Поп' },
    { value: 'Rock', label: 'Рок' },
];

const CatalogPage = () => {
    const { filteredClips, filters, setFilters } = useClips();

    const handleSearchChange = (e) => {
        setFilters(prev => ({ ...prev, searchText: e.target.value }));
    };

    const handleTypeChange = (e) => {
        setFilters(prev => ({ ...prev, type: e.target.value }));
    };

    return (
        <div className="main-content">
            <h2>🎵 Каталог музичних кліпів</h2>
            
            <div style={{ margin: '20px 0', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <input 
                    type="text" 
                    placeholder="🔍 Пошук за назвою/виконавцем..." 
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '300px' }} 
                    value={filters.searchText}
                    onChange={handleSearchChange}
                />
                
                <Select 
                    options={CLIP_TYPES} 
                    value={filters.type} 
                    onChange={handleTypeChange}
                />
            </div>

            <div className="catalog-grid">
                {filteredClips.length === 0 ? (
                    <p style={{ gridColumn: '1 / -1' }}>На жаль, за вашими критеріями кліпів не знайдено.</p>
                ) : (
                    filteredClips.map(clip => (
                        <ItemCard key={clip.id} clip={clip} />
                    ))
                )}
            </div>
        </div>
    );
};

export default CatalogPage;