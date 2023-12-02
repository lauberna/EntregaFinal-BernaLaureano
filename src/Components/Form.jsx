import { useState } from "react";
import "./css/form.css";

const Form = () => {
  const [pass, setPass] = useState(false);

  const [dataErr, setDataErr] = useState({
    err: false,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleVerification = () => {
    const regex = {
      regexNombre: /^[\p{L}\s]{5,}[\s]+[\p{L}\s]{3,}$/u,
      regexEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      regexMsj: /^.{15,100}$/,
    };

    const nameValid = regex.regexNombre.test(form.name);
    const emailValid = regex.regexEmail.test(form.email);
    const msgValid = regex.regexMsj.test(form.message);

    if (!nameValid || !msgValid || !emailValid) {
      setPass(false);
      setDataErr({ ...dataErr, err: true });
      setTimeout(() => {
        setDataErr({ ...dataErr, err: false });
      }, 1500);
    } else {
      setPass(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerification();
  };

  const handleInputChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <label
          className={`INP ${dataErr.dataName ? "showINP" : ""}`}
          htmlFor="nombre"
        >
          Nombre:
        </label>
        <input
          onBlur={(e) => handleInputChange(e, "name")}
          type="text"
          id="nombre"
          name="nombre"
          className="input"
        />

        <label
          className={`INP ${dataErr.dataEmail ? "showINP" : ""}`}
          htmlFor="email"
        >
          Email:
        </label>
        <input
          onBlur={(e) => handleInputChange(e, "email")}
          id="email"
          name="email"
          className="input"
        />

        <label
          className={`INP ${dataErr.dataMessage ? "showINP" : ""}`}
          htmlFor="mensaje"
        >
          Mensaje:
        </label>
        <textarea
          onBlur={(e) => handleInputChange(e, "message")}
          id="mensaje"
          name="mensaje"
          rows="10"
          cols="50"
          className="inputText"
        ></textarea>
        <div className="btnC">
          <input className="env" type="submit" value="Lets Chat!" />
          <h2
          className={
            pass
              ? `pass ${pass ? "show" : ""}`
              : `error ${dataErr.err ? "show" : ""}`
          }
        >
          {pass
            ? `Thank you ${
                form.name.split(" ")[0]
              }, We will contact you as soon as possible via email`
            : "Please verify your information again"}
        </h2>
        </div>

        
      </form>
    </div>
  );
};

export default Form;
