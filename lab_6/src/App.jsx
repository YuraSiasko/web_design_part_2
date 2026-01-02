import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './assets/styles.css'; 

const App = () => {
    return (
            <div className="app-container">
                <Header /> 
                
                <HomePage /> 
                
                <Footer />
            </div>
    );
};

export default App;