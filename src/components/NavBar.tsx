export default function NavBar() {
  return (
    <header className="layout__menu w-full py-[3.5rem] px-[3rem] ">
      <nav className="menu__navbar w-full flex item-center justify-between">
        <ul className="nav__list flex">
          <li className="nav__item">
            <p className="nav__title font-medium">Inicio</p>
          </li>
          <li className="nav__item">
            <p className="nav__title font-medium">Actuaciones Urbanisticas</p>
          </li>
          <li className="nav__item">
            <p className="nav__title font-medium">Conflictos</p>
          </li>
          <li className="nav__item">
            <p className="nav__title font-medium">Acontecimientos noticiosos</p>
          </li>
        </ul>
        <ul className="nav__list flex">
          <li className="nav__item">
            <p className="text-font-color font-light">santiago8628@gmail.com</p>
          </li>
          <li className="nav__item">
            <p className="nav__title font-semibold">Iniciar Sesion</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
