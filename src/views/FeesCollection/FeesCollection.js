/* eslint-disable prettier/prettier */
import { React, useState, useEffect} from 'react'
import * as icon from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCardBody,
  CFormSelect,
  CFormInput,
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
 
} from '@coreui/react'

const FeesCollection = () => {
    
    const [records, setRecords] = useState([]);
    const handleSubmit = async () => {
      if (!formData.id) {
        console.log("Admission Number is missing or empty");
        return;
      } else {
        const dataToPass = formData.id;
        navigateer("/FeesCollection", { state: { dataToPass } });
      }
    };
    const fetchStudentData = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users`, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setRecords(res.data);
        })
        .catch((err) => console.error(err));
    };
  
    const navigateer = useNavigate();
   
    useEffect(() => {
      fetchStudentData();
    });
    const [formData, setFormData] = useState({
      id: "",
    });
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData({
        ...formData,
        [id]: value,
      });
    };
  
  return (
    <><CCard style={{ borderRadius: 0, marginBottom: 20 }}>
          <CCardHeader
              component="h5"
              style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: 0 }}
          >
              <CIcon icon={icon.cilMenu} size="xl" />
              Fees Details
          </CCardHeader>
          <CCardBody style={{ marginTop: 20 }}>
              <CForm className="row g-3 ">
                  <CCol className="d-flex" md={5} style={{ marginRight: 70, marginLeft: 40 }}>
                      <CFormLabel
                          htmlFor="inputState"
                          style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '14px', width: '250px' }}
                      >
                          Student Admission Number*
                      </CFormLabel>
                      <CFormInput
                      id="id"
                      value={formData.id}
                      onChange={handleInputChange}
                          type="text"
                          style={{ width: '250px', height: '30px', borderRadius: 0 }} />
                  </CCol>

                  <CCol xs={2}>
                      <CButton
                          type="submit"
                          onClick={handleSubmit}
                          style={{
                              width: 100,
                              backgroundColor: '#1985AC',
                              color: 'white',
                              border: 'none',
                          }}
                      >
                          Cash
                      </CButton>
                  </CCol>
              </CForm>
          </CCardBody>
      </CCard>
      
              <CCard style={{ borderRadius:0}} >
              <CCardHeader
              component="h5"
              style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: 0 }}
          >
              <CIcon icon={icon.cilMenu} size="xl" />
              Fees Details
          </CCardHeader>
              <CForm className="row g-3 " style={{marginLeft: 20,marginRight:20,marginTop:20,marginBottom:40}}>
          <CCol xs={3}>
          <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                From Date*
              </CFormLabel>
              <CFormInput
                type="date"
                id="inputEmail4"
                style={{ width: '150px', height: '30px', borderRadius: 0 }} 
                
              />
          </CCol>
          <CCol xs={3}>
          <CFormLabel
                htmlFor="inputEmail4"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                To Date*
              </CFormLabel>
              <CFormInput
                type="date"
                id="inputEmail4"
                style={{ width: '150px', height: '30px', borderRadius: 0 }} 
                
              />
          </CCol>
          <CCol xs={3}>
          <CFormLabel
                htmlFor="inputState"
                style={{ color: 'rgb(15, 176, 235)', fontWeight: '500', fontSize: '16px' }}
              >
                Class*
              </CFormLabel>
              <CFormSelect
                id="inputState"
                style={{ width: '100px', height: '30px', borderRadius: 0, fontSize: '14px' }} 
                
              >
                <option>Class</option>
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
          <CCol xs={3}>
            <CButton
              type="submit"
              
              style={{
                marginTop: 30,
                marginLeft: 40,
                width: 120,
                backgroundColor: '#1985AC',
                color: 'white',
                border: 'none',
              }}
            >
              <CIcon icon={icon.cilSearch} size="l" /> Search
            </CButton>
          </CCol>
          
        </CForm>
        <CCard style={{ padding: 20, border: 0 }}>
          <CCard style={{ padding:1}}>
                  <CTable striped>
                      <CTableHead>
                          <CTableRow style={{backgroundColor: 'lightblue'}}>
                              <CTableHeaderCell scope="col">SNO</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Admission Number</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Section</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Deposit</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Actual Fees</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                          </CTableRow>
                      </CTableHead>
                      <CTableBody>
                          {records.map((record, index) => (
                              <CTableRow key={index}>
                                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                  <CTableDataCell>{record.emis_number}</CTableDataCell>
                                  <CTableDataCell>{record.student_name}</CTableDataCell>
                                  <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                                  <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                                  <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                                  <CTableDataCell>{record.date_of_joining}</CTableDataCell>
                                  <CTableDataCell>{record.admission_number}</CTableDataCell>
                                  <CTableDataCell>
                                      <CIcon
                                          icon={icon.cilPencil}
                                          size="l"
                                         
                                          style={{ color: 'rgb(15, 176, 235)', marginLeft: 20 }} />
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

export default FeesCollection
