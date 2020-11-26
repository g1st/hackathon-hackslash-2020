import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useFetch from '../../hooks/useFetch';
import Spinner from '../UI/Spinner';
import { serverURL } from '../../config';

const StudentAttendance = ({ show, handleClose, students, subject, week }) => {
  // TODO to change it to selected student id
  const { data, error } = useFetch(`${serverURL}/api/student/attendance/1`);

  if (error) {
    return <div>Error</div>;
  } else if (data) {
    return (
      <div>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Past attendance for {data[0].name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              {data.map(({ name, status, module: subject, week }, i) => (
                <div
                  key={i}
                  className="d-inline mr-5 d-sm-flex justify-content-between align-items-center mb-3"
                >
                  <div>
                    {subject} | Week {week}
                  </div>
                  <div>
                    <div className="form-check form-check-inline">
                      <label
                        className="form-check-label mr-1"
                        htmlFor={`exampleRadios${i}`}
                      >
                        YES
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`exampleRadios-${i}`}
                        id="exampleRadios1"
                        value="YES"
                        checked={status === 'yes'}
                        disabled
                        readOnly
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <label
                        className="form-check-label mr-1"
                        htmlFor={`exampleRadios${i}`}
                      >
                        NO
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`exampleRadios-${i}`}
                        id="exampleRadios1"
                        value="NO"
                        checked={status === 'no'}
                        disabled
                        readOnly
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <label
                        className="form-check-label mr-1"
                        htmlFor={`exampleRadios${i}`}
                      >
                        LATE
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`exampleRadios-${i}`}
                        id="exampleRadios1"
                        value="LATE"
                        checked={status === 'late'}
                        disabled
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default StudentAttendance;
