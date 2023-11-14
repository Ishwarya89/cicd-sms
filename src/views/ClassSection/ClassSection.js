/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  CCardBody,
  CTable,
  CCardHeader,
  CCard,
  CRow,
  CButton,
  CPagination,
  CCol,
  CForm,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const ClassSection = () => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [records, setRecords] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    standard: '',
    section: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    try {
      const DataSend = new FormData()
      DataSend.append('standard', formData.standard)
      DataSend.append('section', formData.section)

      const response = await axios.post('http://100.20.130.76:8000/api/class/', DataSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Response from server:', response.data)
      navigate('/ClassSection')
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

  useEffect(() => {
    axios
      .get(`http://100.20.130.76:8000/api/class/?offset=${offset}&limit=${limit}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setRecords(res.data.results)
        setTotalItemCount(res.data.total)
      })
      .catch((err) => console.error(err))
  }, [limit, offset])

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`)
    setActivePage(pageNumber)
    const newOffset = (pageNumber - 1) * limit
    setOffset(newOffset)
  }

  const onPageLimitChanged = (e) => {
    const newLimit = parseInt(e.target.value, 10)
    setLimit(newLimit)
    setActivePage(1)
    setOffset(0)
  }

  return (
    <div>
      <CCardBody>
        <CForm className="row gy-2 gx-3 align-items-center" style={{ paddingBottom: '2%' }}>
          <CCol xs="auto">
            <CFormLabel
              htmlFor="autoSizingSelect"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
            >
              Standard*
            </CFormLabel>
            <CFormSelect
              id="autoSizingSelect"
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
              htmlFor="autoSizingSelect"
              style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              name="section"
              value={formData.section}
              onChange={handleInputChange}
            >
              Section*
            </CFormLabel>
            <CFormSelect
              id="autoSizingSelect"
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
          <CCol xs="auto" style={{ paddingTop: '3%' }}>
            <CButton onClick={handleSubmit}>Submit</CButton>
          </CCol>
        </CForm>
      </CCardBody>
      <CCard>
        <CCardHeader>
          <i className="fa fa-align-justify"></i> Class Datatable
        </CCardHeader>
        <CCardBody>
          <CTable responsive hover size="sm" striped>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Class</th>
                <th scope="col">Section</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.id}</td>
                  <td>{record.standard}</td>
                  <td>{record.section}</td>
                </tr>
              ))}
            </tbody>
          </CTable>
        </CCardBody>
      </CCard>
      <CRow>
        <div style={{ display: 'flex' }}>
          <CPagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={activePage}
            itemsCountPerPage={limit}
            totalItemsCount={totalItemCount}
            onChange={handlePageChange}
          />
          <label
            style={{
              textAlign: 'center',
              marginLeft: '10px',
              color: '#000000',
            }}
          ></label>
          <select
            style={{ marginLeft: 5, marginBottom: 15, height: 34 }}
            name="limitPerPage"
            value={limit}
            onChange={onPageLimitChanged}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </CRow>
    </div>
  )
}

export default ClassSection
