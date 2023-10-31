import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./SharedLayout.styled.jsx";
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Loader } from "../Loader/Loader.jsx";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Container>
  );
};
export default SharedLayout;
