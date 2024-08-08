import { Button } from "flowbite-react";
import { NavLink, Outlet } from "react-router-dom";
import { CardItem } from "./Card";

function App() {
  return (
    <>
      <div>
        <NavLink className="bg-">item</NavLink>
        <NavLink className="bg-">item 2</NavLink>
        <NavLink className="bg-">item 3</NavLink>
      </div>
      <Outlet />
      <CardItem />
      <Button>hello </Button>
    </>
  );
}

export default App;
