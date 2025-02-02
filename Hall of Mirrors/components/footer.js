class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <style>
            svg{
                fill: white;
            }

            svg:hover{
                fill: orange;
            }

            footer{
                font-size: 14px;
                background: rgb(0,0,0);
                background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,59,68,1) 50%, rgba(0,0,0,1) 100%);   
            }
            .footer-container{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
            }
            .footer-links {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                color: #fff;
                width: 40%;
                margin: 20px;

            }

            .footer-links > ul {
                list-style-type: none;
            }

            .footer-links > ul li a {
                text-decoration: none;
                color: lightgray;
            }
            .footer-links > ul li h3 {
                margin: 5px;
            }

            .footer-links > ul li a:hover {
                text-decoration: underline;
                color: #ff8a00;
            }

            .footer-subscription {
                margin: 15px;

            }
            .footer-subscription input{
                padding: 5px 40px 5px 15px;
                background-color: lightgray;
                border: 1px solid rgba(0, 0, 0, 0.25);
                border-radius: 10px;
                width: 50%;
            }
            .footer-socialmedia {
                display: inline-flex;
                align-items: center;
                color: #fff;
            }
            .media-icons{
                display: flex;
                flex-direction: row;
            }



        </style>
        <footer>
            <div class="footer-container">
                <div class="footer-links">
                    <ul>
                        <li><h3>Our Services</h3></li>
                        <li><a href="services.html">Services Provided</a></li>
                        <li><a href="client-reviews.html">Client Reviews</a></li>
                        <li><a href="estimation-of-our-services.html">Get a Free Quotation</a></li>
                    </ul>
                    <ul>
                        <li><h3>About Us</h3></li>
                        <li><a href="about-us-info.html">Company Information</a></li>
                        <li><a href="career-opportunities.html">Career Opportunities</a></li>
                    </ul>
                    <ul>
                        <li><h3>Other</h3></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="support.html">Support</a></li>
                    </ul>
                </div>
                <div class="footer-socialmedia">
                    <div class="footer-subscription">
                        <input type="text" placeholder="E-mail">
                        <button>Subscribe</button>
                    </div>
                    <div class="media-icons">
                    Follow Us On: 
                    <a class="socialmedia-icons" href="#">
                        <div style="width: 20px; height: 20px; margin: 3px;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h98.2V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480h129c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </div>
                    </a>
                    <a class="socialmedia-icons" href="#">
                        <div style="width: 20px; height: 20px; margin: 3px;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </div>
                    </a>
                    <a class="socialmedia-icons" href="#">
                        <div style="width: 20px; height: 20px; margin: 3px;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"/></svg>
                        </div>
                    </a>
                    <a class="socialmedia-icons" href="#">
                        <div style="width: 20px; height: 20px; margin: 3px;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
            <p style="color: white; padding: 10px">&copy;Hall of Mirrors</p>
        </footer>
        
        
        
        
        
        
        `;
    }
}
customElements.define('footer-component', Footer);