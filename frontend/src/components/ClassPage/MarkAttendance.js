import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RadioButtons from './RadioButtons';
import { serverURL } from '../../config';
import { useAuth } from '../../hooks/use-auth';

const MarkAttendance = ({
  show,
  handleClose,
  students,
  subject,
  week,
  subjectToFetch,
  weekToFetch,
  cohort,
  triggerFetch,
}) => {
  let {
    user: { token, id },
  } = useAuth();
  // add YES as default attendance for each student (if not already marked)
  // don't have that data yet from BE
  const data = students.map((s) => ({ ...s, attendance: 'YES' }));
  const [studentsData, setStudentsData] = useState(data);

  const handleSave = () => {
    const formattedData = studentsData.map((obj) => {
      obj.cohort_name = cohort;
      obj.week = weekToFetch;
      obj.module = subjectToFetch;
      obj.mentor_id = id;
      obj.date = new Date().toISOString().split('T')[0];
      return obj;
    });

    fetch(`${serverURL}/api/attendance`, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(formattedData),
    })
      .then((res) => res.json())
      .then((data) => {
        triggerFetch();
        handleClose();
      });
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
          <RadioButtons students={studentsData} handleChange={handleChange} />
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
