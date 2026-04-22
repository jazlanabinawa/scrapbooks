import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);
  
  // State untuk Timer
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  // Array pura-pura untuk grid foto Captcha (ganti path src dengan foto aslimu)
  const captchaImages = [
    { id: 1, src: 'ian2.jpeg', correct: true },
    { id: 2, src: 'f4.jpeg', correct: false },
    { id: 3, src: 'ian1.jpeg', correct: true },
    { id: 4, src: 'f2.jpeg', correct: false },
    { id: 5, src: 'ian3.jpeg', correct: true },
    { id: 6, src: 'f3.jpeg', correct: false },
  ];

  const handleCellClick = (id) => {
    if (selectedCells.includes(id)) {
      setSelectedCells(selectedCells.filter(cellId => cellId !== id));
    } else {
      setSelectedCells([...selectedCells, id]);
    }
  };

  const handleVerify = () => {
    // Di sini kita bisa buat logika ketat, tapi untuk romansa, 
    // asal dia klik sesuatu kita loloskan saja, atau langsung setIsVerified(true)
    setIsVerified(true);
  };

  // Logika Timer
  useEffect(() => {
    // GANTI TANGGAL JADIAN DI SINI (Tahun-Bulan-Tanggal)
    const startDate = new Date('2025-11-22T00:00:00'); 

    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      if (diff > 0) {
        setTimeLeft({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / 1000 / 60) % 60),
          s: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mobile-container">
      {!isVerified ? (
        // ================= CAPTCHA SCREEN =================
        <div className="captcha-screen">
          <div className="captcha-box">
            <div className="captcha-header">
              <span>Prove you are Abelva. Select image with</span>
              <h2>My Girl</h2>
              <span>If there are none, click skip</span>
            </div>
            
            <div className="captcha-grid">
              {captchaImages.map((img) => (
                <div 
                  key={img.id} 
                  className={`captcha-cell ${selectedCells.includes(img.id) ? 'selected' : ''}`}
                  onClick={() => handleCellClick(img.id)}
                >
                  {/* Gunakan tag img aslinya nanti: <img src={img.src} alt="captcha" /> */}
                <img 
                    src={img.src} 
                    alt="captcha" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              ))}
            </div>

            <div className="captcha-footer">
              <div style={{ fontSize: '20px', color: '#666' }}>↻ 🎧 ℹ️</div>
              <button className="captcha-btn" onClick={handleVerify}>SKIP</button>
            </div>
          </div>
        </div>
      ) : (
        // ================= MAIN CONTENT =================
        <div className="main-content">
          
          {/* Scrapbook Collage */}
          <div className="collage-container">
            {/* --- FOTO BACKGROUND (Tambahan) --- */}
            {/* <img className="deco p4" src="/foto-bg1.png" alt="bg" /> */}
            <img className="deco p7" src="foto-bg2.png" alt="bg" />
            {/* Mesin tik ditaruh paling belakang (di atas urutan kodenya) */}
            <img className="deco p4" src="mesintik.png" alt="typewriter" />
            

            {/* --- FOTO UTAMA --- */}
            <div className="polaroid p1">
              <img src="foto1.jpeg" alt="us" />
            </div>
            <div className="polaroid p2">
              <img src="foto2.jpeg" alt="us" />
            </div>
            <div className="polaroid p3">
              <img src="foto3.jpeg" alt="us" />
            </div>
            {/* Jaring laba-laba */}
            <img className="deco p5" src="jaring.png" alt="spiderweb" />
            <img className="deco p8" src="jepit.png" alt="spiderweb" />
            {/* Tulisan ditaruh di sini supaya efeknya menimpa ujung foto polaroid */}
            <img className="deco p6" src="tulisan.png" alt="love quote" />
           
          </div>

          {/* Judul & Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="title-dear">Dear<br/>Abelva</div>
            <div className="badges">
              <div className="badge-red">22</div>
              <div className="badge-blue">04</div>
            </div>
          </div>

          {/* Surat Pendek */}
          <div className="handwriting">
            every little things you do, from the way you smile to the way you talk, just makes my heart so full. i love how we can laugh about smallest things and how even in the quiet moments, there's a kind of magic between us. you make me feel like i'm exactly where i'm supposed to be, and i can't imagine my life without you in it.
            <br/><br/>
            i love you more than words can express, and i can't wait to spend forever with you.
          </div>

          <div className="scrapbook-section">
            <h2 className="happy-month-title">Happy 5 Month</h2>
            <img src="scrapbook.png" alt="Scrapbook Memories" className="scrapbook-image" />
          </div>

          {/* Timer Section */}
          <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <div className="timer-pill">our time together</div>
            <div className="timer-display">
              <div className="timer-unit">
                {String(timeLeft.d).padStart(2, '0')}
                <span className="timer-label">D</span>
              </div>
              <span>:</span>
              <div className="timer-unit">
                {String(timeLeft.h).padStart(2, '0')}
                <span className="timer-label">H</span>
              </div>
              <span>:</span>
              <div className="timer-unit">
                {String(timeLeft.m).padStart(2, '0')}
                <span className="timer-label">M</span>
              </div>
              <span>:</span>
              <div className="timer-unit">
                {String(timeLeft.s).padStart(2, '0')}
                <span className="timer-label">S</span>
              </div>
            </div>
          </div>

          {/* Maroon Section (Akhir) */}
          <div className="maroon-section">
            <div className="heart-top">🤍</div>
            
            <div className="maroon-text">
              I want to thank you for being the most wonderful dream i almost touched. I want to thank you for showing me that the most amazing human being can come into your life and change it in ways you never imagined.
              <br/><br/>
              Thank you for making me realise that people like you exist — kind, genuine souls who feel like sunshine on the darkest day of the year. People everywhere they go. Thank you for teaching me that angels exist in human form and the luckiest individuals are those who meet them.
            </div>

            <div className="photo-grid-bottom">
              <img src="image.png" alt="memories" />
              <img src="imagee.jpeg" alt="memories" />
            </div>

            <div style={{ overflow: 'hidden', paddingBottom: '20px' }}>
              <div className="signature">With love, Jazlan.</div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;