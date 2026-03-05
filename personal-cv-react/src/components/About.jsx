import Card from "./Card";
import profileImg from '../images/profile.jpg'; 
function About() {
  return (
    <Card title="About Me">
      <p>I am a good Student.</p>
      
      <img src={profileImg} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} /> 
    </Card>
  );
}

export default About;