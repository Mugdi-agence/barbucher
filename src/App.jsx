import './App.scss'
import { useRef } from 'react';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-50px"})
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>

    <div className="burger" onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <nav className={`mobile ${navOpen ? 'open' : ''}`}>
        <div className="logo">Bar<span>Bucher</span></div>
        <ul>
          <a href="#s1">Accueil</a>
          <a href="#s2">Services</a>
          <a href="#s3">À propos</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>

      <nav>
        <div className="logo">Bar<span>Bucher</span></div>
        <ul>
          <a href='#s1'>Accueil</a>
          <a href='#s2'>Services</a>
          <a href='#s3'>A propos</a>
          <a href='#contact'>contact</a>
        </ul>
      </nav>

      <main>
        <section id="s1" className="section section1">
          <div className="left">
            <div className="titles">
            <motion.div className='déose'
            initial={{
              opacity: 0,
              y: -50
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            ><i class="fa-solid fa-check"></i><span>certifié</span></motion.div>
            <div className="intitle">
              <motion.h1
              initial={{
                opacity: 0,
                y: -50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2}}
              >L’Art de la Barbe</motion.h1>
            </div>
            <motion.p
            initial={{
              opacity:0,
              y: -50
            }} animate={{
              opacity:1,
              y: 0
            }} transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: 0.4
            }}
            >Cuius cupiebat incertum aperte ex aperte imperii <br/> pulsatae ut Phoenice et ante populatam templum misisse.</motion.p>
          </div>
          <motion.div  initial={{
              opacity:0,
              y: -50
            }} animate={{
              opacity:1,
              y: 0
            }} transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: 0.6
            }} className="cta-button">
            <button>Prendre Rendez-Vous</button>
            <button>Voir les services</button>
          </motion.div>
          <motion.div initial={{
              opacity:0,
              y: -50
            }} animate={{
              opacity:1,
              y: 0
            }} transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: 0.8
            }} className="avis">
            <div className="text">
              <h6>noté 4.5</h6>
              <p>élus meilleur barbier de france <i class="fa-solid fa-medal"></i></p>
            </div>
            <div className="starset">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </motion.div>
          </div>
          <div className="right">
            <motion.div initial={{
              opacity:0,
              y: -50
            }} animate={{
              opacity:1,
              y: 0
            }} transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: 1
            }} className="img"></motion.div>
          </div>
          
        </section>
        <section id='s2' className="section section2">
          <motion.h1 ref={ref} initial={{
              opacity:0,
              y: -50
            }} animate={ isInView ? {
              opacity:1,
              y: 0
            } : {}} transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}>Nos <span>Services</span></motion.h1>
          <p className='pt'>Des prestations de qualité pour sublimer votre style et prendre soin de vous.</p>
          <div className="flex-cards">
            <div className="cards">
              <h1>Coupe de Cheveux <i class="fa-solid fa-scissors"></i></h1>
              <p>Sollicita omnium tyrannorum suspecta diffluentes Haec ergo sollicita qui diligat nulla deliciis qui potest de.</p>
            </div>
            <div className="cards">
              <h1>Taille de Barbe <i class="fa-solid fa-pen-ruler"></i></h1>
              <p>Sollicita omnium tyrannorum suspecta diffluentes Haec ergo sollicita qui diligat nulla deliciis qui potest de.</p>
            </div>
            <div className="cards">
              <h1>Soin Complet <i class="fa-solid fa-fan"></i></h1>
              <p>Sollicita omnium tyrannorum suspecta diffluentes Haec ergo sollicita qui diligat nulla deliciis qui potest de.</p>
            </div>
          </div>
        </section>
        <section id='s3' className="section section3">
          <div className="leften">
            <div className="emg"></div>
          </div>
          <div className="righten">
            <h1>Notre <span>Histoire</span></h1>
            <p>Utque proeliorum periti rectores primo catervas densas opponunt et fortes, deinde leves armaturas, post iaculatores ultimasque subsidiales acies, si fors adegerit, iuvaturas, ita praepositis urbanae familiae suspensae digerentibus sollicite, quos insignes faciunt virgae dexteris aptatae velut tessera data castrensi iuxta vehiculi frontem omne textrinum incedit: huic atratum coquinae iungitur ministerium, dein totum promiscue servitium cum otiosis plebeiis de vicinitate coniunctis: postrema multitudo spadonum a senibus in pueros desinens, obluridi distortaque lineamentorum conpage deformes, ut quaqua incesserit quisquam cernens mutilorum hominum agmina detestetur memoriam Samiramidis reginae illius veteris, quae teneros mares castravit omnium prima velut vim iniectans naturae, eandemque ab instituto cursu retorquens, quae inter ipsa oriundi crepundia per primigenios seminis fontes tacita quodam modo lege vias propagandae posteritatis ostendit.</p>
            <div className="sequencial">
              <span><i class="fa-solid fa-medal"></i>Barbier certifié</span>
              <span><i class="fa-solid fa-star"></i>Produit premium</span>
              <span><i class="fa-solid fa-face-smile"></i>Satisfaction garantie</span>
          </div>
          </div>
          
        </section>
        <section id="contact" className="section contact-section">
  <h1>Nous <span>Contacter</span></h1>
  <p className="pt">Vous avez une question, un besoin ou vous souhaitez simplement prendre rendez-vous ? Contactez-nous via le formulaire ou nos coordonnées ci-dessous.</p>

  <div className="contact-container">
    <div className="contact-info">
      <h2>Informations</h2>
      <p><i className="fa-solid fa-location-dot"></i> 123 Rue du Barbier, 75000 Paris</p>
      <p><i className="fa-solid fa-phone"></i> 01 23 45 67 89</p>
      <p><i className="fa-solid fa-envelope"></i> contact@barbucher.fr</p>
      <p><i className="fa-solid fa-clock"></i> Lun - Sam : 9h00 - 19h00</p>
      <div className="socials">
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
      </div>
    </div>

    <div className="contact-form">
      <h2>Formulaire de contact</h2>
      <form>
        <input type="text" name="name" placeholder="Nom complet" required />
        <input type="email" name="email" placeholder="Adresse e-mail" required />
        <input type="text" name="subject" placeholder="Sujet" />
        <textarea name="message" rows="5" placeholder="Votre message..." required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>

  <div className="contact-map">
    <div className="map-placeholder">
      <iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  width="100%" 
  height="300" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
    </div>
  </div>
</section>

      </main>
      <footer>© 2025 Mugdi. Tous droits réservés.</footer>
    </>
  );
}

export default App;
