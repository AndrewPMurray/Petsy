import './About.css'


function About() {
    return (
        <div id="about">
            <div className="aboutMeHead">
                <h3>What is Petsy?</h3>
                <p> Read out wonderfully weird story</p>
            </div>
            <div className="trio">
                <div>
                    <h4>A community doing good</h4>
                    <p>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.</p>
                </div>
                <div>
                    <h4>Support independent creators</h4>
                    <p>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                </div>
                <div>
                    <h4>Peace of mind</h4>
                    <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                </div>
            </div>
            <div className="questions">
                <h4>Have a question? Well, we've got some answers.</h4>
                <a href="https://github.com/AndrewPMurray/Petsy" target="_blank" rel="noreferrer">
                    <button id="gitButton" >Go to Git Hub</button></a>

            </div>
        </div >
    )
};


export default About;