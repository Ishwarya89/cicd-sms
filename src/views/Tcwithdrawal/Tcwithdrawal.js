/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CCardBody,
  CInputGroup,
  CFormInput,
  CButton,
  CTable,
  CCardHeader,
  CCard,
  CRow,
  CPagination,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const Tcwithdrawal = () => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [records, setRecords] = useState([])
  const [filterRecords, setFilterRecords] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    admission_number: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    if (!formData.admission_number) {
      console.error('Admission Number is missing or empty')
      return
    } else {
      const dataToPass = formData.admission_number
      navigate('/Tcwithinfo', { state: { dataToPass } })
    }
  }

  useEffect(() => {
    axios
      .get(`http://100.20.130.76:8000/api/tc_withdraw/?offset=${offset}&limit=${limit}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setRecords(res.data.results)
        setFilterRecords(res.data.results)
        setTotalItemCount(res.data.total)
      })
      .catch((err) => console.error(err))
  }, [limit, offset])

  function handleFilter(event) {
    const newData = filterRecords.filter(
      (row) =>
        (row.student_name &&
          row.student_name.toLowerCase().includes(event.target.value.toLowerCase())) ||
        (row.admission_number &&
          row.admission_number.toString().toLowerCase().includes(event.target.value.toLowerCase())),
    )
    setRecords(newData)
  }

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
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content align-items-center">
            <CInputGroup className="mb-1" shape="rounded-0">
              <CFormInput
                type="text"
                shape="rounded-0"
                style={{ borderRadius: 0 }}
                placeholder="Roll Number"
                id="roll_number"
                name="admission_number"
                value={formData.roll_number}
                onChange={handleInputChange}
              />
              <CButton
                shape="rounded-0"
                style={{
                  backgroundColor: '#1985AC',
                  color: 'white',
                  border: 'none',
                }}
                onClick={handleSubmit}
              >
                Submit
              </CButton>
            </CInputGroup>
          </div>
          <div className="d-flex justify-content align-items-center">
            <CInputGroup className="mb-1" shape="rounded-0">
              <CFormInput
                type="text"
                shape="rounded-0"
                style={{ borderRadius: 0 }}
                placeholder="Enter Website"
                onChange={handleFilter}
              />
              <CButton
                shape="rounded-0"
                style={{
                  backgroundColor: '#1985AC',
                  color: 'white',
                  border: 'none',
                }}
              >
                <CIcon icon={icon.cilSearch} size="l" /> search
              </CButton>
            </CInputGroup>
          </div>
        </div>
      </CCardBody>
      <CCard>
        <CCardHeader>
          <i className="fa fa-align-justify"></i> Student Details
        </CCardHeader>
        <CCardBody>
          <CTable responsive hover size="sm" striped>
            <thead>
              <tr>
                <th scope="col">Admission No</th>
                <th scope="col">Student Name</th>
                <th scope="col">Class</th>
                <th scope="col">Section</th>
                <th scope="col">Father Name</th>
                <th scope="col">Mother Name</th>
                <th scope="col">Joining Date</th>
                <th scope="col">Withdrawn Date</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.admission_number}</td>
                  <td>{record.student_name}</td>
                  <td>{record.current_class}</td>
                  <td>{record.current_section}</td>
                  <td>{record.fathers_name}</td>
                  <td>{record.mothers_name}</td>
                  <td>{record.date_of_joining}</td>
                  <td>{record.date_of_withdraw}</td>
                  <td>{record.remarks}</td>
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
            onSelect={handlePageChange}
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

export default Tcwithdrawal
