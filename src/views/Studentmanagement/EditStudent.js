import { React, useState, useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditStudent = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({})
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    // Fetch student data based on the 'id' from the URL
    axios
      .get(`http://100.20.130.76:8000/api/student/${id}/`, {
        // combinedIdentifier: combinedIdentifier,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data)

        const studentData = response.data
        setFormData({
          student_name: studentData.student_name || '',
          student_photo: studentData.student_photo || '',
          date_of_joining: studentData.date_of_joining || '',
          admission_number: studentData.admission_number || '',
          emis_number: studentData.emis_number || '',
          academic_year: studentData.academic_year || '',
          current_class: studentData.current_class || '',
          current_section: studentData.current_section || '',
          gender: studentData.gender || '',
          height: studentData.height || '',
          weight: studentData.weight || '',
          date_of_birth: studentData.date_of_birth || '',
          blood_group: studentData.blood_group || '',
          state: studentData.state || '',
          nationality: studentData.nationality || '',
          religion: studentData.religion || '',
          caste: studentData.caste || '',
          sub_caste: studentData.sub_caste || '',
          mother_tongue: studentData.mother_tongue || '',
          adhar: studentData.adhar || '',
          fathers_name: studentData.fathers_name || '',
          fathers_edu_qualification: studentData.fathers_edu_qualification || '',
          fathers_occupation: studentData.fathers_occupation || '',
          fathers_annual_income: studentData.fathers_annual_income || '',
          fathers_mobile_no: studentData.fathers_mobile_no || '',
          mothers_name: studentData.mothers_name || '',
          mother_edu_qualification: studentData.mother_edu_qualification || '',
          mothers_occupation: studentData.mothers_occupation || '',
          mothers_annual_income: studentData.mothers_annual_income || '',
          address: studentData.address || '',
        })
      })
      .catch((error) => {
        console.error('Error fetching student data:', error)
      })
  }, [id, navigate])

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setImage(selectedImage)
  }

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value, // Update gender when radio button changes
    })
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    // Update the local state (formData) with the changed value
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const currentClass = formData.current_class
    const currentSection = formData.current_section
    const classSection = currentClass + currentSection
    formData.class_section = parseInt(classSection, 10)
    const updatedData = {
      class_section: JSON.stringify(formData.class_section),
      student_name: formData.student_name,
      student_photo: image,
      date_of_joining: formData.date_of_joining,
      admission_number: formData.admission_number,
      emis_number: formData.emis_number,
      academic_year: formData.academic_year,
      current_class: formData.current_class,
      current_section: formData.current_section,
      gender: formData.gender,
      height: formData.height,
      weight: formData.weight,
      date_of_birth: formData.date_of_birth,
      blood_group: formData.blood_group,
      state: formData.state,
      nationality: formData.nationality,
      religion: formData.religion,
      caste: formData.caste,
      sub_caste: formData.sub_caste,
      mother_tongue: formData.mother_tongue,
      adhar: formData.adhar,
      fathers_name: formData.fathers_name,
      fathers_edu_qualification: formData.fathers_edu_qualification,
      fathers_occupation: formData.fathers_occupation,
      fathers_annual_income: formData.fathers_annual_income,
      fathers_mobile_no: formData.fathers_mobile_no,
      mothers_name: formData.mothers_name,
      mother_edu_qualification: formData.mother_edu_qualification,
      mothers_occupation: formData.mothers_occupation,
      mothers_annual_income: formData.mothers_annual_income,
      address: formData.address,
      // ... Other fields
    }

    // Send the updated data to the API
    axios
      .put(`http://100.20.130.76:8000/api/student/${id}/`, updatedData, {
        // combinedIdentifier: combinedIdentifier,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Data updated successfully:', response.data)
        navigate('/Studentmanagement/StudentDetails')
        // Optionally, you can provide user feedback or navigate to another page.
      })
      .catch((error) => {
        console.error('Error updating data:', error)
        navigate('/Studentmanagement/StudentDetails')
        // Handle errors and provide feedback to the user
      })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Student Details</h3>
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
                name="student_name"
                value={formData.student_name}
                onChange={handleInputChange}
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
                name="admission_number"
                value={formData.admission_number}
                onChange={handleInputChange}
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
                name="emis_number"
                value={formData.emis_number}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={4}>
              <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Academic Year
              </CFormLabel>
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 0 }}
                name="academic_year"
                value={formData.academic_year}
                onChange={handleInputChange}
              >
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
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 0 }}
                name="current_class"
                value={formData.current_class}
                onChange={handleInputChange}
              >
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
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 0 }}
                name="current_section"
                value={formData.current_section}
                onChange={handleInputChange}
              >
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
              <CFormInput
                type="date"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                name="date_of_joining"
                value={formData.date_of_joining}
                onChange={handleInputChange}
              />
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
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Student Photo
              </CFormLabel>
              <CFormInput
                type="file"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                name="student_photo"
                accept="image/*"
                onChange={handleImageChange}
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
              <CFormInput
                type="date"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleInputChange}
              />
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
                name="adhar"
                value={formData.adhar}
                onChange={handleInputChange}
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
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'} // Check if gender is "Male"
                  onChange={handleGenderChange}
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'} // Check if gender is "Male"
                  onChange={handleGenderChange}
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
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 0 }}
                name="blood_group"
                value={formData.blood_group}
                onChange={handleInputChange}
              >
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
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
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
                name="height"
                value={formData.height}
                onChange={handleInputChange}
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
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
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
                name="caste"
                value={formData.caste}
                onChange={handleInputChange}
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
                name="sub_caste"
                value={formData.sub_caste}
                onChange={handleInputChange}
              >
                State
              </CFormLabel>
              <CFormInput
                type="text"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
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
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
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
                name="mother_tongue"
                value={formData.mother_tongue}
                onChange={handleInputChange}
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
                name="fathers_name"
                value={formData.fathers_name}
                onChange={handleInputChange}
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
                name="mothers_name"
                value={formData.mothers_name}
                onChange={handleInputChange}
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
                name="fathers_edu_qualification"
                value={formData.fathers_edu_qualification}
                onChange={handleInputChange}
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
                name="mother_edu_qualification"
                value={formData.mother_edu_qualification}
                onChange={handleInputChange}
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
                name="fathers_occupation"
                value={formData.fathers_occupation}
                onChange={handleInputChange}
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
                name="mothers_occupation"
                value={formData.mothers_occupation}
                onChange={handleInputChange}
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
                name="fathers_annual_income"
                value={formData.fathers_annual_income}
                onChange={handleInputChange}
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
                name="mothers_annual_income"
                value={formData.mothers_annual_income}
                onChange={handleInputChange}
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
                name="fathers_mobile_no"
                value={formData.fathers_mobile_no}
                onChange={handleInputChange}
              />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <div className="d-grid gap-2 col-3 mx-auto" style={{ borderRadius: 0, marginBottom: 30 }}>
        <CButton color="info" type="submit">
          Submit
        </CButton>
      </div>
    </form>
  )
}

export default EditStudent
