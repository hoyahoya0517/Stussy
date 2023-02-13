import { Outlet } from "react-router-dom";
import "./App.css";
import AllWrap from "./components/AllWrap/AllWrap";
import Nav from "./components/Nav/Nav";
import { UserContextProvider } from "./context/UserContext";
import { NavContextProvider } from "./context/NavContext";
import Footer from "./components/Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <NavContextProvider>
          <Nav />
          <div className="navMargin">
            <Outlet />
            <Footer />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </NavContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
