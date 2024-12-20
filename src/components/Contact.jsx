import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
        <p className="my-4"></p>
        {/* <a href="#" className="border-b">
          {CONTACT.linkedin}
        </a> */}
      </div>
    </div>
  );
};

export default Contact;
