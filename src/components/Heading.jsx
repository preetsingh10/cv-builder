import capitalize from "../utility/capitalize";
function Heading({ personalInfo, setPersonalInfo }) {
  return (
    <div>
      <h2>Personal Details</h2>
      <form className="heading-form" action="">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          value={personalInfo.firstName}
          onChange={(e) =>
            setPersonalInfo((personalInfo) => ({
              ...personalInfo,
              firstName: capitalize(e.target.value),
            }))
          }
        />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name" value={personalInfo.lastName} onChange={(e) => setPersonalInfo((personalInfo) => ({ ...personalInfo, lastName: capitalize(e.target.value) }))} />
        <label htmlFor="phone-number">Phone</label>
        <input type="tel" maxLength={13} name="phone-number" id="phone-number" value={personalInfo.phoneNumber} onChange={(e) => setPersonalInfo((personalInfo => ({ ...personalInfo, phoneNumber: e.target.value })))} />
        <label htmlFor="email">Email Adress</label>
        <input type="email" maxLength={30} name="email" id="email" value={personalInfo.email} onChange={(e) => setPersonalInfo((personalInfo) => ({ ...personalInfo, email: e.target.value }))} />
        <label htmlFor="aboutme">About Me</label>
        <textarea name="aboutme" id="aboutme" maxLength={300} value={personalInfo.aboutMe} onChange={(e) => setPersonalInfo((personalInfo) => ({ ...personalInfo, aboutMe: e.target.value }))}></textarea>
      </form>
    </div>
  );
}
export default Heading;
