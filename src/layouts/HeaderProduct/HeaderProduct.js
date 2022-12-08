import Header from 'src/layouts/components/Header';
import Footer from 'src/layouts/components/Footer';

function HeaderProduct({ children }) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderProduct;
