import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const StyledContactForm = styled.div`
  max-width: 400px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
      font-size: 14px;
    }

    input,
    textarea {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    input[type="submit"] {
      background-color: #003c78;
      color: #fff;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      padding: 10px;
      font-size: 16px;
      transition: background-color 0.3s;
    }

    input[type="submit"]:hover {
      background-color: #072e55;
    }
  }
`;

const Contact = () => {
  const form = useRef();
  const navigate=useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqnbljm",
        "template_39l6dho",
        form.current,
        // "rM_DWg96oPkdNql7m"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message sent");
          navigate('/');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;