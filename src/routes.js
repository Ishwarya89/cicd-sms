import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const StudentDetails = React.lazy(() => import('./views/Studentmanagement/StudentDetails'))
const AddStudent = React.lazy(() => import('./views/Studentmanagement/AddStudent'))
const EditStudent = React.lazy(() => import('./views/Studentmanagement/EditStudent'))
const Staffmanagement = React.lazy(() => import('./views/Staffmanagement/Staffmanagement'))
const AddStaff = React.lazy(() => import('./views/Staffmanagement/AddStaff'))
const EditStaff = React.lazy(() => import('./views/Staffmanagement/EditStaff'))
const Tcwithdrawal = React.lazy(() => import('./views/Tcwithdrawal/Tcwithdrawal'))
const Tcwithinfo = React.lazy(() => import('./views/Tcwithdrawal/Tcwithinfo'))
const ClassSection = React.lazy(() => import('./views/ClassSection/ClassSection'))
const Feesstructure = React.lazy(() => import('./views/Feesstructure/Feesstructure'))
const AddFees = React.lazy(() => import('./views/Feesstructure/AddFees'))
const EditFees = React.lazy(() => import('./views/Feesstructure/EditFees'))
const Promotion = React.lazy(() => import('./views/Promotion/Promotion'))
const PromotionDetails = React.lazy(() => import('./views/Promotion/PromotionDetails'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/Studentmanagement', name: 'StudentDetails', element: StudentDetails },
  { path: '/AddStudent', name: 'AddStudent', element: AddStudent },
  { path: '/EditStudent/:id', name: 'EditStudent', element: EditStudent },
  { path: '/Staffmanagement', name: 'Staffmanagement', element: Staffmanagement },
  { path: '/AddStaff', name: 'AddStaff', element: AddStaff },
  { path: '/EditStaff', name: 'EditStaff', element: EditStaff },
  { path: '/Tcwithdrawal', name: 'Tcwithdrawal', element: Tcwithdrawal },
  { path: '/Tcwithinfo', name: 'Tcwithinfo', element: Tcwithinfo },
  { path: '/ClassSection', name: 'ClassSection', element: ClassSection },
  { path: '/Feesstructure', name: 'Feesstructure', element: Feesstructure },
  { path: '/AddFees', name: 'AddFees', element: AddFees },
  { path: '/EditFees', name: 'EditFees', element: EditFees },
  { path: '/Promotion', name: 'Promotion', element: Promotion },
  { path: '/PromotionDetails', name: 'PromotionDetails', element: PromotionDetails },
]

export default routes
