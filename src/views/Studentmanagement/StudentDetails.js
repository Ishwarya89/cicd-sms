/* eslint-disable react/no-unescaped-entities */
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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CCol,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const StudentDetails = () => {
  const navigate = useNavigate()
  const [offset] = useState(0)
  const [limit] = useState(10)

  function gotoAddStudent() {
    navigate('/AddStudent')
  }

  const [visible, setVisible] = useState(false)
  const [records, setRecords] = useState([])
  const [setFilteredRecords] = useState([])
  const [formData, setFormData] = useState({
    academic_year: '',
    standard: '',
    section: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFilter = () => {
    // Filter data based on academic year, standard, and section
    const filtered = records.filter((record) => {
      return (
        (!formData.academic_year || record.academic_year === formData.academic_year) &&
        (!formData.standard || record.standard === formData.standard) &&
        (!formData.section || record.section === formData.section)
      )
    })
    setFilteredRecords(filtered)
  }

  const handleDownload = () => {
    // Simulate downloading CSV data (replace with your actual API endpoint)
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const requestData = {
      academic_year: formData.academic_year,
      standard: formData.standard,
      section: formData.section,
    }

    axios.get(apiUrl, { params: requestData }).then((response) => {
      const csvData = response.data.map((record) => {
        // Format your data into CSV format
        return `${record.id}, ${record.title}, ${record.body}`
      })

      // Create a CSV blob and initiate download
      const csvBlob = new Blob([csvData.join('\n')], { type: 'text/csv' })
      const url = window.URL.createObjectURL(csvBlob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'student_data.csv'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })
  }

  useEffect(() => {
    const fetchStudentData = () => {
      axios
        .get(`http://100.20.130.76:8000/api/student/?offset=${offset}&limit=${limit}/`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setRecords(res.data.results)
        })
        .catch((err) => console.error(err))
    }

    fetchStudentData()
  }, [offset, limit, formData])

  const handleDelete = (recordId) => {
    const updatedRecords = records.filter((record) => record.id !== recordId)
    setRecords(updatedRecords)
  }

  return (
    <div>
      <CCardBody>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content align-items-center">
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
            <CButton
              style={{
                marginRight: 5,
                marginBottom: 5,
                backgroundColor: '#1985AC',
                color: 'white',
                border: 'none',
              }}
              onClick={() => setVisible(!visible)}
              onChange={handleFilter}
            >
              Download
            </CButton>
            <CModal
              visible={visible}
              onClose={() => setVisible(false)}
              aria-labelledby="LiveDemoExampleLabel"
            >
              <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle id="LiveDemoExampleLabel">Download CSV</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm className="row gy-2 gx-3 align-items-center" style={{ paddingBottom: '2%' }}>
                  <CCol xs="auto">
                    <CFormLabel
                      htmlFor="academic_year"
                      style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
                    >
                      Academic Year
                    </CFormLabel>
                    <CFormSelect
                      id="academic_year"
                      name="academic_year"
                      value={formData.academic_year}
                      onChange={handleInputChange}
                    >
                      <option value="">Academic Year</option>
                      <option value="2017-2018">2017-2018</option>
                      <option value="2018-2019">2018-2019</option>
                      <option value="2019-2020">2019-2020</option>
                      <option value="2020-2021">2020-2021</option>
                      <option value="2021-2022">2021-2022</option>
                      <option value="2022-2023">2022-2023</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel
                      htmlFor="standard"
                      style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
                    >
                      Standard
                    </CFormLabel>
                    <CFormSelect
                      id="standard"
                      name="standard"
                      value={formData.standard}
                      onChange={handleInputChange}
                    >
                      <option value="">Select class</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel
                      htmlFor="section"
                      style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
                    >
                      Section
                    </CFormLabel>
                    <CFormSelect
                      id="section"
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                    >
                      <option value="">Select section</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                      <option value="G">G</option>
                      <option value="H">H</option>
                      <option value="I">I</option>
                    </CFormSelect>
                  </CCol>
                </CForm>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={handleDownload}>
                  Download
                </CButton>
              </CModalFooter>
            </CModal>
          </div>
          <div className="d-flex justify-content align-items-center">
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
                <CIcon icon={icon.cilSearch} size="l" /> Search
              </CButton>
            </CInputGroup>
          </div>
        </div>
      </CCardBody>
      <CCard style={{ height: '27rem', marginBottom: '5rem' }}>
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
            <CTableRow style={{ borderBottom: '5px', color: 'primary' }}>
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
                  />
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCard>
      <div className="d-flex align-items-center " style={{ width: 100 }}>
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
              <span style={{ borderRadius: 0, backgroundColor: 'white', color: '#1985AC' }}>1</span>
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
          className="d-flex justify-content align-items-center "
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
