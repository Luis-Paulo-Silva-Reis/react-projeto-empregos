import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import Aside from "./Aside";
import ToggleForm from './FormToggle'

import "../styles/Main_Layout_component.css";

function MainLayoutComponent() {
  return (
    <div className="main">
      <Header />
      <div className="Main_layout_area">
        <Aside>
          <Nav />
        </Aside>
        <Main>opa ssss</Main>
      </div>
      <Footer />
      <ToggleForm></ToggleForm>
    </div>
  );
}

export default MainLayoutComponent;
