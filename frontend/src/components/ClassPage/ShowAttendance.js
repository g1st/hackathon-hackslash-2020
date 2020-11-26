import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useFetch from '../../hooks/useFetch';
import Spinner from '../UI/Spinner';
import { serverURL } from '../../config';

const ShowAttendance = ({
  show,
  handleClose,
  students,
  subject,
  week,
  cohort,
}) => {
  const { loading, data, error } = useFetch(
    `${serverURL}/api/class-week-overview/${cohort}/${week}/${subject}`
  );

  if (error) {
    return <div>Error</div>;
  } else if (data) {
    return (
      <div>
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>
              Attendance | {subject} | {week}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              {data.students.map(({ name, status }, i) => (
                <div
                  key={i}
                  className="d-inline mr-5 d-sm-flex justify-content-between align-items-center mb-3"
                >
                  <div>{name}</div>
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
                        value={status}
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
  } else if (loading) {
    return <Spinner />;
  } else {
    return null;
  }
};

export default ShowAttendance;
