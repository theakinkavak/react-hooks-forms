import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsetter, setNewsetter] = useState(false);
  const [upperCase, setUpperCase] = useState(false);

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);


  const handleNewsletterChange = (event) => {
    return setNewsetter(event.target.checked);
  }

  const handleUpperCaseChange = (event) => {
    return setUpperCase(event.target.checked);
  }
  
  // if (upperCase) {
  //   document.querySelector("#id").classList.add("upperCase")
  // } else {
  //   document.querySelector("#id").classList.remove("upperCase")
  // }

  // if (newsetter) {
  //   document.querySelector("#id").classList.add("font-size")
  // } else {
  //    document.querySelector("#id").classList.remove("font-size")
  // }
  
  return (
    <>
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <form>
      <div className="subscribe-checkbox">
      <label htmlFor="newsetter">Subscribe to our Newsletter?</label>
      <input 
        type="checkbox"
        id="newsetter"
        checked={newsetter}
        onChange={handleNewsletterChange}
      />
      </div>
      <div className="uppercase-checkbox">
      <input 
        type="checkbox"
        id="upperCase"
        checked={upperCase}
        onChange={handleUpperCaseChange}
      />
      <label htmlFor="upperCase">Uppercase</label>
      </div>
      
    </form>
    <p id="id" className="">Hello Checkbox</p>
    </>
  );
}

export default Form;
