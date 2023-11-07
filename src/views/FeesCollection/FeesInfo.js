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
const FeesInfo = () => {
  return (
    <>
      <h3>Fees Info</h3>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: 0 }}
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
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Academic Year
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>Select Academic Year</option>
                <option>2017-2018</option>
                <option>2018-2019</option>
                <option>2019-2020</option>
                <option>2020-2021</option>
                <option>2021-2022</option>
                <option>2022-2023</option>
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
                <option>Select Class</option>
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
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Current Section
              </CFormLabel>
              <CFormSelect id="inputState" style={{ borderRadius: 0 }}>
                <option>Select Section</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
                <option>H</option>
                <option>I</option>
              </CFormSelect>
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Date
              </CFormLabel>
              <CFormInput type="date" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Total Fee
              </CFormLabel>
              <CFormInput
                type="email"
                id="inputEmail4"
                placeholder="Amount"
                style={{ borderRadius: 0 }}
              />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard style={{ borderRadius: 0, marginBottom: 20 }}>
        <CCardHeader
          component="h5"
          style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: 0 }}
        >
          1 Term Fees
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={3}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Exam Fee*
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Amount"
              />
            </CCol>
            <CCol md={3}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                ID Card Fee*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Amount"
              />
            </CCol>
            <CCol md={3}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Extras*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Amount"
              />
            </CCol>
            <CCol md={3}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Addmission Fee*
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="Enter Amount"
              />
            </CCol>
            <CCol xs={3}>
              <CFormInput type="number" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol xs={3}>
              <CFormInput type="number" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol xs={3}>
              <CFormInput type="number" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
            <CCol xs={3}>
              <CFormInput type="number" id="inputEmail4" style={{ borderRadius: 0 }} />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <div className="d-grid gap-2 col-3 mx-auto">
        <CButton
          type="submit"
          style={{
            marginBottom: 30,
            marginLeft: 40,
            width: 120,
            backgroundColor: '#1985AC',
            color: 'white',
            border: 'none',
          }}
        >
          submit
        </CButton>
      </div>
    </>
  )
}

export default FeesInfo
