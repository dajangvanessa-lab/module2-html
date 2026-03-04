import profileImg from '../images/profile.jpg';

function About() {
  return (
    <section className="card"> 
      <h2>About Me</h2>
      <img src={profileImg} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
      
      <p>I am a hardworking student.</p>
      <p>Email: <a href="mailto:vanessada758@gmail.com">vanessada758@gmail.com</a><br />
      GitHub: <a href="https://github.com/dajangvanessa-lab" target="_blank">github.com</a></p>
    </section>
  );
}

export default About;