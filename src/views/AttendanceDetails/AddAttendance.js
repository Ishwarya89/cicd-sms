/* eslint-disable no-undef */
import { React, useState, useEffect } from 'react'
import * as icon from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import {
  CButton,
  CCardBody,
  CFormSelect,
  CFormLabel,
  CCol,
  CForm,
  CCardHeader,
  CTable,
  CCard,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CRow,
} from '@coreui/react'

const EditAttendance = () => {
  // eslint-disable-next-line no-undef

  const [formData, setFormData] = useState({
    from_class: '',
    from_section: '',
    from_academic_year: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const [errorMessage, setErrorMessage] = useState('')
  const [errorDisplayDuration] = useState(2000)

  function handlesubmit() {
    if (formData.from_academic_year && formData.from_class && formData.from_section) {
      const dataToPass = formData
      navigate('/AddAttendance', { state: { dataToPass } })
    } else {
      if (!formData.from_academic_year) {
        setErrorMessage('Please fill out all required fields before searching.')

        setTimeout(() => {
          setErrorMessage('')
        }, errorDisplayDuration)
      }
      if (!formData.from_class) {
        setErrorMessage('Please fill out all required fields before searching.')
        setTimeout(() => {
          setErrorMessage('')
        }, errorDisplayDuration)
      }
      if (!formData.from_section) {
        setErrorMessage('Please fill out all required fields before searching.')
        setTimeout(() => {
          setErrorMessage('')
        }, errorDisplayDuration)
      }
    }
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setRecords(res.data)
      })
      .catch((err) => console.error(err))
  }, [])
  const [records, setRecords] = useState([])
  return (
    <>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: 0 }}
        >
          <CIcon icon={icon.cilMenu} size="xl" />
          Attendance Info
        </CCardHeader>
        <CCardBody style={{ marginTop: 20 }}>
          <CForm className="row g-3">
            <CCol xs={2} style={{ marginRight: 70, marginLeft: 40 }}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Academic Year*
              </CFormLabel>
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 5 }}
                name="from_academic_year"
                value={formData.academic_year}
                onChange={handleInputChange}
              >
                <option>Select Academic Year</option>
                <option>2017-2018</option>
                <option>2018-2019</option>
                <option>2020-2021</option>
                <option>2021-2022</option>
                <option>2022-2023</option>
              </CFormSelect>
            </CCol>
            <CCol xs={2} style={{ marginRight: 70 }}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Class*
              </CFormLabel>
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 5 }}
                name="from_class"
                value={formData.class}
                onChange={handleInputChange}
              >
                <option>Select Class</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </CFormSelect>
            </CCol>
            <CCol xs={2} style={{ marginRight: 70 }}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Section*
              </CFormLabel>
              <CFormSelect
                style={{ borderRadius: 5 }}
                name="from_section"
                value={formData.section}
                onChange={handleInputChange}
              >
                <option>Select Section</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
              </CFormSelect>
            </CCol>
            <CCol xs={2}>
              <CButton
                type="submit"
                onClick={handlesubmit}
                style={{
                  marginTop: 30,
                  marginLeft: 40,
                  width: 120,
                  backgroundColor: '#1985AC',
                  color: 'white',
                  border: 'none',
                }}
              >
                <CIcon icon={icon.cilSearch} size="l" /> Search
              </CButton>
            </CCol>
            {errorMessage && (
              <div className="ErrorMessage">
                <p className="error-message">{errorMessage}</p>
              </div>
            )}
          </CForm>
        </CCardBody>
      </CCard>
      <CCard>
        <CCard style={{ padding: 20, border: 0 }}>
          <CCard style={{ border: '1px solid #000', padding: 2 }}>
            <CTable striped>
              <CTableHead style={{}}>
                <CTableRow>
                  <CTableHeaderCell scope="col">SNO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Admission Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Section</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Attendance</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {records.map((record, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{record.emis_number}</CTableDataCell>
                    <CTableDataCell>{record.student_name}</CTableDataCell>
                    <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                    <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                    <CTableDataCell>
                      <CFormSelect
                        style={{ borderRadius: 0, width: 100, height: 28, fontSize: '12px' }}
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Leave">Leave</option>
                      </CFormSelect>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCard>
          <CRow className="d-flex justify-content-center align-items-center">
            <CButton
              type="submit"
              style={{
                marginTop: 30,
                width: 120,
                backgroundColor: '#1985AC',
                color: 'white',
                border: 'none',
              }}
            >
              Submit
            </CButton>
          </CRow>
        </CCard>
      </CCard>
    </>
  )
}

export default EditAttendance
