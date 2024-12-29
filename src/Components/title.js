import React, { Component } from 'react'
import '../App.css'
export class Title extends Component {
  render() {
    return (
      <>
      <div>
        <h1>Welcome to my website</h1>
      </div>
      <header>
                <div className="container">
                    <div className="logo">
                        <h1>NewsPortal</h1>
                    </div>
                    {/* <nav>
                        <ul className="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">World</a></li>
                            <li><a href="/">Politics</a></li>
                            <li><a href="/">Sports</a></li>
                            <li><a href="/">Technology</a></li>
                            <li><a href="/">Entertainment</a></li>
                        </ul>
                    </nav> */}
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="container">
                        <h2>Breaking News: Stay Updated</h2>
                        <p>Get the latest headlines and real-time updates from around the world.</p>
                        <button className="btn">Read More</button>
                    </div>
                </section>

                <section className="news">
                    <div className="container">
                        <h2>Latest News</h2>
                        <div className="news-grid">
                            <article className="news-item">
                                <img src="image1.jpg" alt="News 1" />
                                <h3>Headline 1</h3>
                                <p>Short description of the news article.</p>
                                <a href="/news/1">Read More</a>
                            </article>
                            <article className="news-item">
                                <img src="image2.jpg" alt="News 2" />
                                <h3>Headline 2</h3>
                                <p>Short description of the news article.</p>
                                <a href="/news/2">Read More</a>
                            </article>
                            <article className="news-item">
                                <img src="image3.jpg" alt="News 3" />
                                <h3>Headline 3</h3>
                                <p>Short description of the news article.</p>
                                <a href="/news/3">Read More</a>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="newsletter">
                    <div className="container">
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Stay updated with the latest news delivered directly to your inbox.</p>
                        <form action="/subscribe" method="post">
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit" className="btn">Subscribe</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer>
                <div className="container">
                    <p>&copy; 2024 NewsPortal. All Rights Reserved.</p>
                </div>
            </footer>

</>
    )
  }
}
export default Title



























// import React from 'react';
// import './styles.css';

// const HomePage = () => {
//     return (
//         <>
//             <header>
//                 <div className="container">
//                     <div className="logo">
//                         <h1>NewsPortal</h1>
//                     </div>
//                     <nav>
//                         <ul className="nav-links">
//                             <li><a href="/home">Home</a></li>
//                             <li><a href="/world">World</a></li>
//                             <li><a href="/politics">Politics</a></li>
//                             <li><a href="/sports">Sports</a></li>
//                             <li><a href="/technology">Technology</a></li>
//                             <li><a href="/entertainment">Entertainment</a></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>

//             <main>
//                 <section className="hero">
//                     <div className="container">
//                         <h2>Breaking News: Stay Updated</h2>
//                         <p>Get the latest headlines and real-time updates from around the world.</p>
//                         <button className="btn">Read More</button>
//                     </div>
//                 </section>

//                 <section className="news">
//                     <div className="container">
//                         <h2>Latest News</h2>
//                         <div className="news-grid">
//                             <article className="news-item">
//                                 <img src="image1.jpg" alt="News 1" />
//                                 <h3>Headline 1</h3>
//                                 <p>Short description of the news article.</p>
//                                 <a href="/news/1">Read More</a>
//                             </article>
//                             <article className="news-item">
//                                 <img src="image2.jpg" alt="News 2" />
//                                 <h3>Headline 2</h3>
//                                 <p>Short description of the news article.</p>
//                                 <a href="/news/2">Read More</a>
//                             </article>
//                             <article className="news-item">
//                                 <img src="image3.jpg" alt="News 3" />
//                                 <h3>Headline 3</h3>
//                                 <p>Short description of the news article.</p>
//                                 <a href="/news/3">Read More</a>
//                             </article>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="newsletter">
//                     <div className="container">
//                         <h2>Subscribe to Our Newsletter</h2>
//                         <p>Stay updated with the latest news delivered directly to your inbox.</p>
//                         <form action="/subscribe" method="post">
//                             <input type="email" placeholder="Enter your email" required />
//                             <button type="submit" className="btn">Subscribe</button>
//                         </form>
//                     </div>
//                 </section>
//             </main>

//             <footer>
//                 <div className="container">
//                     <p>&copy; 2024 NewsPortal. All Rights Reserved.</p>
//                 </div>
//             </footer>
//         </>
//     );
// };

// export default HomePage;
