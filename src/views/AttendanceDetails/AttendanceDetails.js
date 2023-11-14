/* eslint-disable prettier/prettier */
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
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
const AttendanceDetails = () => {
  // eslint-disable-next-line no-undef
  const navigate = useNavigate()
  function gotoEditAttendance() {
    navigate('/AttendanceDetails/EditAttendance')
  }
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
  const [records, setRecords] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [errorDisplayDuration] = useState(2000)
  const [visible, setVisible] = useState(false)
  const [filterRecords, setFilterRecords] = useState([])
  const [classFilter, setClassFilter] = useState(''); // Store class filter
const [sectionFilter, setSectionFilter] = useState(''); // Store section filter

  function handlesubmit() {
    if (formData.from_academic_year && formData.from_class && formData.from_section) {
      const dataToPass = formData
      navigate('/AttendanceDetails/AddAttendance', { state: { dataToPass } })
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
      a.download = 'student_attendance_data.csv'
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
        setFilterRecords(res.data);
        filterData(classFilter, sectionFilter); // Apply the initial filters
      })
      .catch((err) => console.error(err));
  }, ); // Add classFilter and sectionFilter as dependencies
  
  const filterData = (selectedClass, selectedSection) => {
    const newData = filterRecords.filter((row) => {
      // Check if the selected class matches or it's empty
      const classMatch = !selectedClass || row.name === selectedClass;
    
      // Check if the selected section matches or it's empty
      const sectionMatch = !selectedSection || row.section === selectedSection;
    
      return classMatch && sectionMatch;
    });
  
    setRecords(newData);
  };
 

  // Handle class filter change
  const handleClassFilterChange = (event) => {
    setClassFilter(event.target.value);
    filterData(event.target.value, sectionFilter);
  };
  
  // Handle section filter change
  const handleSectionFilterChange = (event) => {
    setSectionFilter(event.target.value);
    filterData(classFilter, event.target.value);
  };
  
  
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
            <CCol xs={2} style={{ marginRight: 60, marginLeft: 40 }}>
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
            <CCol xs={2} style={{ marginRight: 60 }}>
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
            <CCol xs={2} style={{ marginRight: 50 }}>
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
            <CCol xs={2} className='d-flex justify-content-between' style={{
                  width:250,
                  
                }}>
              <CButton
                type="submit"
                onClick={handlesubmit}
                style={{
                  marginright:20,
                 height:40,
                 width:100,
                 marginTop:30,
                  backgroundColor: '#1985AC',
                  color: 'white',
                  border: 'none',
                }}
              >
                <CIcon icon={icon.cilSearch} size="l" /> Search
              </CButton>
              <CButton
               
               onClick={() => setVisible(!visible)}
                style={{
                  height:40,
                  marginTop:30,
               width:130,
                  backgroundColor: '#1985AC',
                  color: 'white',
                  border: 'none',
                }}
              >
                <CIcon icon={icon.cilVerticalAlignBottom} size="l" /> Download
              </CButton>
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
                      id="classFilter"
                      value={classFilter}
                      onChange={handleClassFilterChange}
                    >
                      <option value=""></option>
                      <option value="Leanne Graham">Leanne Graham</option>
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
                     id="sectionFilter"
                     value={sectionFilter}
                     onChange={handleSectionFilterChange}
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
          <CButton color="secondary"onClick={handleDownload} >
          <CIcon icon={icon.cilVerticalAlignBottom} size="l" />
            Download
          </CButton>
          
        </CModalFooter>
      </CModal>
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
        <CRow className="d-flex justify-content-center align-items-center">
          <CButton
            type="submit"
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: 120,
              backgroundColor: '#1985AC',
              color: 'white',
              border: 'none',
            }}
          >
            Export
          </CButton>
        </CRow>
        <CCard style={{ padding: 20, border: 0 }}>
          <CCard style={{ border: '1px solid #000', padding: 2 }}>
            <CTable striped>
              <CTableHead style={{}}>
                <CTableRow>
                  <CTableHeaderCell scope="col">SNO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Scetion</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Present</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Absent</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Leave</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {records.map((record, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{record.emis_number}</CTableDataCell>
                    <CTableDataCell>{record.name}</CTableDataCell>
                    <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                    <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                    <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                    <CTableDataCell>{record.admission_number}</CTableDataCell>
                    <CTableDataCell>
                      <CIcon
                        icon={icon.cilPencil}
                        size="l"
                        onClick={() => gotoEditAttendance()}
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

export default AttendanceDetails
