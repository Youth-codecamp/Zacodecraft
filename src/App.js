import React from 'react';
import './App.css';
import banner from './assets/banner.png';
import eventImage1 from './assets/image1.jpg';
import eventImage2 from './assets/image2.jpg'; 
import eventImage3 from './assets/image3.jpg'; 
import eventImage4 from './assets/image4.jpg'; 

function App() {
  return (
    <div className="App">
      <main>
        <section className="Banner">
          <img src={banner} alt="Event Banner" className="Event-banner" />
        </section>
        <section className="Event-details">
          <h2>ZacodeCraft - Event Recap</h2>
          <p><strong>Date:</strong> August 30, 2024</p>
          <p><strong>Time:</strong> 15:30 PM - 18:00 PM</p>
          <p><strong>Location:</strong> Masters Pizza KL House, KG 9 Ave, Kigali, Rwanda</p>
          <p>On August 30th, 18 young coders joined us for ZacodeCraft, an evening of fun, networking, and great pizza. It was an amazing time to connect, share projects, and enjoy the community spirit.</p>
        </section>
        <section className="Event-gallery">
          <h2>Event Highlights</h2>
          <div className="Gallery">
            <img src={eventImage1} alt="Event Photo 1" className="Gallery-image" />
            <img src={eventImage2} alt="Event Photo 2" className="Gallery-image" />
            <img src={eventImage3} alt="Event Photo 2" className="Gallery-image" />
            <img src={eventImage4} alt="Event Photo 2" className="Gallery-image" />
          </div>
        </section>
      </main>
      <footer>
        <p class="sponsor">Youth CodeCamp is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499). Copyright © 2024.</p>
      </footer>
    </div>
  );
}

export default App;

