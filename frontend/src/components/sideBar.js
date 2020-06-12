

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Svg from './svg';




import userAvatar from '../assets/images/user.png';
import shortLogo from '../assets/images/short-logo.png';
import arenaSports from '../assets/images/arena_sports.png';
import dsv from '../assets/images/dsv.png';
import seafood from '../assets/images/seafood.png';
import firestar from '../assets/images/firestar.png';
import zetaBank from '../assets/images/zeta_bank.png';
import FT from '../assets/images/FT.png';
import PT from '../assets/images/PT.png';


class SideBar extends Component {

  render() {
    return (
      
      <div className="bg-white shadow rounded-xlg p-5 sidebar">

      <div>
        <h1 className="h4"><img src={shortLogo} className="rounded-circle" alt="bell" />All employees</h1>
      </div>
      <label className="mt-4 muted-text text-uppercase">project</label>
      <ul className="list-group list-group-flush">
        <li className="list-group-item border-0 pl-0 d-flex align-items-center">
          <div className="pr-2">
            <img src={arenaSports} className="rounded-circle sidebar-img" alt="bell" />
          </div>
          <div>
            Arena Sports
          </div>
        </li>
        <li className="list-group-item border-0 pl-0 d-flex align-items-center">
          <div className="pr-2">
            <img src={dsv} className="rounded-circle sidebar-img" alt="bell" />
          </div>
          <div>
            DSV
          </div>
        </li>
        <li className="list-group-item border-0 pl-0 d-flex align-items-center">
          <div className="pr-2">
            <img src={seafood} className="rounded-circle sidebar-img" alt="bell" />
          </div>
          <div>
            Seafood Mall
          </div>
        </li>
        <li className="list-group-item border-0 pl-0 d-flex align-items-center">
          <div className="pr-2">
            <img src={firestar} className="rounded-circle sidebar-img" alt="bell" />
          </div>
          <div>
            FireStar
          </div>
        </li>
        <li className="list-group-item border-0 pl-0 d-flex align-items-center">
          <div className="pr-2">
            <img src={zetaBank} className="rounded-circle sidebar-img" alt="bell" />
          </div>
          <div>
            Zeta Bank
          </div>
        </li>
      </ul>

      <label className="mt-4 muted-text text-uppercase">status</label>
      <ul className="list-group list-group-flush">
        <li className="list-group-item border-0 pl-0 d-flex align-items-center">
          <div className="pr-2">
            <img src={FT} className="rounded-circle sidebar-img" alt="bell" />
          </div>
          <div>
            Full time
          </div>
        </li>
        <li className="list-group-item border-0 pl-0 d-flex align-items-center">
          <div className="pr-2">
            <img src={PT} className="rounded-circle sidebar-img" alt="bell" />
          </div>
          <div>
            Part time
          </div>
        </li>
      </ul>

      <div className="text-center position-relative mt-4">
        <button className="btn btn-secondary btn-block btn-lg rounded-pill px-5 py-3 position-absolute add-project-btn">add project</button>
      </div>
    </div>
    );
  }
}

export default SideBar;