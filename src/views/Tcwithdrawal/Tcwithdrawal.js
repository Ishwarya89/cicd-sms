/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CCardBody,
  CInputGroup,
  CFormInput,
  CButton,
  CTable,
  CCardHeader,
  CCard,
  CModal,
  CModalBody,
  CModalHeader,
  CForm,
  CModalTitle,
  CCol,
  CFormLabel,
  CFormSelect,
  CRow,
  CModalFooter,
  CPagination,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const Tcwithdrawal = () => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [records, setRecords] = useState([])
  const [filterRecords, setFilterRecords] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    admission_number: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    if (!formData.admission_number) {
      console.error('Admission Number is missing or empty')
      return
    } else {
      const dataToPass = formData.admission_number
      navigate('/Tcwithinfo', { state: { dataToPass } })
    }
  }
  const handleDownload = () => {
    // Simulate downloading CSV data (replace with your actual API endpoint)
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const requestData = {
      
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
    axios
      .get(`https://jsonplaceholder.typicode.com/users`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setRecords(res.data)
        setFilterRecords(res.data)
        setTotalItemCount(res.data.total)
      })
      .catch((err) => console.error(err))
  }, [limit, offset])

  function handleFilter(event) {
    const newData = filterRecords.filter(
      (row) =>
        (row.name &&
          row.name.toLowerCase().includes(event.target.value.toLowerCase())) ||
        (row.admission_number &&
          row.admission_number.toString().toLowerCase().includes(event.target.value.toLowerCase())),
    )
    setRecords(newData)
  }

 
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`)
    setActivePage(pageNumber)
    const newOffset = (pageNumber - 1) * limit
    setOffset(newOffset)
  }

  const onPageLimitChanged = (e) => {
    const newLimit = parseInt(e.target.value, 10)
    setLimit(newLimit)
    setActivePage(1)
    setOffset(0)
  }
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <CCardBody>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content align-items-center">
            <CInputGroup className="mb-1" shape="rounded-0">
              <CFormInput
                type="text"
                shape="rounded-0"
                style={{ borderRadius: 0 }}
                placeholder="Roll Number"
                id="roll_number"
                name="admission_number"
                value={formData.roll_number}
                onChange={handleInputChange}
              />
              <CButton
                shape="rounded-0"
                style={{
                  backgroundColor: '#1985AC',
                  color: 'white',
                  border: 'none',
                }}
                onClick={handleSubmit}
              >
                Submit
              </CButton>
              <CButton shape="rounded-0" style={{ marginLeft: 5,border: 'none', backgroundColor: '#1985AC' }} onClick={() => setVisible(!visible)}>
            <CIcon icon={icon.cilVerticalAlignBottom} size="l" />Download</CButton>
            </CInputGroup>
            <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Download SCV</CModalTitle>
        </CModalHeader>
        <CModalBody> 
        <CForm className="row g-2 "style={{marginLeft: 20,marginRight:20}} >
           
          <CCol xs={3}  style={{marginRight:40,}}>
          <CFormLabel
                htmlFor="inputState"
                style={{  fontWeight: '500', fontSize: '16px' }}
              >
                 Class
              </CFormLabel>
              <CFormSelect
                      id="standard"
                      name="standard"
                      value={formData.standard}
                      onChange={handleInputChange}
                    >
                      <option value=""></option>
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
          <CCol xs={3}  style={{marginLeft:75}}>
          <CFormLabel
                htmlFor="inputState"
                style={{  fontWeight: '500', fontSize: '16px' }}
              >
                 Section
              </CFormLabel>
              <CFormSelect
                      id="section"
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                    >
                      <option value=""></option>
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
          </CForm></CModalBody>
        <CModalFooter>
          <CButton color="secondary" >
          <CIcon icon={icon.cilVerticalAlignBottom} size="l" onClick={handleDownload}/>
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
                onChange={handleFilter}
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
      <CCard>
        <CCardHeader>
          <i className="fa fa-align-justify"></i> Student Details
        </CCardHeader>
        <CCardBody>
          <CTable responsive hover size="sm" striped>
            <thead>
              <tr>
                <th scope="col">Admission No</th>
                <th scope="col">Student Name</th>
                <th scope="col">Class</th>
                <th scope="col">Section</th>
                <th scope="col">Father Name</th>
                <th scope="col">Mother Name</th>
                <th scope="col">Joining Date</th>
                <th scope="col">Withdrawn Date</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.admission_number}</td>
                  <td>{record.name}</td>
                  <td>{record.current_class}</td>
                  <td>{record.current_section}</td>
                  <td>{record.fathers_name}</td>
                  <td>{record.mothers_name}</td>
                  <td>{record.date_of_joining}</td>
                  <td>{record.date_of_withdraw}</td>
                  <td>{record.remarks}</td>
                </tr>
              ))}
            </tbody>
          </CTable>
        </CCardBody>
      </CCard>
      <CRow>
        <div style={{ display: 'flex' }}>
          <CPagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={activePage}
            itemsCountPerPage={limit}
            totalItemsCount={totalItemCount}
            onSelect={handlePageChange}
          />
          <label
            style={{
              textAlign: 'center',
              marginLeft: '10px',
              color: '#000000',
            }}
          ></label>
          <select
            style={{ marginLeft: 5, marginBottom: 15, height: 34 }}
            name="limitPerPage"
            value={limit}
            onChange={onPageLimitChanged}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </CRow>
    </div>
  )
}

export default Tcwithdrawal
