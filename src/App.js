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
          <p><strong>Date:</strong> August 30, 2024</p>
          <p><strong>Time:</strong> 15:30 PM - 18:00 PM</p>
          <p><strong>Location:</strong>Masters Pizza KL House, KG 9 Ave, Kigali, Rwanda</p>
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
