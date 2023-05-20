// Skills.js
const Skills = ({ skills }) => {
    return (
      <div className="profile-section">
        <h2>Habilidades</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Skills;
  