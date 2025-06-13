import { NavLink, Outlet } from "react-router";

export default function HelpLayout() {

  return (
    <div id="help-layout">
      <h1>Help</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam? Non architecto expedita sequi quod quasi, sint perspiciatis, quaerat culpa dolore alias molestiae obcaecati at assumenda fugiat. Quam, pariatur odio!</p>
      <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">Faq</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}