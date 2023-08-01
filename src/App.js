import { lazy, Suspense } from "react";

const Header = lazy(() => import("./sections/header/Header"));
const Home = lazy(() => import("./sections/home/Home"));
const About = lazy(() => import("./sections/about/About"));
const Cases = lazy(() => import("./sections/cases/Cases"));
const Blog = lazy(() => import("./sections/blog/Blog"));
const Team = lazy(() => import("./sections/team/Team"));
const Contact = lazy(() => import("./sections/contact/Contact"));
const Footer = lazy(() => import("./sections/footer/Footer"));

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Suspense fallback={<div>Loading...</div>}>           
                <About />
                <Cases />
                <Blog />
                <Team />
                <Contact />
                <Footer />
            </Suspense>
        </>
    );
}

export default App;