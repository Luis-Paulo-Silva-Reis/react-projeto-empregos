// PreviousProjects.js
const PreviousProjects = ({ projects }) => {
    return (
      <div className="profile-section">
        <h2>Projetos Anteriores</h2>
        {projects.map((project) => (
          <p key={project}>{project}</p>
        ))}
      </div>
    );
  };
  
  export default PreviousProjects;
  