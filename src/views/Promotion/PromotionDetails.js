/* eslint-disable prettier/prettier */
import { React, useState, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'
import {
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CCard,
  CCardBody,
  CFormSelect,
  CFormLabel,
  CCardHeader,
  CCol,
  CTableHeaderCell,
  CTableRow,
  CTableHead,
  CForm,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
const PromotionDetails = () => {
  const [offset] = useState(0)
  const [limit] = useState(100)
  const navigate = useNavigate()
  const [records, setRecords] = useState([])
  const [visible, setVisible] = useState(false)
  const [setFilteredRecords] = useState([])
  const [formData, setFormData] = useState({
    admission_number: '',
    to_academic_year: '',
    to_class: '',
    to_section: '',
    academic_year: '',
    standard: '',
    section: '',
    status: '',
  })

  const toClass = formData.to_class || ''
  const toSection = formData.to_section || ''

  const classSection = toClass + toSection

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleStatusChange = (row, event) => {
    const updatedRecords = records.map((record) => {
      if (record.id === row.id) {
        return { ...record, status: event.target.value === 'P' ? 'P' : 'F' }
      }
      return record
    })
    setRecords(updatedRecords)
  }

  const location = useLocation()
  const dataToPass = location.state ? location.state.dataToPass : null

  useEffect(() => {
    if (dataToPass) {
      axios
        .get(`http://100.20.130.76:8000/api/student/?offset=${offset}&limit=${limit}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setRecords(res.data.results)
        })
        .catch((err) => console.error(err))
    }
  }, [dataToPass, limit, offset])

  const handleSubmit = async () => {
    try {
      const admissionNumbersToUpdate = records.map((record) => record.admission_number)

      if (admissionNumbersToUpdate) {
        const dataToSend = records.map((record) => ({
          status: record.status,
          admission_number: record.admission_number,
          student_name: record.student_name,
          from_class: record.current_class,
          from_section: record.current_section,
          from_academic_year: record.academic_year,
          to_academic_year: formData.to_academic_year,
          to_class: formData.to_class,
          to_section: formData.to_section,
        }))

        const response = await axios.post('http://100.20.130.76:8000/api/promotion/', dataToSend, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log('Response from server:', response.data)
        const secondApiResponse = await axios.put(
          'http://100.20.130.76:8000/api/promotion/student_update/',
          {
            data: {
              admission_number: admissionNumbersToUpdate,
              class_section: parseInt(classSection, 10),
              to_academic_year: formData.to_academic_year,
            },
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        console.log('Response from second API:', secondApiResponse.data)
        navigate('/PromotionManagement/PromotionDetails')
        toast.success('Data submitted successfully!', {
          position: toast.POSITION.TOP_CENTER,
          timeout: 3000,
        })
      } else {
        // Handle the case where admissionNumbersToUpdate is null or empty
        // You can add appropriate error handling or logging here
      }
    } catch (error) {
      console.error('Error submitting data:', error)
      toast.error('Data not submitted!', {
        position: toast.POSITION.TOP_CENTER,
        timeout: 3000,
      })
    }
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
    // Simulate downloading CSV data
    const apiUrl = 'http://100.20.130.76:8000/api/promotion/'
    const requestData = {
      academic_year: formData.academic_year,
      standard: formData.standard,
      section: formData.section,
      status: formData.status,
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
      a.download = 'promotion_data.csv'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })
  }

  return (
    <CCard>
      <CCardHeader
        component="h5"
        className="d-flex align-items-center"
        style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: 0 }}
      >
        {' '}
        <CIcon icon={icon.cilMenu} size="xl" />
        Student Promotion
      </CCardHeader>
      <CCardBody>
        <CForm className="row g-3">
          <CCol xs={3} style={{ marginRight: 55, marginLeft: 50 }}>
            <CFormLabel
              htmlFor="inputState"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              From Academic Year*
            </CFormLabel>
            <CFormSelect
              id="inputState"
              style={{ borderRadius: 5 }}
              name="to_academic_year"
              value={formData.to_academic_year}
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
          <CCol xs={3} style={{ marginRight: 55 }}>
            <CFormLabel
              htmlFor="inputState"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              From Academic Class*
            </CFormLabel>
            <CFormSelect
              id="inputState"
              style={{ borderRadius: 5 }}
              name="to_class"
              value={formData.to_class}
              onChange={handleInputChange}
            >
              <option>Select Academic Class</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </CFormSelect>
          </CCol>
          <CCol xs={3}>
            <CFormLabel
              htmlFor="inputState"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              From Academic Section*
            </CFormLabel>
            <CFormSelect
              id="inputState"
              style={{ borderRadius: 5 }}
              name="to_section"
              value={formData.to_section}
              onChange={handleInputChange}
            >
              <option>Select Academic Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
            </CFormSelect>
          </CCol>
          <CCol xs={11} className="d-flex justify-content-end">
            <CButton
              style={{
                marginTop: 30,
                marginRight: 18,
                width: 150,
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
                      style={{ fontWeight: '500', fontSize: '16px' }}
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
                      style={{ fontWeight: '500', fontSize: '16px' }}
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
                      style={{ fontWeight: '500', fontSize: '16px' }}
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
                <CButton color="secondary" onClick={handleDownload}>
                <CIcon icon={icon.cilVerticalAlignBottom} size="l" />
                  Download
                </CButton>
              </CModalFooter>
            </CModal>
            <CButton
              onClick={handleSubmit}
              style={{
                marginTop: 30,
                marginRight: 18,
                width: 150,
                backgroundColor: '#1985AC',
                color: 'white',
                border: 'none',
              }}
            >
              Submit
            </CButton>
          </CCol>
        </CForm>
        <br></br>
        <CTable striped>
          <CTableHead>
            <CTableRow style={{ borderBottom: 5, color: 'primary' }}>
              <CTableHeaderCell scope="col">Admission Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Section</CTableHeaderCell>
              <CTableHeaderCell scope="col">Academic Year</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {records.map((record, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{record.admission_number}</CTableDataCell>
                <CTableDataCell>{record.student_name}</CTableDataCell>
                <CTableDataCell>{record.current_class}</CTableDataCell>
                <CTableDataCell>{record.current_section}</CTableDataCell>
                <CTableDataCell>{record.academic_year}</CTableDataCell>
                <CTableDataCell>
                  <CFormSelect
                    id="inputState"
                    style={{ borderRadius: 0 }}
                    name="status"
                    value={record.status}
                    onChange={(e) => handleStatusChange(record, e)}
                  >
                    <option value="P">Pass</option>
                    <option value="F">Fail</option>
                  </CFormSelect>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default PromotionDetails
