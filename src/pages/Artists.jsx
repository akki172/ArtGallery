import React from 'react';
import './Artists.css';

const Artists = () => {
  return (
    <div className="artists-container">
      <h2>Our Artists</h2>

      <p>
        Vadehra Art Gallery represents a diverse group of South Asian artists spanning several
        <p>
        generations. From modern masters to contemporary voices, we celebrate the richness and diversity of the art scene.
        </p>
        
      </p>

      <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/originals/84/b6/ee/84b6ee48d0954e7f0b0c998c24e807b7.jpg" alt="Jane" style={{ width: '100%' }} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes Jane. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/originals/82/3d/15/823d156c0722af54cbf9b00259073be8.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Mike Ross has been shaping the gallery’s vision and curating thought-provoking exhibitions.</p>
              <p>mike@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/originals/f1/26/ca/f126ca0a9660845835551e28b4c8537b.jpg" alt="John" style={{ width: '100%' }} />
            <div className="container">
              <h2>Lisa</h2>
              <p className="title">Designer</p>
              <p>John Doe’s designs are inspired by a combination of contemporary and traditional art forms.</p>
              <p>john@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        {/* Add more artists */}

        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/originals/28/99/77/289977a6f0ae4a902d6f0efc66bcca0c.jpg" alt="Alice" style={{ width: '100%' }} />
            <div className="container">
              <h2>Alice Smith</h2>
              <p className="title">Painter</p>
              <p>Alice Smith’s paintings explore the intersection of color and emotion in abstract art.</p>
              <p>alice@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/236x/6d/f8/3e/6df83ebb1d6e3bab410ee0f22a927862.jpg" alt="Tom" style={{ width: '100%' }} />
            <div className="container">
              <h2>Tom Brown</h2>
              <p className="title">Sculptor</p>
              <p>Tom Brown is renowned for his intricate sculptures that merge modernism with classical techniques.</p>
              <p>tom@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/736x/8e/51/cd/8e51cdbaf0fd1e3f375e2c8ee511bf36.jpg" alt="Sara" style={{ width: '100%' }} />
            <div className="container">
              <h2>Sara Lee</h2>
              <p className="title">Photographer</p>
              <p>Sara Lee’s photography is known for capturing candid moments in urban environments.</p>
              <p>sara@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/736x/4d/2e/1a/4d2e1abb877a920c2ae4103c43da029d.jpg" alt="Emma" style={{ width: '100%' }} />
            <div className="container">
              <h2>Emma Green</h2>
              <p className="title">Illustrator</p>
              <p>Emma Green's illustrations blend the worlds of fantasy and realism, creating unique visual narratives.</p>
              <p>emma@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/736x/ad/0e/c8/ad0ec8fe76073546e4bc187e36d50843--writing-characters-male-faces.jpg" alt="David" style={{ width: '100%' }} />
            <div className="container">
              <h2>David Clark</h2>
              <p className="title">Printmaker</p>
              <p>David Clark’s print works are inspired by the natural world and often feature intricate botanical themes.</p>
              <p>david@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.xqNd3jA3kQHhrgAg_TEkpAHaHO&pid=Api&P=0&h=180" alt="Rachel" style={{ width: '100%' }} />
            <div className="container">
              <h2>Rachel White</h2>
              <p className="title">Mixed Media Artist</p>
              <p>Rachel White blends photography, sculpture, and painting to create thought-provoking art installations.</p>
              <p>rachel@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.pinimg.com/736x/55/4e/fd/554efdefe2969245d76019173b5ffc44.jpg" alt="Liam" style={{ width: '100%' }} />
            <div className="container">
              <h2>Liam Carter</h2>
              <p className="title">Glass Artist</p>
              <p>Liam Carter specializes in contemporary glass art, with a focus on fluid forms and light interaction.</p>
              <p>liam@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Artists;
