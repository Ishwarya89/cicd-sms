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
  CFormCheck,
} from '@coreui/react'

const Add = () => {
  return (
    <>
      <h3>Add Student Details</h3>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(198, 197, 192)', borderRadius: 0 }}
        >
          StudentDetails
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Student Name*
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Student Name"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Admission Number*
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Admission Number"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                EMIS Number
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter EMIS Number"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Academic Year
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>2020-2021</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Current Class
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>1</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Current Section
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>A</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Date Of Joining
              </CFormLabel>
              <CFormInput type="date" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Address
              </CFormLabel>
              <CFormInput
                type="email"
                id="inputEmail4"
                placeholder="Enter Address"
                style={{ borderRadius: 0 }}
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Student Photo
              </CFormLabel>
              <CFormInput type="file" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(198, 197, 192)', borderRadius: 0 }}
        >
          Student Bio Data
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Date Of Birth
              </CFormLabel>
              <CFormInput type="date" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Aadhar Number
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Aadhar Number"
              />
            </CCol>
            <CCol md={4} className="d-flex flex-column">
              <CFormLabel
                htmlFor="inputEmail4"
                className="d-flex"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                {' '}
                Gender{' '}
              </CFormLabel>
              <div className="d-flex">
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox1"
                  value="option1"
                  label="Male"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox2"
                  value="option2"
                  label="Female"
                />
              </div>
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Blood Group
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>Select Blood Group</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Weight
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Weight"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Height
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Height"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Religion
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Religion"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Caste
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                placeholder="Caste"
                style={{ borderRadius: 0 }}
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Sub Caste
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Sub Caste"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                State
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
                Nationality
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Nationality"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Mother Toungue
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Mother Toungue"
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
          Parent Details
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Father Name
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Father Name"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Mother Name
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Mother Name"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Name of sibling in this school
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Brother/Sister"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Father Educational Qualigication
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Qualification"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Mother Educational Qualification
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Qualification"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Fees Relaxation
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="%"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Father Occupation
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Occupation"
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Mother Occupation
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                placeholder="Occupation"
                style={{ borderRadius: 0 }}
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                className="d-flex"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                {' '}
                Transport{' '}
              </CFormLabel>
              <div className="d-flex">
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox1"
                  value="option1"
                  label="School Bus"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox2"
                  value="option2"
                  label="Own Vechicle"
                />
              </div>
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Father Annual Income
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Annual Income"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Mother Annual Income
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Annual Income"
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                className="d-flex"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                {' '}
                Remarks{' '}
              </CFormLabel>
              <div className="">
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox1"
                  value="option1"
                  label="Regular"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox2"
                  value="option2"
                  label="Abscent/Discontinue"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox2"
                  value="option3"
                  label="TC"
                />
              </div>
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Father Mobile Number
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                placeholder="Mobile Number"
                style={{ borderRadius: 0 }}
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

export default Add
