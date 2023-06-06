import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "../styles/Main_Layout_component.css";
import CardDetail from "./CardDetail";

function MainLayoutComponent() {
  return (
    <div className="main">
      <Header />
      <div className="Main_layout_area">
        {/*
        <Aside>
          <Nav />
        </Aside>
          */}
        <Main></Main>
       
      </div>
      <Footer />
      {/* <ToggleForm></ToggleForm>  */}
    </div>
  );
}

export default MainLayoutComponent;
