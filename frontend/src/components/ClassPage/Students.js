import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import StudentAttendance from './StudentAttendance';

const Students = ({ data }) => {
  const [studentId, setStudentId] = useState(0);
  const [students, setStudents] = useState(data);
  const [showAttendance, setShowAttendance] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredStudents = data.filter((student) =>
      student.name.toLowerCase().includes(term)
    );
    setStudents(filteredStudents);
  };

  const handleAttendanceClose = () => setShowAttendance(false);
  const handleAttendanceShow = (studentId) => {
    setStudentId(studentId);
    setShowAttendance(true);
  };

  return (
    <Row>
      <>
        <InputGroup className="class-filter mb-5">
          <h1 className="student-title mb-3 mb-md-0">Students</h1>
          <FormControl
            type="text"
            placeholder="Filter by name"
            onChange={handleSearch}
            className="class-input d-flex align-self-center"
          />
        </InputGroup>
        {students.map((student, index) => (
          <Col key={index}>
            <div className="bubble-wrapper">
              <button
                className="student-button"
                onClick={() => handleAttendanceShow(student.id)}
              >
                <div className="student-bubble">
                  <div>
                    <div className="student-name">{student.name}</div>
                  </div>
                </div>
              </button>
            </div>
          </Col>
        ))}
      </>
      <StudentAttendance
        show={showAttendance}
        handleClose={handleAttendanceClose}
        id={studentId}
      />
    </Row>
  );
};

export default Students;
