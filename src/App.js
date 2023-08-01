// import { lazy, Suspense } from "react";

// const Header = lazy(() => import("./sections/header/Header"));
// const Home = lazy(() => import("./sections/home/Home"));
// const About = lazy(() => import("./sections/about/About"));
// const Cases = lazy(() => import("./sections/cases/Cases"));
// const Blog = lazy(() => import("./sections/blog/Blog"));
// const Team = lazy(() => import("./sections/team/Team"));
// const Contact = lazy(() => import("./sections/contact/Contact"));
// const Footer = lazy(() => import("./sections/footer/Footer"));

import Header from './sections/header/Header';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Cases from './sections/cases/Cases';
import Blog from './sections/blog/Blog';
import Team from './sections/team/Team';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Home />
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                <About />
                <Cases />
                <Blog />
                <Team />
                <Contact />
                <Footer />
            {/* </Suspense> */}
        </>
    );
}

export default App;