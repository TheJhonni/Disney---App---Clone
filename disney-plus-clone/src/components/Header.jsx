import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="./images/Logo.svg" />
      <NavMenu>
        <a>
          <img src="./images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="./images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="./images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="./images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="./images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="./images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg src="https://media-exp1.licdn.com/dms/image/C4E03AQEgNFJ49Vnc1w/profile-displayphoto-shrink_200_200/0/1642584038544?e=1648684800&v=beta&t=iK02Iics2F6gDj1GDAvbUz-NjwC6FTR9wxIV0UIIy2w" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 40px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 25px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.45px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
