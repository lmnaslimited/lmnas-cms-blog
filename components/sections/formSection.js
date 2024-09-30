import React, { useState } from 'react';

const Form = ({ form }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    work_email: '',
    mobile: '',
    company: '',
    subscribe: true // Subscribe checked by default
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value // Update checkbox correctly
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Only execute the subscription API call if the subscribe checkbox is checked
    if (formData.subscribe) {
      try {
        const response = await fetch('blog/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.work_email }), // Correctly format the email in the request body
        });
        const result = await response.json();

        if (response.ok) {
          setMessage(result.message);
          setIsSubscribed(true);
        } else {
          setMessage(result.error || 'An error occurred. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('An error occurred. Please try again.');
      }
    }

    // Proceed with the rest of the form submission (contact email check)
    const requestBody = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email_ids: [
        {
          email_id: formData.work_email,
          is_primary: 1
        }
      ],
      phone_nos: [
        {
          phone: formData.mobile,
          is_primary_phone: 1,
          is_primary_mobile_no: 0
        }
      ],
      company_name: formData.company
    };

    const apiUrl = process.env.URL ?? '';
    const authorization = process.env.AUTH_BASE_64 ?? '';
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? '';


    const myHeaders = new Headers();
    myHeaders.append("Authorization", authorization);
    myHeaders.append("Content-Type", "application/json");

    try {
      // Check if the email exists
      const checkResponse = await fetch(`${apiUrl}/api/resource/Contact?filters=[["email_id", "=", "${formData.work_email}"]]`, {
        method: 'GET',
        headers: myHeaders,
      });

      if (!checkResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const checkData = await checkResponse.json();

      if (checkData && checkData.data && checkData.data.length > 0) {
        // Email already exists, download the PDF
        const link = document.createElement('a');
        link.href = `${strapiUrl}${form.pdf}`;
        link.target = '_blank';
        link.rel = "noopener noreferrer";
        link.download = form.pdfName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setSubmitted(true);
      } else {
        // Email does not exist, proceed with POST request
        const response = await fetch(`${apiUrl}/api/resource/Contact`, {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        if (responseData) {
          // Download the file after successful POST
          const link = document.createElement('a');
          link.href = `${strapiUrl}${form.pdf}`;
          link.target = '_blank';
          link.rel = "noopener noreferrer";
          link.download = form.pdfName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setSubmitted(true);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='px-4 mx-auto'>
      <div className='w-full h-full flex justify-center items-center mt-10'>
        <div className='mr-4 bg-white shadow-lg py-2 rounded-md '>
          <h1 className='text-3xl font-medium text-gray-800 border-b py-3 px-4 mb-4 border-th-primary'>
            {form.title}
          </h1>
          <form className='px-4 pb-4' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="first_name" className="block text-sm text-gray-800 mb-2">{form.first_name}</label>
              <input
                type='text'
                id='first_name'
                name='first_name'
                value={formData.first_name}
                onChange={handleChange}
                className='w-full border border-th-primary rounded-md px-3 py-2'
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-sm text-gray-800 mb-2">{form.last_name}</label>
              <input
                type='text'
                id='last_name'
                name='last_name'
                value={formData.last_name}
                onChange={handleChange}
                className='w-full border border-th-primary rounded-md px-3 py-2'
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="work_email" className="block text-sm text-gray-800 mb-2">{form.work_email}</label>
              <input
                type='email'
                id='work_email'
                name='work_email'
                value={formData.work_email}
                onChange={handleChange}
                className='w-full border border-th-primary rounded-md px-3 py-2'
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm text-gray-800 mb-2">{form.mobile}</label>
              <input
                type='tel'
                id='mobile'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                className='w-full border border-th-primary rounded-md px-3 py-2'
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block text-sm text-gray-800 mb-2">{form.company}</label>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleChange}
                className='w-full border border-th-primary rounded-md px-3 py-2'
                required
              />
            </div>
            <div className="mb-4 flex justify-start items-start">
              <input
                type='checkbox'
                id="checkbox"
                name="subscribe"
                checked={formData.subscribe} // Check by default
                onChange={handleChange} // Update state on change
                className='m-2 w-10 h-10'
              />
              <label htmlFor="checkbox" className='text-gray-500 text-base m-3'>
                {form.confirmation}
              </label>
            </div>
            <div>
                {message && (
                <p className="px-15 text-white  text-sm mb-4"> 
                    {message}
                </p>
                )}
            </div>
            <button
              type='submit'
              className='h-10 px-4 text-md font-bold rounded-md bg-th-primary hover:bg-th-tertiary text-white'
            >
              {form.cta}
            </button>
          </form>
          {submitted && (
            <p className="text-green-500 text-base px-4 pb-2">{form.msg}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
