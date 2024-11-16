class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header>
            <nav class="navbar">
                <a href="index.html">
                    <img class="logo" src="images/logo.png" alt="">
                </a>
                <div class="toggle-btn">
                    <div class="icon"></div>
                </div>
                <ul class="menu">
                    <li class="submenu-wrapper">
                        <a href="#">Our Services</a>
                        <ul class="submenu">
                            <li><a href="services.html">Services Provided</a></li>
                            <li><a href="client-reviews.html">Client Reviews</a></li>
                            <li><a href="estimation-of-our-services.html">Get A Free Quotation</a></li>
                        </ul>
                    </li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li class="submenu-wrapper">
                        <a href="#">About Us</a>
                        <ul class="submenu">
                            <li><a href="about-us-info.html">Company Information</a></li>
                            <li><a href="career-opportunities.html">Career Opportunities</a></li>
                        </ul>
                    </li>
                    <li><a href="support.html">Support</a></li>
                </ul>
                <div class="nav-utility">
                    <input class="nav-search" type="text" placeholder="Search...">
                    <a class="search-btn"><i class="material-icons">search</i></a>
                    <a><i class="material-icons">mail</i></a>
                </div>
            </nav>
        </header>      
        `;
    }

}

customElements.define('header-component', Header);