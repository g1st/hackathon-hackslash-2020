import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShowAttendance = ({ show, handleClose, students, subject, week }) => {
  const data = students.map((s) => ({ ...s, attendance: 'YES' }));

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
            {data.map(({ name, attendance }, i) => (
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
                      value={attendance}
                      checked={attendance === 'YES'}
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
                      checked={attendance === 'NO'}
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
                      checked={attendance === 'LATE'}
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
};

export default ShowAttendance;
