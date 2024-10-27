import Menus_Icon from "./components/Drawer/menus";
import DatailMenus from "./components/MainPage2/menus.datail";
import RouterComponent from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";

export const data = [
  { id:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
  { id2:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
  { id3:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
  { id4:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
  { id5:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
  { id6:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
  { id7:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
  { id8:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
  { id9:'https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'},
]

function App() {
    return (
        <div className="App"><DatailMenus />
          <RouterComponent />
          <ToastContainer />
          
        </div>
    );
}

export default App;

