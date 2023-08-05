import styled from "styled-components";
import Button from './styles/Button';
import React from "react";


const Contact = () => {
  

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.152709286649!2d78.37593980928817!3d17.43393703647813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972fe66d4711%3A0x7f2d27691ca15313!2sInorbit%20Mall%20Cyberabad!5e0!3m2!1sen!2sin!4v1690568124834!5m2!1sen!2sin" 
      width="100%" height="500"
       style={{border:0}} 
       allowfullscreen="" 
       loading="lazy" 
       title="maps"
       referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mpzgqznk"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>


      <Button type="submit" style={{marginLeft:'30%', width:'30%',justifyContent:'center'}}>submit</Button>

          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
    padding: 4rem 0 4rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

        //   // [type="submit"] {
        //   //   cursor: pointer;
        //   //   transition: all 0.2s;

        //   //   &:hover {
        //   //     background-color: ${({ theme }) => theme.colors.white};
        //   //     border: 1px solid ${({ theme }) => theme.colors.btn};
        //   //     color: ${({ theme }) => theme.colors.btn};
        //   //     transform: scale(0.9);
        //   //   }
        //   // }
        // }
      }
    }
  `;
export default Contact;




