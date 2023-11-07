import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCursor, cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Administration',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Student Management',
        to: '/Studentmanagement',
      },
      {
        component: CNavItem,
        name: 'Staff Managment',
        to: '/Staffmanagement',
      },
      {
        component: CNavItem,
        name: 'Attendance',
        to: '/AttendanceDetails/AttendanceDetails',
      },
      {
        component: CNavItem,
        name: 'Promotion',
        to: '/Promotion',
      },
      {
        component: CNavItem,
        name: 'Tcwithdrawal',
        to: '/Tcwithdrawal',
      },
      {
        component: CNavItem,
        name: 'Class Section',
        to: '/ClassSection',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Accounts',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Fees Structure',
        to: '/Feesstructure',
      },
      {
        component: CNavItem,
        name: 'Fees Collection',
        to: '/FeesCollection',
      },
    ],
  },
]

export default _nav
