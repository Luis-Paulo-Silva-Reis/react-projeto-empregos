// ProfessionalHistory.js
const ProfessionalHistory = ({ experience, previousCompanies }) => {
    return (
      <div className="profile-section">
        <h2>Histórico Profissional</h2>
        <p>Experiência: {experience}</p>
        <p>Empresas anteriores: {previousCompanies}</p>
      </div>
    );
  };
  
  export default ProfessionalHistory;
  