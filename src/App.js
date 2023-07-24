import { Header } from './sections/header/Header';
import { Home } from './sections/home/Home';
import { About } from './sections/about/About';
import { Cases } from './sections/cases/Cases';
import { Blog } from './sections/blog/Blog';
import { Team } from './sections/team/Team';
import { Contact } from './sections/contact/Contact';
import { Footer } from './sections/footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Cases />
            <Blog />
            <Team />
            <Contact />
            <Footer />
        </>
    );
}

export default App;