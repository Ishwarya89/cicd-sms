/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const Tcwithinfo = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    admissionNumber: '',
    studentName: '',
    currentClass: '',
    currentSection: '',
    fathersName: '',
    mothersName: '',
    dateOfJoining: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const convert = (str) => {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2)
    return [date.getFullYear(), mnth, day].join('-')
  }

  const location = useLocation()
  const { dataToPass } = location.state
  console.log(dataToPass)

  useEffect(() => {
    if (location.state?.dataToPass) {
      const admissionNumber = location.state.dataToPass
      axios
        .get('http://100.20.130.76:8000/api/student/?admission_number=' + admissionNumber, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data.results.length > 0) {
            const userData = response.data.results[0]
            toast.success('Data get successfully!', {
              position: toast.POSITION.TOP_CENTER,
              timeout: 3000,
            })
            setFormData({
              admissionNumber: userData.admission_number,
              studentName: userData.student_name,
              currentClass: userData.current_class,
              currentSection: userData.current_section,
              fathersName: userData.fathers_name,
              mothersName: userData.mothers_name,
              dateOfJoining: convert(userData.date_of_joining),
            })
          } else {
            console.error('No data in this admission number:', admissionNumber)
            navigate('/Tcwithdraw')
            toast.error('No data in this admission number!', {
              position: toast.POSITION.TOP_CENTER,
              timeout: 3000,
            })
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }, [location.state, navigate])

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('admission_number', formData.admissionNumber)
      formDataToSend.append('student_name', formData.studentName)
      formDataToSend.append('current_class', formData.currentClass)
      formDataToSend.append('current_section', formData.currentSection)
      formDataToSend.append('fathers_name', formData.fathersName)
      formDataToSend.append('mothers_name', formData.mothersName)
      formDataToSend.append('date_of_joining', formData.dateOfJoining)
      formDataToSend.append('date_of_withdraw', formData.dateOfWithdraw)
      formDataToSend.append('remarks', formData.remark)

      const response = await axios.post(
        'http://100.20.130.76:8000/api/tc_withdraw/',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      console.log('Response from server:', response.data)

      const secondApiResponse = await axios.delete(
        'http://100.20.130.76:8000/api/tc_withdraw/student_delete/',
        {
          data: {
            admission_no: formData.admissionNumber,
            student_name: formData.studentName,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      console.log('Response from second API:', secondApiResponse.data)
      navigate('/Tcwithdraw')
      toast.success('Data submit successfully!', {
        position: toast.POSITION.TOP_CENTER,
        timeout: 3000,
      })
    } catch (error) {
      console.error('Error submitting data:', error)
      toast.error('Data not Submit!', {
        position: toast.POSITION.TOP_CENTER,
        timeout: 3000,
      })
    }
  }

  return (
    <>
      <h3>Tcwithdraw Lists</h3>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(198, 197, 192)', borderRadius: 0 }}
        >
          Student Details
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Admission No
              </CFormLabel>
              <CFormInput
                type="text"
                style={{ borderRadius: 0 }}
                placeholder="Enter Admission No"
                className="in"
                name="admissionNumber"
                value={formData.admissionNumber}
                readonly
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Student Name
              </CFormLabel>
              <CFormInput
                type="text"
                style={{ borderRadius: 0 }}
                placeholder="Enter Student Name"
                className="in"
                name="studentName"
                value={formData.studentName}
                readonly
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Class
              </CFormLabel>
              <CFormInput
                type="text"
                style={{ borderRadius: 0 }}
                placeholder="Enter Class"
                className="in"
                name="currentClass"
                value={formData.currentClass}
                readonly
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Section
              </CFormLabel>
              <CFormInput
                type="text"
                style={{ borderRadius: 0 }}
                placeholder="Enter Section"
                className="in"
                name="currentSection"
                value={formData.currentSection}
                readonly
              />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(198, 197, 192)', borderRadius: 0 }}
        >
          Other Details
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Father's Name
              </CFormLabel>
              <CFormInput
                type="text"
                style={{ borderRadius: 0 }}
                placeholder="Enter Father's Name"
                className="in"
                name="fathersName"
                value={formData.fathersName}
                readonly
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Mother's Name
              </CFormLabel>
              <CFormInput
                type="text"
                style={{ borderRadius: 0 }}
                placeholder="Enter Mother's Name"
                className="in"
                name="mothersName"
                value={formData.mothersName}
                readonly
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Data of Joining
              </CFormLabel>
              <CFormInput
                type="date"
                style={{ borderRadius: 0 }}
                className="in"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                readonly
              />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard style={{ borderRadius: 0, marginBottom: 30 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(198, 197, 192)', borderRadius: 0 }}
        >
          Details
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Data of Withdraw*
              </CFormLabel>
              <CFormInput
                type="date"
                style={{ borderRadius: 0 }}
                className="in"
                name="dateOfWithdraw"
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Remark*
              </CFormLabel>
              <CFormInput
                type="text"
                style={{ borderRadius: 0 }}
                placeholder="Remark"
                className="in"
                name="remark"
                onChange={handleInputChange}
              />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <div className="d-grid gap-2 col-3 mx-auto" style={{ borderRadius: 0, marginBottom: 30 }}>
        <CButton color="info" onClick={handleSubmit}>
          Submit
        </CButton>
      </div>
    </>
  )
}

export default Tcwithinfo
