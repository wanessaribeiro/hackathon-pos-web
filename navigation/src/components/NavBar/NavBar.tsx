//import { useNavigate } from "react-router";
import "./NavBar.css";
import box from "./../../domain/assets/package.png";
import inventory from "./../../domain/assets/inventory.png";
import warehouse from "./../../domain/assets/warehouse.png";
import trolley from "./../../domain/assets/trolley.png";

export default function NavBar() {
  //const navigate = useNavigate();
  const navItems = [
    { value: "/products", label: "Produtos", img: box },
    { value: "/products", label: "Inventario", img: inventory },
    { value: "/inventary", label: "Vendas", img: warehouse },
    { value: "/services", label: "Encomendas", img: trolley },
  ];

  return (
    <nav className="nav-bar-body">
      <ul className="nav-ul">
        {navItems.map((item, index) => {
          return (
            <li key={index} className="nav-bar-item" onClick={() => {}}>
              {item.label} <img src={item.img} className="nav-icon" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
