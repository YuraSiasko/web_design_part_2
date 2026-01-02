const Loader = () => {
    const loaderStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        fontSize: '24px',
        color: '#3498db'
    };

    return (
        <div style={loaderStyle}>
            ⏳ Завантаження даних... Будь ласка, зачекайте.
        </div>
    );
};

export default Loader;