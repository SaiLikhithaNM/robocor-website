import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './T1.css';

const events = [
  { 
    title: "Droid Race", 
    details: "Autonomous robots must navigate a complex path with junctions, curves, and misleading paths. The fastest bot with precise tracking wins.",
    teamSize: 4,
    registrationFee: 400
  },
  { 
    title: "Star Crawl", 
    details: "A manually controlled bot navigates different terrains like sand, water, and bumps. The bot completing the track in the least time wins.",
    teamSize: 4,
    registrationFee: 400
  },
  { 
    title: "Star Link", 
    details: "Participants build a wireless-controlled car to race through mazes and obstacle courses, testing speed, control, and accuracy.",
    teamSize: 4,
    registrationFee: 400
  },
  { 
    title: "Byte Wars", 
    details: "A competitive coding event with MCQs and a programming challenge. The fastest and most efficient coders advance and win.",
    teamSize: 2,
    registrationFee: 200
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="logo">
            <img src="/corsit logo.png" alt="Club Logo" className="club-logo" />
          </div>
          <div className="logo">ROBOCOR '25</div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="/">Home</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
            <a href="#sponsors">Sponsors</a>
            <a href="/rulebook.pdf" download="ROBOCOR_Rulebook.pdf">Rulebook</a>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Header Section */}
        <header className="header">
          <div className="header-text">
            <h1>ROBOCOR 2025</h1>
            <p className="description">
              ROBOCOR, one of Karnataka's premier robotics competitions, is a nationally renowned event that brings together innovative minds from across the country.
            </p>
          </div>
          <div className="images">
            <img src="/IMAGE2.jpg" alt="Robocor Event" />
            <img src="/IMAGE1.jpg" alt="Robocor Participants" />
          </div>
        </header>

        {/* Events Section */}
        <section id="events" className="events">
          <h2>EVENTS</h2>
          <div className="events-container">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="event-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{event.title}</h3>
                <p>{event.details}</p>
                <h4>Team Size: {event.teamSize}</h4>  
                <h4>Registration Fee: {event.registrationFee}</h4> 
                <button className="register-button">Register</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about">
          <h2>About Us</h2>
          <div className="about-content">
            <p>
              Corsit is the only robotics club of SIT which works under the esteemed patronage of the E-Yantra cell of IIT Bombay.
            </p>
            <img src="/IMAGE1.jpg" alt="About ROBOCOR" className="about-image" />
          </div>
        </section>  

        {/* Sponsors Section */}
        <section id="sponsors" className="sponsors">
          <h2>Our Sponsors</h2>
          <p>We are proud to have the support of our esteemed sponsors who make this event possible.</p>
          <div className="sponsor-logos">
            <img src="/sponsor1.png" alt="Sponsor 1" />
            <img src="/sponsor2.png" alt="Sponsor 2" />
            <img src="/sponsor3.png" alt="Sponsor 3" />
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
