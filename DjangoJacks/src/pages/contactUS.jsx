import React, { useState } from 'react';

// --- SVG Icon Components (unchanged) ---
const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-indigo-300"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> );
const MailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-indigo-300"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> );
const LocationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-indigo-300"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> );
const FacebookIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> );
const LinkedInIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> );
const TwitterIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1.4 1.2-3.1 2-4.9 2.4-2.1 1-4.5 1.4-7.1 1.2-2.2-.2-4.4-.8-6.5-1.8-1.5-.7-2.9-1.5-4.2-2.5.3 1.1.9 2.1 1.7 3 1.4 1.5 3.2 2.6 5.1 3.2 2.3.7 4.7.9 7.1.6 2.3-.3 4.5-1 6.5-2.1 1.5-.8 2.8-1.9 3.9-3.1.2.3.4.7.5 1.1.2 1.1-.1 2.3-.8 3.3-1.4 2-3.6 3.2-6.1 3.5-2.5.3-5-.1-7.2-1.2-2.5-1.2-4.6-2.9-6.2-5.1-1.3-1.8-2-3.9-2-6.2 0-2.2.8-4.3 2.1-6 1.2-1.5 2.8-2.6 4.7-3.2 2.2-.7 4.5-.8 6.8-.4 2.5.4 4.9 1.4 7 2.8 1.1.7 2.2 1.6 3.1 2.7.1-.1.3-.2.4-.3.1 0 .2-.1.3-.1.3-.1.5-.2.8-.3 1.3-.6 2.5-1.4 3.6-2.4-1 .9-2 1.7-3.1 2.5-1.1.8-2.3 1.5-3.5 2z"/></svg> );


function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "web-development",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus("success");
    setTimeout(() => setSubmissionStatus(null), 4000);
  };

  return (
    <div className="w-full md:w-2/3 p-6 sm:p-8">
      {submissionStatus && (
        <div
          className="mb-4 p-3 text-sm text-green-700 bg-green-100 rounded-md"
          role="alert"
        >
          Your message has been sent.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="+1 234 567 890"
          />
        </div>

        {/* Service Type */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2 px-3 py-2">
            What type of user are you?
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {["Alumni", "Student", "College Admin", "Other"].map(
              (service) => {
                const serviceId = service.toLowerCase().replace(" ", "-");
                return (
                  <div className="flex items-center" key={serviceId}>
                    <input
                      id={serviceId}
                      name="serviceType"
                      type="radio"
                      value={serviceId}
                      checked={formData.serviceType === serviceId}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={serviceId}
                      className="ml-2 block text-sm text-gray-900"
                    >
                      {service}
                    </label>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#4c3a9a] hover:bg-[#3b2d7a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}



function ContactInfoPanel() {
    return (
        <div className="w-full md:w-1/3 bg-[#4c3a9a] text-white p-8 relative overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-t-none flex flex-col justify-center">
            <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-1">Contact Information</h2>
                <p className="text-indigo-200 mb-6 text-sm">Our team will get back to you within 24 hours.</p>
                <div className="space-y-4">
                    <div className="flex items-center text-sm"> <PhoneIcon /> <span>+0123 4567 8910</span> </div>
                    <div className="flex items-center text-sm"> <MailIcon /> <span>hello@flowbase.com</span> </div>
                    <div className="flex items-center text-sm"> <LocationIcon /> <span>102 Street 2714 Don</span> </div>
                </div>
                <div className="flex space-x-4 mt-8 pt-4 border-t border-indigo-500/30">
                    <a href="#" className="text-indigo-300 hover:text-white"><FacebookIcon /></a>
                    <a href="#" className="text-indigo-300 hover:text-white"><LinkedInIcon /></a>
                    <a href="#" className="text-indigo-300 hover:text-white"><TwitterIcon /></a>
                </div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#f78f8f] rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -left-10 w-32 h-32 bg-[#7b68c7] rounded-full"></div>
        </div>
    );
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen w-full flex justify-center font-sans pt-12 px-6">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            Contact Us
          </h1>
          <p className="mt-2 text-md text-gray-500">
            Any questions or remarks? Just write us a message!
          </p>
        </div>
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg p-2">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}




