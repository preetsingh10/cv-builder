function Heading() {
  return (
    <div>
      <form className="heading-form" action="">
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name" />
        <label htmlFor="phone-number">Phone</label>
        <input type="tel" name="phone-number" id="phone-number" />
        <label htmlFor="email">Email Adress</label>
        <input type="email" name="email" id="email" />
      </form>
    </div>
  );
}
export default Heading;
