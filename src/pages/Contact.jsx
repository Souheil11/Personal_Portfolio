import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    workType: "Freelance Project",
    budget: "Medium",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, workType, budget, message } = formData;

    const subject = `Portfolio Inquiry: ${workType} from ${name}`;
    const body = `Name: ${name}%0D%0AWork Type: ${workType}%0D%0ABudget: ${budget}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:karbaa.souheil@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-container fade-in">
      <div className="contact-content fade-in-up">
        <h1 className="contact-title">Let&apos;s Work Together</h1>
        <p className="contact-subtitle">
          Have a project in mind or want to hire me? Fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="workType">Work Type</label>
            <select
              id="workType"
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Freelance Project">Freelance Project</option>
              <option value="Hiring/Job Offer">Hiring / Job Offer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget Estimate</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-select"
              disabled={formData.workType === "Hiring/Job Offer"}
            >
              <option value="Low">Low ($100 - $1000)</option>
              <option value="Medium">Medium ($1000 - $5000)</option>
              <option value="High">High ($5000+)</option>
              <option value="Not Applicable">Not Applicable</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              className="form-textarea"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
