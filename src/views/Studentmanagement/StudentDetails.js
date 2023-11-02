import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import * as icon from '@coreui/icons'

import {
  CCardBody,
  CInputGroup,
  CFormInput,
  CButton,
  CTable,
  CCardHeader,
  CTableBody,
  CPagination,
  CTableDataCell,
  CTableHead,
  CPaginationItem,
  CTableHeaderCell,
  CTableRow,
  CCard,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom/dist'
const StudentDetails = () => {
  const navigateer = useNavigate()
  const [offset] = useState(0)
  const [limit] = useState(10)
  function gotoAddStudent() {
    navigateer('/AddStudent')
  }

  const [visible, setVisible] = useState(false)
  const [records, setRecords] = useState([])
  const [setFilterRecords] = useState([])

  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    const fetchStudentData = () => {
      axios
        .get(`http://100.20.130.76:8000/api/student/?offset=${offset}&limit=${limit}/`, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          setRecords(res.data.results)
          setFilterRecords(res.data.results)
        })
        .catch((err) => console.error(err))
    }
    fetchStudentData()
  }, [offset, limit, setFilterRecords])
  const handleDelete = (recordId) => {
    // Filter the records to exclude the one with the specified ID
    const updatedRecords = records.filter((record) => record.id !== recordId)
    setRecords(updatedRecords)
  }
  return (
    <div>
      <CCardBody>
        <div className="d-flex justify-content-between ">
          <div className="d-flex justify-content align-items-center  ">
            <CButton
              style={{
                marginRight: 5,
                marginBottom: 5,
                backgroundColor: '#1985AC',
                color: 'white',
                border: 'none',
              }}
              onClick={gotoAddStudent}
            >
              <CIcon icon={icon.cilUserFollow} size="l" />
              Add
            </CButton>
            <CButton
              style={{
                marginRight: 5,
                marginBottom: 5,
                backgroundColor: '#1985AC',
                color: 'white',
                border: 'none',
              }}
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
              <CButton
                shape="rounded-0"
                style={{
                  backgroundColor: '#1985AC',
                  color: 'white',
                  border: 'none',
                }}
              >
                <CIcon icon={icon.cilSearch} size="l" /> search
              </CButton>
            </CInputGroup>
          </div>
        </div>
      </CCardBody>
      <CCard style={{ height: '27rem', marginBottom: '5rem ' }}>
        <CCardHeader
          component="h5"
          className="d-flex align-items-center"
          style={{ backgroundColor: 'rgb(198, 197, 192)', borderRadius: 0 }}
        >
          <CIcon icon={icon.cilMenu} size="xl" />
          StudentDetails
        </CCardHeader>
        <CTable striped>
          <CTableHead>
            <CTableRow style={{ borderBottom: 5, color: 'primary' }}>
              <CTableHeaderCell scope="col">id</CTableHeaderCell>
              <CTableHeaderCell scope="col">EMIS Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Date Of Joining</CTableHeaderCell>
              <CTableHeaderCell scope="col">Admission Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {records.map((record, index) => (
              <CTableRow key={index}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{record.emis_number}</CTableDataCell>
                <CTableDataCell>{record.student_name}</CTableDataCell>
                <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                <CTableDataCell>{record.admission_number}</CTableDataCell>
                <CTableDataCell>
                  <Link to={`/EditStudent/${record.id}`}>
                    <CIcon
                      icon={icon.cilPencil}
                      size="l"
                      style={{ marginRight: 8, color: 'rgb(15, 176, 235)' }}
                    />
                  </Link>
                  <CIcon
                    icon={icon.cilTrash}
                    size="l"
                    style={{ marginRight: 8, color: 'red' }}
                    onClick={() => handleDelete(record.id)}
                    // Pass the record's ID to the delete function
                  />
                </CTableDataCell>
              </CTableRow>
            ))}
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
              <span
                aria-hidden="true"
                style={{ borderRadius: 0, backgroundColor: 'white', color: '#1985AC' }}
              >
                &laquo;
              </span>
            </CPaginationItem>
            <CPaginationItem aria-label="Previous">
              <span
                aria-hidden="true"
                style={{ borderRadius: 0, backgroundColor: 'white', color: '#1985AC' }}
              >
                &lsaquo;
              </span>
            </CPaginationItem>
            <CPaginationItem>
              <span style={{ borderRadius: 0, backgroundColor: 'white', color: '#1985AC' }}>1</span>{' '}
            </CPaginationItem>
            <CPaginationItem>
              <span style={{ borderRadius: 0, backgroundColor: 'white', color: '#1985AC' }}>2</span>
            </CPaginationItem>
            <CPaginationItem>
              <span style={{ borderRadius: 0, backgroundColor: 'white', color: '#1985AC' }}>3</span>
            </CPaginationItem>
            <CPaginationItem aria-label="Next">
              <span
                aria-hidden="true"
                style={{ borderRadius: 0, backgroundColor: 'white', color: '#1985AC' }}
              >
                &rsaquo;
              </span>
            </CPaginationItem>
            <CPaginationItem
              aria-label="Next"
              style={{ borderRadius: 0, backgroundColor: 'white', color: '#1985AC' }}
            >
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
