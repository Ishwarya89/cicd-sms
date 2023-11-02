import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const StudentDetails = React.lazy(() => import('./views/Studentmanagement/StudentDetails'))
const Add = React.lazy(() => import('./views/Studentmanagement/Add'))
const Staffmanagement = React.lazy(() => import('./views/Staffmanagement/Staffmanagement'))
const AddStaff = React.lazy(() => import('./views/Staffmanagement/AddStaff'))
const EditStaff = React.lazy(() => import('./views/Staffmanagement/EditStaff'))
const Tcwithdrawal = React.lazy(() => import('./views/Tcwithdrawal/Tcwithdrawal'))
const Tcwithinfo = React.lazy(() => import('./views/Tcwithdrawal/Tcwithinfo'))
const ClassSection = React.lazy(() => import('./views/ClassSection/ClassSection'))
const Feesstructure = React.lazy(() => import('./views/Feesstructure/Feesstructure'))
const AddFees = React.lazy(() => import('./views/Feesstructure/AddFees'))
const EditFees = React.lazy(() => import('./views/Feesstructure/EditFees'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/Studentmanagement', name: 'StudentDetails', element: StudentDetails },
  { path: '/Add', name: 'Add', element: Add },
  { path: '/Staffmanagement', name: 'Staffmanagement', element: Staffmanagement },
  { path: '/AddStaff', name: 'AddStaff', element: AddStaff },
  { path: '/EditStaff', name: 'EditStaff', element: EditStaff },
  { path: '/Tcwithdrawal', name: 'Tcwithdrawal', element: Tcwithdrawal },
  { path: '/Tcwithinfo', name: 'Tcwithinfo', element: Tcwithinfo },
  { path: '/ClassSection', name: 'ClassSection', element: ClassSection },
  { path: '/Feesstructure', name: 'Feesstructure', element: Feesstructure },
  { path: '/AddFees', name: 'AddFees', element: AddFees },
  { path: '/EditFees', name: 'EditFees', element: EditFees },
]

export default routes
