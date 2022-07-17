import { useEffect, useRef } from 'react';
import '../css_files/projects.css';

// color-adjust => print-color-adjust in bootstrap.min.css (./node_modules/bootstrap/dist/css/bootstrap.min.css)

export default function Projects() {

    const innerRef = useRef<any>(null);

    var items = document.querySelectorAll(".timeline li");
    const isElementInView = (el: Element) => {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const callback = () => {
        console.log("callback");
        for (var i = 0; i < items.length; i++) {
            if (isElementInView(items[i])) {
                items[i].classList.add("in-view");
            }
            if (!isElementInView(items[i]) && items[i].classList.contains("in-view")) {
                items[i].classList.remove("in-view");
            }
        }
        console.log("cllback");
    }

    useEffect(() => {
        console.log("cllbac");
        const inner = innerRef.current;
        inner.addEventListener("scroll", callback);
        console.log("cllba");
    }, []);

    return (
        <>
            <div>
            </div>
            <div>
                <h1 style={{
                    textAlign: 'center',
                }}>Projects</h1>
            </div>
            <section className="timeline" ref={innerRef}>
            <ul className='ul'>
                <li className='outL'>
                <div>
                    <h2><a href="https://github.com/cs128-2021a/final-project-team-matrix">Chess Board</a></h2>
                    <h4>
                        <ul>
                            <li>Assisted a team of 4 to develop a multiplayer online chess game using C++ and SQL</li>
                            <li>Implemented user case of storing results and chess pieces using SQLite</li>
                            <li>Hosted the game online using httplib and tested using curl</li>
                        </ul>
                    </h4>
                </div>
                </li>
                <li className='outL'>
                <div>
                    <h2><a href="https://github.com/SauravChittal/Pokemon-WebScrapping-Discord-Bot">Pokemon WebScrapping Discord Bot</a></h2>
                    <h4>
                        <ul>
                            <li>Developed a Discord Bot using Discord.py and Selenium in Python</li>
                            <li>Used Selenium to scrape data, and competitively analyze Pokemon in it’s generation and tier</li>
                            <li>Allowed the user to interface with the utility through Discord.py</li>
                            <li>The bot also stores and returns the generations in which the Pokémon had a competitive analysis</li>
                        </ul>
                    </h4>
                </div>
                </li>
                <li className='outL'>
                <div>
                    <h2><a href="https://github.com/SauravChittal/Hydrapedia.git">Hydrapedia</a></h2>
                    <h4>
                        <ul>
                            <li>Developed a Pokémon API using ExpressJS, and scraped data using Selenium and JSON</li>
                            <li>Implemented a frontend interface using ReactJS and CSS to interact with backend</li>
                        </ul>
                    </h4>
                </div>
                </li>
                <li className='outL'>
                <div>
                    <h2><a href='https://github.com/SauravChittal/Wikispeedia'>WikiSpeedia</a></h2>
                    <h4>
                        <ul>
                            <li>Developed a Wikipedia speedrun finder by implementing graphs in C++</li>
                            <li>Implemented a Python Script to scrape Wikipedia Pages</li>
                            <li>Calculated the shortest path between two pages using breadth first search</li>
                        </ul>
                    </h4>
                </div>
                </li>
                {/* <li className='outL'>
                <div>
                    <h2>Sheep Bot</h2>
                    <h4>
                        Test <a href="https://github.com/SauravChittal/sheep_bot">H</a>
                    </h4>
                </div>
                </li>
                <li className='outL'>
                <div>
                    <h2>Personal Website</h2>
                    <h4>
                        Test <a href="https://www.google.com/">H</a>
                    </h4>
                </div>
                </li> */}
            </ul>
            </section>
        </>
    )
}