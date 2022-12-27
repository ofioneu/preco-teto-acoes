import React, {useState} from "react";
import { Row, Col, Spin } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./header.css";

export default function HeaderPages() {

  const [activePage, setActivePage] = useState(null) ;

function handleActive(event) {
  if (!event.target.classList.value.includes("active")) {
    event.target.classList.toggle('active') ;
    if (activePage)
      activePage.classList.remove("active") ;
    setActivePage(event.target) ;
  }
}
  

  const currentRoute = useHistory().location.pathname.toLowerCase();
  console.log(currentRoute)
  return (
    <header>
      <Row>
       
          <div className="logo">
            <Link className="logo-item" to="/celling-price">
              <h1>P</h1>
            </Link>
          </div>
        
      
          <div className="tab-bar">
            <Link
              className={currentRoute.includes("celling-price") ? "tab active" : "tab"}
              active
              to="/celling-price"
              onClick={handleActive}
            >
              Preço Teto
            </Link>
            <Link
              className={
                currentRoute.includes("privacy-pollicy") ? "tab active" : "tab"
              }
              active
              to="/privacy-pollicy"
              onClick={handleActive}
            >
              Política de Privacidade
            </Link>
          </div>
       
      </Row>
    </header>
  );
}
