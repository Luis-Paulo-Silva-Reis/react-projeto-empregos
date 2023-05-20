import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "./UserContext";
import LogoutButton from "./LogoutButton";
import PersonalInfo from "./PersonalInfo";
import ProfessionalHistory from "./ProfessionalHistory";
import Skills from "./Skills";
import PreviousProjects from "./PreviousProjects";
import "../styles/ProtectedPage.css";
import Header from "./Header";
import Footer from "./Footer";

const ProtectedPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = Cookies.get("Authorization");
        const response = await axios.get(
          "https://talentsync.click:8080/protected",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProtectedData();
  }, [setUser]);

  const handleLogout = () => {
    Cookies.remove("Authorization");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="profile-class-buttons">
          <LogoutButton handleLogout={handleLogout} />
          <br />
          <Link to="/jobsposting">
            <button className="job-posting-btn">Registrar vagas</button>
          </Link>
        </div>
        <hr />

        <div className="profile-container">
          <div className="profile-photo">
            <img
              src="https://avatars.githubusercontent.com/u/48827159?v=4"
              alt="Foto de Perfil"
            />
          </div>

          <PersonalInfo
            name={user?.name || "Nome não encontrado"}
            email={user?.email || "Email não encontrado"}
            location={user?.location || "Localização não encontrada"}
          />

          <ProfessionalHistory
            experience={user?.experience || "Experiência não encontrada"}
            previousCompanies={
              user?.previousCompanies || "Empresas anteriores não encontradas"
            }
          />
          <Skills
            skills={user?.skills || ["HTML", "CSS", "JavaScript", "React"]}
          />
          <PreviousProjects
            projects={
              user?.projects || [
                "Projeto 1: Website corporativo para XYZ Company",
                "Projeto 2: Aplicativo mobile para ABC Inc.",
              ]
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProtectedPage;
