// PersonalInfo.js
const PersonalInfo = ({ name, email, location }) => {
    return (
      <div className="profile-section">
        <h2>Informações Pessoais</h2>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>Localização: {location}</p>
      </div>
    );
  };
  
  export default PersonalInfo;
  