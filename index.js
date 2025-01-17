function Hamburger(props) {
    return (
      <div className="hamburger" onClick={props.onClick}>
        <i className="fa fa-bars" />
        <i className="fa fa-close" />
      </div>
    );
  }
  

function Menu(){
    return(
        <div className = "menu">
            <a href ="#">
                <i className = "fa fa-home" />
            </a>
        </div>
    )
}

function ProfilePhoto(){
    return (
            // <img src = "./img/profile-photo.jpg"/>
        <div className = "profile-photo">
            <a href = "./img/profile-photo.jpg" download = "">
                <i className = "fa fa-cloud-arrow-down" />
            </a>
        </div>
    )
}

function UserInfo(){
    return(
        <div className = "user-info">
            <h1>Isaac Adebayo</h1>
            <h3>Frontend Developer</h3>
            <a href = "#">isaacadebayo.website</a>
            <div className = "link-buttons">
                <button className = "link-btn i">
                    <i className = "fa fa-envelope"/> Email
                </button>
                <button className = "link-btn ii">
                    <i className = "fa-brands fa-linkedin" /> LinkedIn
                </button>
            </div>
        </div>
    )
}

function About(){
    return(
        <div className = "about">
            <h2>About</h2>
            <span>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</span>
        </div>
    )
}

function Interests(){
    return(
        <div className = "interests">
            <h2>Interests</h2>
            <span>Gaming. Movies. Reading comments on Youtube. Anime and Manga comics. Marvel Comics. Music Lover. Travel Geek. I really love Food.</span>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            <div className = "social-links">
                <a href = "#">
                    <i className = "fa-brands fa-twitter"/>
                </a>
                <a href = "#">
                    <i className = "fa-brands fa-facebook"/>
                </a>
                <a href = "#">
                    <i className = "fa-brands fa-instagram"/>
                </a>
                <a href = "#">
                    <i className = "fa-brands fa-github"/>
                </a>
            </div>
        </footer>
    )
}

function menuShow(){
    alert("I'm still learning how to handle props in react... its so different from event listeners in javacript and classlist.toggle 😪")
}

function App(){
    return(
        <div className = "container">
            <Hamburger onClick={menuShow} />
            <Menu />
            <ProfilePhoto />
            <UserInfo />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)


// let ham = document.querySelector(".hamburger")

// ham.addEventListener("click", menuShow)
