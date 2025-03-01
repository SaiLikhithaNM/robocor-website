import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';

const events = [
  { 
    title: "Droid Race", 
    details: "Autonomous robots must navigate a complex path with junctions, curves, and misleading paths. The fastest bot with precise tracking wins.",
    teamSize: 4,
    registrationFee:400
  },
  { 
    title: "Star Crawl", 
    details: "A manually controlled bot navigates different terrains like sand, water, and bumps. The bot completing the track in the least time wins.",
    teamSize: 4,
    registrationFee:400
  },
  { 
    title: "Star Link", 
    details: "Participants build a wireless-controlled car to race through mazes and obstacle courses, testing speed, control, and accuracy.",
    teamSize: 4,
    registrationFee:400
  },
  { 
    title: "Byte Wars", 
    details: "A competitive coding event with MCQs and a programming challenge. The fastest and most efficient coders advance and win.",
    teamSize: 2,
    registrationFee:200
  },
  { 
    title: "Droid Kick", 
    details: "A robotic soccer match where bots aim to push the ball into the opponent’s goal. The most skillful and agile bot wins." ,
    teamSize: 4,
    registrationFee:400
  },
  { 
    title: "Arduino Craft", 
    details: "An Arduino-based challenge where teams complete hands-on electronics tasks. The fastest and most accurate team wins." ,
    teamSize: 3,
    registrationFee:300
  },
  { 
    title: "Project Symposium", 
    details: "Teams present their innovative projects through paper and live demos. The most creative and impactful ideas receive bonus points." ,
    teamSize: 4,
    registrationFee:400
  },
  { 
    title: "Quizzy Brainiacs", 
    details: "A technical quiz event with MCQs that test fundamental and advanced concepts. Speed and accuracy determine the winners." ,
    teamSize: 1,
    registrationFee:50
  }
];



function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
        
         <div className="logo">
            <img src="/corsit logo.png" alt="Club Logo" className="club-logo" />
                
          </div>
          <div className="logo">ROBOCOR' 2025</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
             <a href="#events">Events</a> 
             <a href="#about">About</a> 
             <a href="/rulebook.pdf" download="ROBOCOR_Rulebook.pdf">Rulebook</a>
             <a href="#sponsors">Sponsors</a> 
             <a href="#contact">Contact</a> 
            
          </div>
        </nav>

        {/* Header Section */}
        <header className="header">
          <div className="header-text">
            <h1>ROBOCOR 2025</h1>
            <p className="description">
            ROBOCOR, one of Karnataka's premier robotics competitions, is a nationally renowned event that brings together innovative minds from across the country.
             It serves as a platform for participants to showcase their creativity, technical expertise and problem-solving skills while competing for glory. 
             Over the years, the team has successfully organized a diverse range of events, including Decode, Spardha, Rugged Rage, Robo Soccer, Arduino Clash, Line follower, 
              Project Symposium, Paper Presentation, Wireless bot race and many more, each designed to challenge and inspire the next generation of robotics enthusiasts.
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
              Corsit is the only robotics clubof SIT which works under esteemed patronage of E-Yantra cell of IIT Bombay.It is an organization of bunch of students who are ordinary enough to derive their interest in doing something different and built a mechanically active device which people called Robots.
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
    {/* Add more sponsor images as needed */}
  </div>
</section>
{/* Footer Section */}
<footer id="contact" className="footer">
  <h2>Contact Us</h2>
  <div className="footer-links">
    
    
    <a href="https://www.linkedin.com/company/corsit/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    <a href="https://www.instagram.com/corsit.sit" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
    <a href="https://www.youtube.com/channel/UCcm-ttunddHrEGWUdYkUd2w" target="_blank" rel="noopener noreferrer">
      YouTube
    </a>
  </div>
  <p>&copy; 2025 ROBOCOR. All Rights Reserved.</p>
</footer>
      </div>
      
    </Router>
  );
}

export default App;
