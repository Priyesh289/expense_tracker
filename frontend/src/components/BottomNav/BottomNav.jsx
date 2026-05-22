import React from 'react'
import './BottomNav.css'

import { NavLink } from 'react-router'

import { PiNotebookLight } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineAnalytics } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className='containerNav'>

      <div className='bottomNav'>

        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'navIcon activeNav' : 'navIcon'
          }
        >
          <RiDashboardLine />
        </NavLink>

        <NavLink
          to='/transactions'
          className={({ isActive }) =>
            isActive ? 'navIcon activeNav' : 'navIcon'
          }
        >
          <PiNotebookLight />
        </NavLink>

        <NavLink
          to='/add-transaction'
          className={({ isActive }) =>
            isActive ? 'navIcon activeNav' : 'navIcon'
          }
        >
          <IoIosAddCircleOutline />
        </NavLink>

        <NavLink
          to='/analytics'
          className={({ isActive }) =>
            isActive ? 'navIcon activeNav' : 'navIcon'
          }
        >
          <MdOutlineAnalytics />
        </NavLink>

      </div>

    </div>
  )
}

export default BottomNav