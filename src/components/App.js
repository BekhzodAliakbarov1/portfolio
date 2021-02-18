import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ExtraCard from './Footer/ExtraCard';
import Footer from './Footer/Footer'
import Footer2 from './Footer/Footer2'
import Home from './Home/Home'
import Home1 from './Home/HomeParts/Home1'
import Home2 from './Home/HomeParts/Home2'
import Home3 from './Home/HomeParts/Home3'
import Home4 from './Home/HomeParts/Home4'
import Home5 from './Home/HomeParts/Home5'
import Home6 from './Home/HomeParts/Home6'
import Home7 from './Home/HomeParts/Home7'
import Navbar from './Navbar/Navbar'
import NavbarPhone from './Navbar/NavbarPhone'

function App() {
    return (
        <div style={{marginBottom: '300px', width: '100%', overflow: 'hidden'}}>
            <Router>
                <ScrollToTop />
                <Navbar />
                <NavbarPhone />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/portfolio'>
                        <Home1 title='Our Portfolios'/>
                        <Home2 />
                    </Route>
                    <Route exact path='/about'>
                        <Home1 title='About our company'/>
                        <Home4 />
                    </Route>
                    <Route exact path='/services'>
                        <Home1 title='Our Services'/>
                        <Home5 />
                    </Route>
                    <Route exact path='/skills'>
                        <Home1 title="We have these skills"/>
                        <Home6 />
                    </Route>
                    <Route exact path='/testimonial'>
                        <Home1 title='Our clients opinions'/>
                        <Home7 />
                    </Route>
                    <Route exact path='/journal'>
                        <Home1 title='we are it compony based on front-end'/>
                        <Home5 />
                        <Home3 />
                    </Route>
                    <Route exact path='/contact'>
                        <Home1 title="Our contact information"/>
                        {/* <ExtraCard /> */}
                    </Route>
                </Switch>
                <Footer />
                <Footer2 />
            </Router>
        </div>
    )
}

export default App





function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}