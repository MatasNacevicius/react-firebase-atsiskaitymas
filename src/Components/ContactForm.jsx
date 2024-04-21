import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from "../firebase_config/firebase_cofig";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore(app);

    try {
      await addDoc(collection(db, 'contacts'), {
        name: name,
        email: email,
        question: question
      });

      setName('');
      setEmail('');
      setQuestion('');
      console.log('Form data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form data: ', error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
