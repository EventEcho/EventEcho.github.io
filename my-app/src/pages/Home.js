import '../App.css';
import './Home.css';
import back1 from '../images/home_back1.png'
import back2 from '../images/home_back2.png'

function Home() {
  return (
    <div className="home">
        <div>
            <img src={back1} alt=""/>
            <img src={back2} alt=""/>
        </div> 
        <div>
            <p className="text">
                A CENTRALIZED PLATFORM<br/>
                TO FIND CONCERT COMPANIONS<br/>
                & BUYING/SELLING<br/>
                TICKETS FOR UCLA STUDENTS<br/>
            </p>
        </div>
    </div>
  );
}

export default Home;