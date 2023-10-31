import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const StudentDetails = React.lazy(() => import('./views/Studentmanagement/StudentDetails'))
const Add = React.lazy(() => import('./views/Studentmanagement/Add'))
const Tcwithdrawal = React.lazy(() => import('./views/Tcwithdrawal/Tcwithdrawal'))
const Tcwithinfo = React.lazy(() => import('./views/Tcwithdrawal/Tcwithinfo'))
const ClassSection = React.lazy(() => import('./views/ClassSection/ClassSection'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/Studentmanagement', name: 'StudentDetails', element: StudentDetails },
  { path: '/Add', name: 'Add', element: Add },
  { path: '/Tcwithdrawal', name: 'Tcwithdrawal', element: Tcwithdrawal },
  { path: '/Tcwithinfo', name: 'Tcwithinfo', element: Tcwithinfo },
  { path: '/ClassSection', name: 'ClassSection', element: ClassSection },
]

export default routes
