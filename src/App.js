import { Header } from './sections/header/Header';
import { Home } from './sections/home/Home';
import { About } from './sections/about/About';
import { Cases } from './sections/cases/Cases';

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Cases />
        </>
    );
}

export default App;