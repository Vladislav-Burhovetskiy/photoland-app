import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { useCartIsOpen } from "../../hooks/useCartIsOpen";
import SearchForm from "../SearchForm/SearchForm";
import Cart from "../Cart/Cart";
import CategoryNavMobile from "../CategoryNavMobile/CategoryNavMobile";
import Logo from "../../images/logo.png";
import "./Header.scss";

export default function Header() {
  const { isOpen, setIsOpen } = useCartIsOpen();

  const openCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container">
      <FiMenu />
      <CategoryNavMobile />
      <Link to={"/"}>
        <div className="header-logo">
          <img src={Logo} alt="Logo Photoland" />
        </div>
      </Link>
      <SearchForm />
      <p>sign-in</p>
      <RxAvatar />
      <div onClick={openCart} className="header-bag">
        <SlBag />
      </div>
      <div className={`header-cart ${isOpen && "show"}`}>
        <Cart />
      </div>
    </header>
  );
}
