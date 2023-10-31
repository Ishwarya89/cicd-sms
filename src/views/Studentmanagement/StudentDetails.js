// import React from 'react'
// import { AiOutlineOrderedList } from 'react-icons/ai'
// import { BiPlusMedical } from 'react-icons/bi'
// import { FaRegEdit, FaSearch, FaUpload } from 'react-icons/fa'
// import { RiDeleteBin6Line } from 'react-icons/ri'
// import DataTable from 'react-data-table-component'
// import { useNavigate, Link } from 'react-router-dom'
// import Popup from 'reactjs-popup'
// import { useParams } from 'react-router'

// const customStyles = {
//   headRow: {
//     style: {
//       borderTopStyle: 'solid',
//       borderTopWidth: '1px',
//       borderTopColor: 'rgba(0,0,0,.12)',
//       borderBottomStyle: 'solid',
//       borderColor: 'rgba(0,0,0,.17)',
//       borderBottomWidth: '3px',
//       minHeight: '35px',
//       backgroundColor: ' #fff',
//     },
//   },
//   headCells: {
//     style: {
//       fontSize: '13px',
//       fontWeight: '600',
//       textTransform: 'uppercase',
//       width: '100px',
//     },
//   },
//   cells: {
//     style: {
//       fontSize: '12px',

//       width: '100px',
//     },
//   },
//   rows: {
//     style: {
//       border: '5px black',
//       minHeight: '35px',

//       '&:nth-child(even)': {
//         backgroundColor: ' rgba(0,0,0,.08)',
//       },
//       '&:nth-child(odd)': {
//         backgroundColor: ' rgba(0,0,0,0)',
//       },
//       '&:hover': { backgroundColor: 'rgba(0,0,0,.08)' },
//     },
//   },
// }

// const StudentDetails = () => {
//   const navigateer = useNavigate()

//   function gotoHome() {
//     navigateer('/')
//   }

//   function gotoProduct1() {
//     navigateer('/Add')
//   }

//   const { id } = useParams()
//   console.log(id)

//   const columns = [
//     {
//       name: 'id',
//       selector: (row) => row.id,
//       sortable: true,
//     },
//     {
//       name: 'emis_number',
//       selector: (row) => row.emis_number,
//       sortable: true,
//     },
//     {
//       name: 'student_name',
//       selector: (row) => row.student_name,
//       sortable: true,
//     },
//     {
//       name: 'date_of_joining',
//       selector: (row) => row.date_of_joining,
//       sortable: true,
//     },
//     {
//       name: 'admission_number',
//       selector: (row) => row.admission_number,
//       sortable: true,
//     },
//     {
//       name: 'Actions',
//       cell: (row) => (
//         <div className="icons">
//           <Link to={`/StudentEdit/${row.id}`}>
//             <div className="icon1">
//               <FaRegEdit />
//             </div>
//           </Link>
//           <Popup
//             trigger={
//               <i className="icon2">
//                 <RiDeleteBin6Line />
//               </i>
//             }
//           >
//             {(close) => (
//               <div>
//                 <div>Delete this item?</div>
//                 <button>Yes</button>
//                 <button onClick={close}>No</button>
//               </div>
//             )}
//           </Popup>
//         </div>
//       ),
//     },
//   ]

//   return (
//     <div className="product1">
//       <div className="studentlink">
//         <div className="link1">
//           <p onClick={gotoHome} className="homelink">
//             Home
//           </p>
//           <p>/</p>
//           <p>StudentDetails</p>
//         </div>
//       </div>
//       <div className="wholecart1">
//         <div className="productcart1">
//           <div className="cartcontainer1">
//             <div className="cont11">
//               <button className="btn11 " onClick={gotoProduct1}>
//                 <i>
//                   <BiPlusMedical />
//                 </i>{' '}
//                 Add
//               </button>
//               <button className="upload">
//                 <i>
//                   <FaUpload />
//                 </i>{' '}
//                 Upload
//               </button>
//             </div>

