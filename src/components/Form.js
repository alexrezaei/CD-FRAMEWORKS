import React from "react";
import "./Form.scss";
function Form() {
  return (
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" name="name"></input>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email"></input>
      </div>
      <div>
        <label for="website">Website</label>
        <div className="tag">
          <div className="boxhttp">https://</div>
          <input type="text" name="website"></input>
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="form-input" />
        <label class="form-check-label" for="form-input">
          Allow us to sell your personal details to whomever we want
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
