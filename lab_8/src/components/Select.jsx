const Select = ({ options, value, onChange }) => {
    return (
        <select 
            value={value}
            onChange={onChange}
            style={{ 
                padding: '8px 15px', 
                borderRadius: '5px', 
                border: '1px solid #ccc', 
                cursor: 'pointer' 
            }}
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default Select;