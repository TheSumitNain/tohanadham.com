import React, { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";

const Reply = () => {
  const formSparkURL = "https://submit-form.com/OsWitDK7";

  const [state, setState] = useState({
    message: "",
    fullName: "",
    mobile: "",
    address: "",
  });
  const [errors, setErrors] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      if (state.fullName && state.mobile && state.address && state.address) {
        const result = await axios.post(formSparkURL, state);
        console.log(result);
        setState({ message: "", fullName: "", mobile: "", address: "" });
        alert("Message send Successfully");
      } else {
        setErrors("Please fill all fields properly");
      }
    } catch (error) {
      console.log(error);
      alert(error);
      setErrors(error);
    }
  };

  useEffect(() => {
    if (!state) {
      setErrors("Please fill all fields properly");
    } else {
      SubmitData();
    }
  }, [state]);

  return (
    <>
      <form action="post" onSubmit={SubmitData}>
        <div class="container col-lg-10 col-12 pb-3">
          <div class="row">
            <h2 class="text-center mt-5 mycolor">अपना अनुभव लिखें</h2>
            
            <div class="mb-3">
              <label
                for="exampleFormControlTextarea1"
                class="form-label text-secondary"
              >
                आपका सन्देश / Message <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                name="message"
                value={state.message}
                onChange={handleInput}
                maxLength="100"
                minLength="20"
              ></textarea>
            </div>
            <div class="mb-3 col-12 col-6 col-lg-6">
              <label
                for="exampleFormControlInput1"
                class="form-label text-secondary"
              >
                आपका नाम / Name <span class="text-danger">*</span>
              </label>

              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="fullName"
                value={state.fullName}
                onChange={handleInput}
                maxLength="20"
                minLength="4"
              />
            </div>
            <div class="mb-3 col-12 col-6 col-lg-6">
              <label
                for="exampleFormControlInput1"
                class="form-label text-secondary"
              >
                आपका मोबाइल नंबर / Mobile <span class="text-danger">*</span>
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                name="mobile"
                value={state.mobile}
                onChange={handleInput}
                maxLength="15"
                minLength="10"
              />
            </div> 
            <div class="mb-3 col-12 col-6 col-lg-6">
              <label
                for="exampleFormControlInput1"
                class="form-label text-secondary"
              >
                आपका पता / Address <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="address"
                value={state.address}
                onChange={handleInput}
                maxLength="30"
                minLength="4"
              />
            </div>

            {errors && <p class="text-danger"> {errors} </p>}

            <div class="my-2">
              <input
                type="submit"
                disabled={!state}
                
                class="submit btn mb-1"
                value="मेसेज भेजें / Submit"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Reply;
