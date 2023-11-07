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
  CForm,
  CRow,
  CPagination,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CCol,
  CFormSelect,
  CFormLabel,

} from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const Staffmanagement = () => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [records, setRecords] = useState([])
  const [filterRecords, setFilterRecords] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [departmentFilter, setDepartmentFilter] = useState(''); // Store department filter
  const [languageFilter, setLanguageFilter] = useState('');
  const navigate = useNavigate()
  function gotoAddStaff() {
    navigate('/AddStaff')
  }
  function gotoStaffEdit() {
    navigate('/StaffEdit')
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
  const handleDepartmentFilterChange = (event) => {
    setDepartmentFilter(event.target.value);
    filterData(event.target.value, languageFilter);
  };

  // Handle language filter change
  const handleLanguageFilterChange = (event) => {
    setLanguageFilter(event.target.value);
    filterData(departmentFilter, event.target.value);
  };

  // Function to filter data based on department and language filters
  const filterData = (selectedDepartment, selectedLanguage) => {
    const newData = filterRecords.filter((row) => {
      // Check if the selected department matches or it's empty
      const departmentMatch = !selectedDepartment || row.name === selectedDepartment;
      
      // Check if the selected language matches or it's empty
      const languageMatch = !selectedLanguage || row.language === selectedLanguage;

      return departmentMatch && languageMatch;
    });

    setRecords(newData);
  };
  return (
    <div>
      <CCardBody>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content align-items-center">
            <CButton
              style={{ marginRight: 5, marginBottom: 5, backgroundColor: '#1985AC' }}
              color="info"
              onClick={gotoAddStaff}
            >
              <CIcon icon={icon.cilUserFollow} size="l" />
              Add Staff
            </CButton>
            <CButton style={{ marginRight: 5, marginBottom: 5, backgroundColor: '#1985AC' }} color="info"onClick={() => setVisible(!visible)}>
            <CIcon icon={icon.cilVerticalAlignBottom} size="l" />Download</CButton>
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
                 Department
              </CFormLabel>
              <CFormSelect
                id="departmentFilter"
                value={departmentFilter}
                onChange={handleDepartmentFilterChange}
                style={{ width: '150px', height: '30px', borderRadius: 0, fontSize: '14px' }} 
                
              >
                <option></option>
                
              <option value="Leanne Graham">Leanne Graham</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
                
              </CFormSelect>
          </CCol>
          <CCol xs={3}  style={{marginLeft:75}}>
          <CFormLabel
                htmlFor="inputState"
                style={{  fontWeight: '500', fontSize: '16px' }}
              >
                 Language
              </CFormLabel>
              <CFormSelect
                id="languageFilter"
                value={languageFilter}
                onChange={handleLanguageFilterChange}
              >
                <option value=""></option>
                <option value="Leanne Graham">Leanne Graham</option>
                <option value="English">English</option>
                <option value="Maths">Maths</option>
                
              </CFormSelect>
          </CCol>
          </CForm></CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={handleDownload}>
          <CIcon icon={icon.cilVerticalAlignBottom} size="l" />
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
          <i className="fa fa-align-justify"></i> Staff Details
        </CCardHeader>
        <CCardBody>
          <CTable responsive hover size="sm" striped>
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Staff Name</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Designation</th>
                <th scope="col">Department</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.current_class}</td>
                  <td>{record.current_section}</td>
                  <td>{record.name}</td>
                  <td>
                    <CIcon
                      icon={icon.cilPencil}
                      size="l"
                      style={{ marginRight: 8, color: 'rgb(15, 176, 235)' }}
                      onClick={gotoStaffEdit}
                    />
                    <CIcon icon={icon.cilTrash} size="l" style={{ marginRight: 8, color: 'red' }} />
                  </td>
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

export default Staffmanagement
