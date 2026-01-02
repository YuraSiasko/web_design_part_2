
const PrimaryButton = ({ text, onClick, style = {} }) => {
    return (
        <button 
            onClick={onClick}
            style={{ 
                padding: '8px 15px', 
                backgroundColor: '#3498db', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer',
                fontWeight: 'bold',
                ...style
            }}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;