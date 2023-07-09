// import NavBar from "./components/NavBar";
// import Body from "./components/Body";
// import CardHome from "./components/CardHome";
// import Shama from "./components/weeks/Shama";
// import YakSham from "./components/weeks/YakSham";
import Routea from "./components/Routes/Route";
import { Provider } from "react-redux";
import { store } from "./components/DarkMode/store";

function App() {
  return (
    <div className="App " >
      
      
        {/* <Body /> */}
         {/* <NavBar /> */}
        {/* <Shama /> */}
        {/* <YakSham /> */}
        <Provider store={store}>
          <div>
            <Routea />
          </div>
        </Provider>
        {/* <CardHome />  */}

    </div>
  );
}

export default App;
