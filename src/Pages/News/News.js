import React from 'react';

import { Row, Col } from 'react-bootstrap';
import './News.styles.scss';

import mainLogo from '../../Images/Open_House_Prishtina.png';
import news_1 from '../../Images/News_1.png';
import news_2 from '../../Images/News_2.png';

const News = () => (
   <>
      <Row className="mainSection">
         <Col sm={12}>
            <img src={mainLogo} alt="Open House Prishtina" />
         </Col>

         <Col sm={12}>
            <p className="date">11.06.2018</p>
         </Col>
         <Col md={6}>
            <p className="textWrapper">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </Col>
         <Col md={6}>
            <p className="textWrapper">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
         </Col>

         <Col sm={12} className="socialMedia">
            <span><a href="#" rel="noopener">Facebook</a></span>
            <span><a href="#" rel="noopener">Instagram</a></span>
            <span><a href="#" rel="noopener">Youtube</a></span>
         </Col>

         <hr />
      </Row>

      <Row className="relatedNews-section">
         <Col sm={12}>
            <h3>Related News</h3>
         </Col>
         <Col sm={12}>
            <div className="images">
               <img src={news_1} alt="Open House Prishtina" />
               <img src={news_2} alt="Open House Prishtina" />
            </div>
         </Col>

         <Col md={6}>
            <div className="contactUs-wrapper">
               <h3>Contact Us</h3>

               <p>Str. Ahmet Krasniqi, Arberia</p>
               <p>10000 Pristina, Kosovo</p>
               <p>+383 49 123 456</p>
               <p>info@archides.com</p>
               <p className="viewOnMap"><a href="#" rel="noopener">View on map</a></p>
            </div>
         </Col>

         <Col md={6}>
            <div className="followUs-wrapper">
               <h3>Follow Us</h3>

               <ul>
                  <li><a href="#" rel="noopener">Facebook</a></li>
                  <li><a href="#" rel="noopener">Instagram</a></li>
                  <li><a href="#" rel="noopener">Youtube</a></li>
               </ul>

               <p>archides @2018</p>
            </div>
         </Col>
      </Row>
   </>
)

export default News;