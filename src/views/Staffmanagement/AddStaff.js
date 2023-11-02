/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
  CFormSelect,
} from '@coreui/react'

const Addstaff = () => {
  return (
    <>
      <h3>Add Staff Details</h3>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(198, 197, 192)', borderRadius: 0 }}
        >
          Staff Details
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Staff Name*
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Staff Name"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Email*
              </CFormLabel>
              <CFormInput
                type="email"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Email Address"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Mobile Number*
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Mobile Number"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Enter Staff Photo*
              </CFormLabel>
              <CFormInput type="file" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Gender
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>Select your Gender</option>
                <option>Male</option>
                <option>Female</option>
              </CFormSelect>
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
                Father's Name*
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Your Father Name"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Data of Birth*
              </CFormLabel>
              <CFormInput type="date" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol md={4} className="d-flex flex-column">
              <CFormLabel
                htmlFor="inputEmail4"
                className="d-flex"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Blood Group*
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>Select Blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </CFormSelect>
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Qualification
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Your Degree"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Staff Dept(if staff only fill this field)*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Your Major Subject"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Marital Status*
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>Select Marital Status</option>
                <option>Married</option>
                <option>Unmarried</option>
              </CFormSelect>
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Aadhar Card Number*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Your Aadher Number"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Aadher Card Photo*
              </CFormLabel>
              <CFormInput type="file" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Address For Communication*
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Your Address"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Previous Experience*
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="State"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Data of joining in the Present*
              </CFormLabel>
              <CFormInput type="date" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Designation*
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>Select your Designation</option>
                <option>Staff</option>
                <option>In charge</option>
                <option>Office Staff</option>
                <option>Bus driver</option>
                <option>Others</option>
              </CFormSelect>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard style={{ borderRadius: 0, marginBottom: 30 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(198, 197, 192)', borderRadius: 0 }}
        >
          Account Details
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Account Number*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Account Number"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Bank IFSC Code*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Your IFCS Code"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Bank MICR Code*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Your MICR Code"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                UAN No*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Your UAN No"
              />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <div className="d-grid gap-2 col-3 mx-auto" style={{ borderRadius: 0, marginBottom: 30 }}>
        <CButton color="info">Add</CButton>
      </div>
    </>
  )
}

export default Addstaff
