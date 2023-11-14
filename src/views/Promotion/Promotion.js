import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton, CCardBody, CFormSelect, CFormLabel, CCol, CForm } from '@coreui/react'

const Promotion = () => {
  const navigate = useNavigate()
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
  function handlesearch() {
    if (formData.from_academic_year && formData.from_class && formData.from_section) {
      const dataToPass = formData
      navigate('/PromotionDetails', { state: { dataToPass } })
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
  return (
    <>
      <CCardBody style={{ marginTop: 20 }}>
        <CForm className="row g-3">
          <CCol xs={3}>
            <CFormLabel
              htmlFor="inputState"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              From Academic Year*
            </CFormLabel>
            <CFormSelect
              id="inputState"
              style={{ borderRadius: 5 }}
              name="from_academic_year"
              value={formData.from_academic_year}
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
          <CCol xs={3}>
            <CFormLabel
              htmlFor="inputState"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              From Academic Class*
            </CFormLabel>
            <CFormSelect
              id="inputState"
              style={{ borderRadius: 5 }}
              name="from_class"
              value={formData.from_class}
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
              name="from_section"
              value={formData.from_section}
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
          <CCol xs={3}>
            <CButton
              type="submit"
              onClick={handlesearch}
              style={{
                marginTop: 30,
                marginLeft: 40,
                width: 120,
                backgroundColor: '#1985AC',
                color: 'white',
                border: 'none',
              }}
            >
              Sumbit
            </CButton>
          </CCol>
          {errorMessage && (
            <div className="ErrorMessage">
              <p className="error-message">{errorMessage}</p>
            </div>
          )}
        </CForm>
      </CCardBody>
    </>
  )
}

export default Promotion
