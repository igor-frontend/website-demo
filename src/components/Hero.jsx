import './Hero.css';
import data from '../pages/cv.json'; // Ensure this path is correct

const { name, summary2 ,location_short} = data.basics;

function handleClick(event) {
    event.preventDefault();
}

function Hero() {
    const handlePrint = () => {
        window.print();
    };
    return (
        <main>
            <h1>{name}</h1>
            <section>
                <h2>Hello there, I am <em className="green">Igor,</em> a passionate <em className="red">Frontend Developer</em> specializing in Javascript, HTML, CSS, and <em className="blue">React.js</em>.</h2>
                <img id="img"src="/foto.webp" alt="My photo" />
            </section>
            <section id="email">
                <textarea id="text-box" readonly>igorcamponotus@gmail.com</textarea>
                <a className="a"  target="_blank" href="https://github.com/igor-helloworld" >GitHub</a>
                <button onClick={handlePrint} className="a" id="button">Print cv</button>

            </section>
            <section id="location">
                <h3 className="h3">{location_short}</h3>
            </section>
            <section id="experience">
                <h1 id="h1">Experience</h1>
            </section>
            <section id="timeline">
                <div className="timeline">
                    <ul>
                        <li>
                            <span> August 2023</span>
                            <div className="content">
                                <h3>Freelance</h3>
                                <p>
                                    <em className="blue">I tried my best</em> making a web for a customer,he liked it.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span> February 2024 </span>
                            <div className="content">
                                <h3>Freelance</h3>
                                <p>
                                    The same customer asked me for making better the website I accepted and he liked it so much more.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span><em className="green"> Now</em></span>
                            <div className="content">
                                <h3>Learning</h3>
                                <p>
                                    Learning all I can to make the best solutions and smiles possible.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
            <section id="education">
                <h1>Education</h1>
            </section>
            <div className="data">
                <h2>2015-<em className="red">Now</em></h2>
                <h3 className="h3">Bilingual Primary School Passed with Honours.2015-2024.</h3>
                <h3 className="h3">Cambridge Official English Test, B2.2024.</h3>
                <h3 className="h3">Kodland programming lesson route.Online lessons.</h3>
                <h3 className="h3">Private English.Online Lessons.</h3>
                <h3 className="h3">Kodland web programming lesson route.Online lessons.</h3>
                <h3 className="h3">Private Swedish.Lessons Online.</h3>
                <h3 className="h3">Secondary Education Cervantes Institute.</h3>
            </div>
            <section id="skills">
                <h1>Skills</h1>
            </section>
            <div id="knowledge">
                <a href="#" onClick={handleClick} className="a">Python</a>
                <a href="#" onClick={handleClick} className="a">HTML</a>
                <a href="#" onClick={handleClick} className="a">CSS</a>
                <a href="#" onClick={handleClick} className="a">JavaScript</a>
                <a href="#" onClick={handleClick} className="a">React.js</a>
                <a href="#" onClick={handleClick} className="a">Flask</a>
            </div>
            <section id="services">
                <h1>Services</h1>
            </section>
            <div id="offered">
                <a href="#" onClick={handleClick} className="a">Code &lt;/&gt;</a>
                <a href="#" onClick={handleClick} className="a">Translation ABC</a>
                <a href="#" onClick={handleClick} className="a">Design ☻</a>
            </div>
            <section id="proyects">
                <h1>Projects</h1>
            </section>
            <div id="portfolio">
                <img  className="img"src="/portfolio.webp"></img>
                <h1>Last portfolio</h1>
                <p>
                    My last <em className="green">portfolio</em> is one of my projects.
                </p>

            </div>
            <div className="responsive">
                <img  className="img"src="/responsive.webp"></img>
                <h1>Responsive web template</h1>
                <p>
                    A simple template <em className="red">responsive</em> website available on my <a target="_blank"href="https://github.com/igor-helloworld/simplistic-HTML5-responsive-web-Design"id="link">github.</a>
                </p>

            </div>
            <footer>
                Almost all rights reserved,based in Bartosz Jarocki design
            </footer>

        </main>
        
    );
}

export default Hero;
