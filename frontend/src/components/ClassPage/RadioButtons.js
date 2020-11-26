const RadioButtons = ({ students, handleChange }) => {
  return (
    <div>
      <div className="mb-3">
        {students.map(({ name, attendance }, i) => (
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
                  onChange={() => handleChange(name, 'YES')}
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
                  onChange={() => handleChange(name, 'NO')}
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
                  onChange={() => handleChange(name, 'LATE')}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
