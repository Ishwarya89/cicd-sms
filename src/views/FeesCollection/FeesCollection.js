/* eslint-disable prettier/prettier */
import { React, useState, useEffect } from 'react'
import * as icon from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCardBody,
  CFormSelect,
  CFormInput,
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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'

const FeesCollection = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [records, setRecords] = useState([])
  const [setFilteredRecords] = useState([])
  const [formData, setFormData] = useState({
    academic_year: '',
    standard: '',
    section: '',
    from_date: '',
    to_date: '',
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
        (!formData.section || record.section === formData.section) &&
        (!formData.from_date || record.from_date === formData.from_date) &&
        (!formData.to_date || record.to_date === formData.to_date)
      )
    })
    setFilteredRecords(filtered)
  }

  const handleDownload = () => {
    // Simulate downloading CSV data
    const apiUrl = 'http://100.20.130.76:8000/api/student/'
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

  const handleSubmit = async () => {
    if (!formData.id) {
      console.log('Admission Number is missing or empty')
      return
    } else {
      const dataToPass = formData.id
      navigate('/FeesInfo', { state: { dataToPass } })
    }
  }

  useEffect(() => {
    fetchStudentData()
  })

  const fetchStudentData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        setRecords(res.data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: 0 }}
        >
          <CIcon icon={icon.cilMenu} size="xl" />
          Fees Details
        </CCardHeader>
        <CCardBody style={{ marginTop: 20 }}>
          <CForm className="row g-3 ">
            <CCol className="d-flex" md={5} style={{ marginRight: 70, marginLeft: 40 }}>
              <CFormLabel
                htmlFor="inputState"
                style={{
                  color: 'rgb(15, 176, 235)',
                  fontWeight: '500',
                  fontSize: '14px',
                  width: '250px',
                }}
              >
                Student Admission Number*
              </CFormLabel>
              <CFormInput
                id="id"
                value={formData.id}
                onChange={handleInputChange}
                type="text"
                style={{ width: '250px', height: '30px', borderRadius: 0 }}
              />
            </CCol>
            <CCol xs={2}>
              <CButton
                type="submit"
                onClick={handleSubmit}
                style={{
                  width: 100,
                  backgroundColor: '#1985AC',
                  color: 'white',
                  border: 'none',
                }}
              >
                Cash
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard style={{ borderRadius: 0 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: 0 }}
        >
          <CIcon icon={icon.cilMenu} size="xl" />
          Fees Details
        </CCardHeader>
        <CForm
          className="row g-3 "
          style={{ marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 25 }}
        >
          <CCol xs={3}>
            <CFormLabel
              htmlFor="inputEmail4"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              From Date*
            </CFormLabel>
            <CFormInput
              type="date"
              id="inputEmail4"
              style={{ width: '150px', height: '30px', borderRadius: 0 }}
            />
          </CCol>
          <CCol xs={3}>
            <CFormLabel
              htmlFor="inputEmail4"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              To Date*
            </CFormLabel>
            <CFormInput
              type="date"
              id="inputEmail4"
              style={{ width: '150px', height: '30px', borderRadius: 0 }}
            />
          </CCol>
          <CCol xs={3}>
            <CFormLabel
              htmlFor="inputState"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              Class*
            </CFormLabel>
            <CFormSelect
              id="inputState"
              style={{ width: '100px', height: '30px', borderRadius: 0, fontSize: '14px' }}
            >
              <option>Class</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </CFormSelect>
          </CCol>
          <CCol xs={3}>
            <CButton
              type="submit"
              style={{
                marginTop: 30,
                marginLeft: 20,
                width: 120,
                backgroundColor: '#1985AC',
                color: 'white',
                border: 'none',
              }}
            >
              <CIcon icon={icon.cilSearch} size="l" /> Search
            </CButton>
          </CCol>
        </CForm>
        <CCard style={{ padding: 20, border: 0 }}>
          <CButton
            style={{
              marginRight: 5,
              marginLeft: 775,
              marginBottom: 5,
              width: 120,
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
                    htmlFor="From Date"
                    style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
                  >
                    From Date
                  </CFormLabel>
                  <CFormInput
                    type="date"
                    style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
                    id="from_date"
                    name="from_date"
                    value={formData.from_date}
                    onChange={handleInputChange}
                  />
                </CCol>
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="To Date"
                    style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
                  >
                    To Date
                  </CFormLabel>
                  <CFormInput
                    type="date"
                    style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
                    id="to_date"
                    name="to_date"
                    value={formData.to_date}
                    onChange={handleInputChange}
                  />
                </CCol>
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
          <CCard style={{ padding: 1 }}>
            <CTable striped>
              <CTableHead>
                <CTableRow style={{ backgroundColor: 'lightblue' }}>
                  <CTableHeaderCell scope="col">SNO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Admission Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Section</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Deposit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actual Fees</CTableHeaderCell>
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
                    <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                    <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                    <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                    <CTableDataCell>{record.admission_number}</CTableDataCell>
                    <CTableDataCell>
                      <CIcon
                        icon={icon.cilPencil}
                        size="l"
                        style={{ color: 'rgb(15, 176, 235)', marginLeft: 20 }}
                      />
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCard>
        </CCard>
      </CCard>
    </>
  )
}

export default FeesCollection
