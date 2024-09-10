import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/layouts/Header';
import Footer from "../components/layouts/Footer";

export default ({children}) => {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <Header />

                <main className="container mx-auto w-full py-8">
                    {children}
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
};
