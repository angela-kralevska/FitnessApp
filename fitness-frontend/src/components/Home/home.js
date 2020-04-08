import React from 'react';
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
        {/*
          Caminar by TEMPLATED
          templated.co @templatedco
          Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
      */}
        <title>Caminar by TEMPLATED</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="assets/css/main.css" />
        {/* Header */}
        <header id="header">
        <form className="form-inline mt-2 mt-md-0 ml-3 float-right">
                        <Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"} >Логирај се</Link>
                    </form>
          <div className="logo">
            <a href="/home">
              Биди Фит <span></span>
            </a>
          </div>
        </header>
        {/* Main */}
        <section id="main">
          <div className="inner">
            {/* One */}
            <section id="one" className="wrapper style1">
              <div className="image fit flush">
                <img src="images/pic02.jpg" alt />
              </div>
              <header className="special">
                <h2>Фитнес програми</h2>
                <p>Биди инспирација за другите, биди фит!</p>
              </header>
              <div className="content">
                <p>
                Нашето студио е опремено со професионална опрема од лидерот во фитнес и wellness 
                индустријата Technogym со кој сме во партнерство и сме првото студио со лиценца од 
                Technogym како дел од неговото широко семејство. Програмата во ова студио се 
                изработува од професионален, искусен и обучен кадар кој е целосно посветен кон 
                клиентот за време на вежбањето.{" "}
                </p>
                <p>
                Power Plate ги користи принципите на Acceleration Training за стимулирање на 
                телесниот природен одговор на вибрации. Научните истражувања покажаа дека со 
                користење на Power Plate за краток временски период можат да се зголемат силата
                 и флексибилноста, како и тоа да се обезбедат забележителни подобрувања на 
                 метаболизмот и циркулацијата. Телото мора потсвесно да контрахира различни 
                 мускулни групи, со цел да остане избалансирано во текот на вибрациите што ги 
                 предизвикува Power Plate. Токму оваа константна тензија на мускулите е тоа што 
                 ја прави овааа справа толку ефективна. Тоа што нема никаков притисок и што е 
                 неверојатно нежен со зглобовите и тетивите е погоден за секого.
                </p>
              </div>
            </section>
            {/* Two */}
            <section id="two" className="wrapper style2">
              <header>
                <h2>Дел од нашата опрема</h2>
                <p>Во здраво тело, здрав дух!</p>
              </header>
              <div className="content">
                <div className="gallery">
                  <div>
                    <div className="image fit flush">
                      <a href="images/pic03.jpg">
                        <img src="images/pic03.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="images/pic01.jpg">
                        <img src="images/pic01.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="images/pic04.jpg">
                        <img src="images/pic04.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="images/pic05.jpg">
                        <img src="images/pic05.jpg" alt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Three */}
            <section id="three" className="wrapper">
              <div className="spotlight">
                <div className="image flush">
                  <img src="images/pic06.jpg" alt />
                </div>
                <div className="inner">
                  <h3>Фитнес и бодибилдинг</h3>
                  <p>
                  Располагаме со две сали комплетно опремени со сите кардио и фитнес 
                  справи, како и стручни инструктори кои секогаш се тука за совети и помош при вежбање.
                  </p>
                </div>
              </div>
              <div className="spotlight alt">
                <div className="image flush">
                  <img src="images/pic07.jpg" alt />
                </div>
                <div className="inner">
                  <h3>Сауна</h3>
                  <p>
                  Сауната е супер идеја. Се потите, го ослободувате телото од токсините, а 
                  само седите. Сауната има долга историја. Потекнува од Финска, но тука ја имате 
                  во склоп на нашиот објект достапна со само еден повик и закажување на термин.
                  </p>
                </div>
              </div>
              <div className="spotlight">
                <div className="image flush">
                  <img src="images/pic08.jpg" alt />
                </div>
                <div className="inner">
                  <h3>Продавница за суплементи</h3>
                  <p>
                  Достапни се суплементи од секаков вид, почнувајќи од топачи на масти па 
                  се до суплементи со кои можете да ја зголемите Вашата мускулна маса, да 
                  бидете во топ фитнес облека како и обезбедете се со фитнес акцесорија и тоа се на едно место...
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* Footer */}
        <footer id="footer">
          <div className="container">
            <ul className="icons">
              <li>
                <a href="#" className="icon fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            © Untitled. All rights reserved. Images{" "}
            <a href="https://unsplash.com">Unsplash</a> Design{" "}
            <a href="https://templated.co">TEMPLATED</a>
          </div>
        </footer>
        {/* Scripts */}
      </div>
      

    )
}
export default Home;
