import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StudentsList from './StudentsList';

const MarkAttendance = ({
  show,
  handleClose,
  students,
  subject,
  week,
  cohort,
}) => {
  // add YES as default attendance for each student
  const data = students.map((s) => ({ ...s, attendance: 'YES' }));
  const [studentsData, setStudentsData] = useState(data);

  const handleSave = () => {
    console.log('data for POST attendance');
    console.log(subject, week, cohort, studentsData);
    // TODO POST request to backend to save attendance
    // TODO refetch attendances?

    // TODO close modal only after sending POST request
    // handleClose();
  };

  const handleChange = (name, value) => {
    // modify attendance value according to selected radio input value
    const studentsDataChanged = studentsData.map((el) =>
      el.name === name ? { ...el, attendance: value } : el
    );
    setStudentsData(studentsDataChanged);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            Mark attendance | {subject} | {week}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudentsList students={studentsData} handleChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MarkAttendance;