//             <div className="searchcont1">
//               <input type="search" className="searchbtn3" placeholder="Enter website" />{' '}
//               <div className="searchicon">
//                 <i>
//                   <FaSearch />
//                 </i>
//                 search
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="studentdatatable">
//         <p className="studenttitle">
//           {' '}
//           <AiOutlineOrderedList /> Student Details
//         </p>
//         <div className="StudenttableBody">
//           <DataTable columns={columns} customStyles={customStyles} striped={true}></DataTable>
//         </div>
//         <div className="row">
//           <div className="col">
//             <div className="pagi">
//               <ul className="pagination">
//                 <li className="page-items">«</li>
//                 <li className="page-item disabled">⟨</li>
//                 <li className="page-item active">1</li>
//                 <li className="page-item">2</li>
//                 <li className="page-item">3</li>
//                 <li className="page-item">4</li>
//                 <li className="page-item">5</li>
//                 <li className="page-item">⟩</li>
//                 <li className="page-items1">»</li>
//               </ul>

//               <select name="limitPerPage" className="form-control">
//                 <option value="10">10</option>
//                 <option value="20">20</option>
//                 <option value="50">50</option>
//                 <option value="100">100</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StudentDetails
import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CCardBody,
  CInputGroup,
  CFormInput,
  CButton,
  CTable,
  CTableBody,
  CPagination,
  CPaginationItem,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCard,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
const StudentDetails = () => {
  const navigateer = useNavigate()
  function gotoProduct1() {
    navigateer('/Add')
  }
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <CCardBody>
        <div className="d-flex justify-content-between ">
          <div className="d-flex justify-content align-items-center  ">
            <CButton
              style={{ marginRight: 5, marginBottom: 5 }}
              color="info"
              href="#"
              onClick={gotoProduct1}
            >
              <CIcon icon={icon.cilUserFollow} size="l" />
              Add
            </CButton>
            <CButton
              style={{ marginRight: 5, marginBottom: 5 }}
              color="info"
              onClick={() => setVisible(!visible)}
            >
              <CIcon icon={icon.cilArrowThickFromBottom} size="l" />
              Upload
            </CButton>
          </div>
          <div className="d-flex  justify-content align-items-center ">
            <CInputGroup className="mb-1" shape="rounded-0">
              <CFormInput
                type="text"
                shape="rounded-0"
                style={{ borderRadius: 0 }}
                placeholder="Enter Website"
              />
              <CButton color="info" shape="rounded-0">
                <CIcon icon={icon.cilSearch} size="l" /> search
              </CButton>
            </CInputGroup>
          </div>
        </div>
      </CCardBody>
      <CCard style={{ height: '27rem', marginBottom: '2rem ' }}>
        <CTable striped>
          <CTableHead>
            <CTableRow color="info">
              <CTableHeaderCell scope="row">
                <CIcon icon={icon.cilMenu} size="l" style={{ marginRight: 5 }} />
              </CTableHeaderCell>
              <CTableHeaderCell scope="row"></CTableHeaderCell>
              <CTableHeaderCell scope="row"></CTableHeaderCell>
              <CTableHeaderCell scope="row"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableHead>
            <CTableRow style={{ borderBottom: 5, color: 'primary' }}>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Thornton</CTableDataCell>
              <CTableDataCell>@fat</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
              <CTableDataCell>@twitter</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">4</CTableHeaderCell>
              <CTableDataCell colSpan="2">Larry </CTableDataCell>
              <CTableDataCell>@twitter</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">5</CTableHeaderCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Thornton</CTableDataCell>
              <CTableDataCell>@fat</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">6</CTableHeaderCell>
              <CTableDataCell colSpan="2">Larry Bird</CTableDataCell>
              <CTableDataCell>@twitter</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">5</CTableHeaderCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Thornton</CTableDataCell>
              <CTableDataCell>@fat</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">5</CTableHeaderCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Thornton</CTableDataCell>
              <CTableDataCell>@fat</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCard>
      <div className="d-flex  align-items-center  " style={{ width: 100 }}>
        <CCardBody className="pagination">
          <CPagination
            aria-label="Page navigation example"
            className="pagination"
            style={{ marginBottom: 0, borderRadius: 0 }}
          >
            <CPaginationItem aria-label="Previous" style={{ borderRadius: 0 }}>
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            <CPaginationItem aria-label="Previous">
              <span aria-hidden="true">&lsaquo;</span>
            </CPaginationItem>
            <CPaginationItem active>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem aria-label="Next">
              <span aria-hidden="true">&rsaquo;</span>
            </CPaginationItem>
            <CPaginationItem aria-label="Next" style={{ borderRadius: 0 }}>
              <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
          </CPagination>
        </CCardBody>
        <select
          className="d-flex  justify-content align-items-center "
          style={{ marginLeft: 5, marginBottom: 15, height: 34 }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  )
}

export default StudentDetails
