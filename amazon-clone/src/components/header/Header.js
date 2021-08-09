import React from 'react';
import './Header.css';
import { Search, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [ { basket }, dispatch ] = useStateValue();
    return (
        <div className="header">
            {/* Link navigating from Amazon image to Home page */}
            <Link to="/">
                <img className="header__logo" src="https://www.hollywoodreporter.com/wp-content/uploads/2011/09/amazon_logo_a_l.jpg" alt="" />
            </Link>

            <div className="header__search">
                <input className="header__searchinput" placeholder="Search" type="text" />
                <Search className="header__searchicon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionlineone">Hello Quest</span>
                    <span className="header__optionlinetwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionlineone">Returns</span>
                    <span className="header__optionlinetwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionlineone">Your</span>
                    <span className="header__optionlinetwo">Prime</span>
                </div>

                {/* Link navigating from shoppingbasket icon to /checkout page */}
                <Link to="/checkout">
                    <div className="header__optionbasket">
                        <ShoppingBasket />
                        <span className="header__optionlinetwo header__basketcount">{basket?.length}</span>
                        </div>
                </Link>
            </div>
        </div>
  );
}

export default Header;