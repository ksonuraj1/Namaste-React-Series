import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    if ("OTPCredential" in window) {
      window.addEventListener("DOMContentLoaded", (e) => {
        const input = document.querySelector(
          'input[autocomplete="one-time-code"]'
        );
        if (!input) return;
        // Cancel the Web OTP API if the form is submitted manually.
        const ac = new AbortController();
        const form = input.closest("form");
        if (form) {
          form.addEventListener("submit", (e) => {
            // Cancel the Web OTP API.
            ac.abort();
          });
        }
        // Invoke the Web OTP API
        navigator.credentials
          .get({
            otp: { transport: ["sms"] },
            signal: ac.signal,
          })
          .then((otp) => {
            input.value = otp.code;
            // Automatically submit the form when an OTP is obtained.
            if (form) form.submit();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, []);

  return (
    <div className="contact-us">
      <h1>Contact Us page</h1>
      <form action="/verify-otp" method="POST">
        <input
          type="text"
          inputmode="numeric"
          autocomplete="one-time-code"
          pattern="\d{6}"
          required
        />
      </form>
    </div>
  );
};

export default ContactUs;
