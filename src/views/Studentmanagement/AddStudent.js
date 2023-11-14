import { React, useState } from 'react'
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
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddStudent = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const handleImage = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
    const selectedImage = e.target.files[0]
    setImage(selectedImage)
  }

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value, // Update gender when radio button changes
    })
  }
  const [formData, setFormData] = useState({
    student_name: '',
    student_photo: '',
    date_of_joining: '',
    admission_number: '',
    emis_number: '',
    academic_year: '',
    current_class: '',
    current_section: '',
    gender: '',
    height: '',
    weight: '',
    date_of_birth: '',
    blood_group: '',
    state: '',
    nationality: '',
    religion: '',
    caste: '',
    sub_caste: '',
    mother_tongue: '',
    adhar: '',
    fathers_name: '',
    fathers_edu_qualification: '',
    fathers_occupation: '',
    fathers_annual_income: '',
    fathers_mobile_no: '',
    mothers_name: '',
    mother_edu_qualification: '',
    mothers_occupation: '',
    mothers_annual_income: '',
    address: '',
  })

  const handle = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const combinedIdentifier = `${formData.current_class}-${formData.current_section}`;
    try {
      const formDataStudent = new FormData()
      const currentClass = formData.current_class
      const currentSection = formData.current_section
      const classSection = currentClass + currentSection
      formData.class_section = parseInt(classSection, 10)
      formDataStudent.append('student_name', formData.student_name)
      formDataStudent.append('student_photo', image)
      formDataStudent.append('date_of_joining', formData.date_of_joining)
      formDataStudent.append('admission_number', formData.admission_number)
      formDataStudent.append('emis_number', formData.emis_number)
      formDataStudent.append('academic_year', formData.academic_year)
      formDataStudent.append('current_class', formData.current_class)
      formDataStudent.append('current_section', formData.current_section)
      formDataStudent.append('class_section', JSON.stringify(formData.class_section))
      formDataStudent.append('gender', formData.gender)
      formDataStudent.append('height', formData.height)
      formDataStudent.append('weight', formData.weight)
      formDataStudent.append('date_of_birth', formData.date_of_birth)
      formDataStudent.append('blood_group', formData.blood_group)
      formDataStudent.append('state', formData.state)
      formDataStudent.append('nationality', formData.nationality)
      formDataStudent.append('religion', formData.religion)
      formDataStudent.append('caste', formData.caste)
      formDataStudent.append('sub_caste', formData.sub_caste)
      formDataStudent.append('mother_tongue', formData.mother_tongue)
      formDataStudent.append('adhar', formData.adhar)
      formDataStudent.append('fathers_name', formData.fathers_name)
      formDataStudent.append('fathers_edu_qualification', formData.fathers_edu_qualification)
      formDataStudent.append('fathers_occupation', formData.fathers_occupation)
      formDataStudent.append('fathers_annual_income', formData.fathers_annual_income)
      formDataStudent.append('fathers_mobile_no', formData.fathers_mobile_no)
      formDataStudent.append('mothers_name', formData.mothers_name)
      formDataStudent.append('mother_edu_qualification', formData.mother_edu_qualification)
      formDataStudent.append('mothers_occupation', formData.mothers_occupation)
      formDataStudent.append('mothers_annual_income', formData.mothers_annual_income)
      formDataStudent.append('address', formData.address)

      const response = await axios.post(
        'http://100.20.130.76:8000/api/student/',
        formDataStudent,

        {
          // combinedIdentifier: combinedIdentifier,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      console.log('Response from server:', response.data)
      console.log(formDataStudent)
      navigate('/Studentmanagement/StudentDetails')
    } catch (error) {
      console.error('Error submitting data:', error)
      navigate('/Studentmanagement/StudentDetails')
    }
  }
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                name="student_name"
                value={formData.student_name}
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
              >
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
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 0 }}
                name="current_class"
                value={formData.current_class}
                onChange={handle}
              >
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
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 0 }}
                name="current_section"
                value={formData.current_section}
                onChange={handle}
              >
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
                Date Of Joining
              </CFormLabel>
              <CFormInput
                type="date"
                id="inputEmail4"
                style={{ borderRadius: 0 }}
                name="date_of_joining"
                value={formData.date_of_joining}
                onChange={handle}
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
                onChange={handle}
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
                style={{ borderRadius: 0 }}
                id="student_photo"
                name="student_photo"
                onChange={handleImage}
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
                onChange={handle}
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
                onChange={handle}
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
                  label="Male"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'} // Check if gender is "Male"
                  onChange={handleGenderChange}
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
              <CFormSelect
                id="inputState"
                style={{ borderRadius: 0 }}
                name="blood_group"
                value={formData.blood_group}
                onChange={handle}
              >
                <option>Select Blood Group</option>
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                name="sub_caste"
                value={formData.sub_caste}
                onChange={handle}
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
                name="state"
                value={formData.state}
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                onChange={handle}
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
                  name="transport"
                  value="School bus"
                  label="School Bus"
                />
                <CFormCheck
                  inline
                  type="radio"
                  value="Own vechicle"
                  name="transport"
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
                onChange={handle}
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
                onChange={handle}
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
                <CFormCheck inline type="radio" name="remarks" value="regular" label="Regular" />
                <CFormCheck
                  inline
                  type="radio"
                  value="abscent"
                  name="remarks"
                  label="Abscent/Discontinue"
                />
                <CFormCheck inline type="radio" value="tc" name="remarks" label="TC" />
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
                onChange={handle}
              />
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <div className="d-grid gap-2 col-3 mx-auto" style={{ borderRadius: 0, marginBottom: 30 }}>
        <CButton color="info" type="submit">
          Add
        </CButton>
      </div>
    </form>
  )
}

export default AddStudent
