import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import useFetch from '../../hooks/useFetch';
import ModulesDropdown from './ModulesDropdown';
import MarkAttendance from './MarkAttendance';
import ShowAttendance from './ShowAttendance';
import img from '../../images/classroom.jpg';
import Spinner from '../UI/Spinner';
import './Class.scss';

const Class = () => {
  const [week, setWeek] = useState('All weeks');
  const [subject, setSubject] = useState('All modules');
  const [showMarkAttendance, setShowMarkAttendance] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const { className } = useParams();

  const { loading: overviewLoading, data: overviewData } = useFetch(
    'http://localhost:3001/api/class-overview/westmidlands1'
  );

  const handleMarkAttendanceClose = () => setShowMarkAttendance(false);
  const handleAttendanceShow = () => setShowMarkAttendance(true);

  const handleShowAttendanceClose = () => setShowAttendance(false);
  const handleShowAttendanceShow = () => setShowAttendance(true);

  const handleModuleChange = (subject) => {
    setSubject(subject);
  };

  const handleWeekChange = (selectedWeek) => {
    setWeek(selectedWeek);
  };

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <h1 className="mb-5 text-left">{className}</h1>
      <div className="row class-wrapper">
        <div className="col col-md-4 mb-5 mr-lg-5">
          {overviewLoading ? <Spinner /> : null}
          {overviewData ? (
            <>
              <div className="overview-title text-left">Class overview</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>{overviewData.students}</strong> students
                </li>
                <li className="list-group-item">
                  <strong>{overviewData.percentage}%</strong> attendance average
                </li>
                <li className="list-group-item">
                  <strong>{overviewData.score_avg.toFixed(2)}</strong> average
                  score
                </li>
                <li className="list-group-item">
                  Started{' '}
                  <strong>
                    {dateTimeFormat.format(new Date(overviewData.start_date))}
                  </strong>
                </li>
                <li className="list-group-item">
                  Est. finish{' '}
                  <strong>
                    {dateTimeFormat.format(new Date(overviewData.end_date))}
                  </strong>
                </li>
              </ul>
            </>
          ) : null}
        </div>
        <div className="col attendance-panel">
          <div className="dropdown-buttons-wrapper mb-2">
            <ModulesDropdown
              subject={subject}
              setSubject={handleModuleChange}
            />
            <DropdownButton
              id="dropdown-week-button"
              size="lg"
              title={week}
              className="week-dropdown mb-2"
            >
              <Dropdown.Item eventKey="All weeks" onSelect={handleWeekChange}>
                All weeks
              </Dropdown.Item>
              <Dropdown.Item eventKey="Week 1" onSelect={handleWeekChange}>
                Week 1
              </Dropdown.Item>
              <Dropdown.Item eventKey="Week 2" onSelect={handleWeekChange}>
                Week 2
              </Dropdown.Item>
              <Dropdown.Item eventKey="Week 3" onSelect={handleWeekChange}>
                Week 3
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="attendance-buttons mb-3">
            <Button
              type="submit"
              variant="primary"
              className="btn-lg mr-5"
              onClick={handleAttendanceShow}
            >
              Mark Attendance
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="btn-lg"
              onClick={handleShowAttendanceShow}
            >
              Show Attendance
            </Button>
          </div>
          <div>
            <img src={img} alt="CYF class" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="pt-5 pb-5">
        <h2 className="student-title">Students</h2>
        <div className="students-list">
          <Row>
            {overviewLoading ? <Spinner /> : null}
            {overviewData ? (
              <>
                {overviewData.students_names.map((student, index) => (
                  <Col key={index}>
                    <div className="bubble-wrapper">
                      <button className="student-button">
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
            ) : null}
          </Row>
        </div>
      </div>
      {overviewData ? (
        <>
          <MarkAttendance
            show={showMarkAttendance}
            handleClose={handleMarkAttendanceClose}
            // handleSave={handleSaveAttendance}
            students={overviewData.students_names}
            subject={subject}
            week={week}
            cohort={className}
          />
          <ShowAttendance
            show={showAttendance}
            handleClose={handleShowAttendanceClose}
            students={overviewData.students_names}
            subject={subject}
            week={week}
          />
        </>
      ) : null}
    </div>
  );
};

export default Class;
