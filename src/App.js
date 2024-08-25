import React from 'react';
import './App.css';
import banner from './assets/banner.png';

function App() {
  return (
    <div className="App">
      <main>
        <section className="Banner">
          <img src={banner} alt="Event Banner" className="Event-banner" />
        </section>
        <section className="Event-details">
          <h2>Event Details</h2>
          <p><strong>Date:</strong> August 31, 2024</p>
          <p><strong>Time:</strong> 11:00 AM - 4:00 PM</p>
          <p><strong>Location:</strong> Youth Code Camp HQ, Kigali</p>
          <p>Join us for an evening of great pizza, coding fun, and community spirit. Meet other coders, share your projects, and enjoy delicious pizza!</p>
        </section>
        <section className="RSVP">
          <h2>RSVP</h2>
          <p>Please let us know if you’re coming by <a href="https://lu.ma/ppl24ci5" target="_blank" rel="noopener noreferrer" className="RSVP-link">registering here</a>!</p>
          <button className="RSVP-button">
            <a href="https://lu.ma/ppl24ci5" target="_blank" rel="noopener noreferrer">RSVP Here</a>
          </button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Youth Code Camp</p>
        <p>Sponsored by <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="Sponsor-link">Hack Club</a></p>
      </footer>
    </div>
  );
}

export default App;
