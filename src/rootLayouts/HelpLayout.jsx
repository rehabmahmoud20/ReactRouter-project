import { NavLink,Outlet } from "react-router-dom";

export const HelpLayout = () => {
  return (
    <div>
      <p>help us</p>
      <NavLink to="/help/faq">Faq</NavLink>
      <NavLink to="/help/contact">Contact</NavLink>
      <Outlet/>
    </div>
  );
};
