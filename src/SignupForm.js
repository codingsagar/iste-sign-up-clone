import "./signup.css";

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <main>
      <div className="heading">
        <h1>Sign Up</h1>
      </div>
      <div className="form">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-grp">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-grp reg">
            <label htmlFor="regno" id="reg">
              Reg. No. &nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="text"
              id="regno"
              required
              pattern="21[A-Za-z]{3}[0-9]{4}"
              title="Please enter a valid registration number"
            />
          </div>
          <div className="form-grp">
            <label htmlFor="vitmail">VIT Mail ID</label>
            <input
              type="email"
              id="vitmail"
              required
              pattern=".+2021.*@vitstudent.ac.in$"
              title="Please enter a valid college mail id"
            />
          </div>
          <div className="form-grp">
            <label htmlFor="mobile">Mobile No</label>
            <input type="tel" id="mobile" required />
          </div>
          <div className="form-grp">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-grp">
            <label htmlFor="">Preferred Domain (s) :</label>
            <div className="checkboxes">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="TechnicalCSE"
                  name="TechnicalCSE"
                ></input>
                <label htmlFor="Technicalcse">Technical (CSE)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Technicalelec"
                  name="Technicalelec"
                ></input>
                <label htmlFor="Technicalelec">Technical (Elec)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="management"
                  name="management"
                ></input>
                <label htmlFor="management">Management</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="design"
                  name="design"
                ></input>
                <label htmlFor="design">Design</label>
              </div>
            </div>
          </div>
          <p>
            *Select at least one preferred domain(s) before signing up. You can
            choose more than one domain.
          </p>
          <br />
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignupForm;
