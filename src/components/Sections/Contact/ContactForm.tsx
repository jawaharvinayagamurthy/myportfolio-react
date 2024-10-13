import {FC, memo, useCallback, useMemo, useState} from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(() => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [message, setMessage] = useState<string | null>(null); // For custom messages


  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};
      setData({...data, ...fieldData});
    },
    [data],
  );

  // Convert FormData to plain JavaScript object
  const convertToEmailJSData = (data: FormData): Record<string, any> => {
    return {
      name: data.name,
      email: data.email,
      message: data.message,
    };
  };

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // EmailJS configuration
      const serviceId = 'service_xscgp6a';  // Replace with your EmailJS service ID
      const templateId = 'template_myprofile';  // Replace with your EmailJS template ID
      const userId = 'xcUpoDM9drrllu6RO';  // Replace with your EmailJS User ID (API key)
      try {
        // Convert 'data' to a format that EmailJS expects
        const emailData = convertToEmailJSData(data);
        // Send the form data via EmailJS
        const result = await emailjs.send(
          serviceId,
          templateId,
          emailData,
          userId
        );

        console.log('Email successfully sent:', result);
        setMessage('Message sent successfully!');
        // Clear the input fields by resetting the data state
        setData(defaultData); // Reset to initial state
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send the message. Please try again later.');
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  const Modal = ({ message, onClose }: { message: string; onClose: () => void }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-md">
        <p>{message}</p>
        <button onClick={onClose} className="mt-2 text-blue-500">
        Close
        </button>
      </div>
    </div>
  );

  return (
      <>
        <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
          <input
            className={inputClasses}
            name="name"
            onChange={onChange}
            value={data.name}
            placeholder="Name"
            required
            type="text"
          />
          <input
            autoComplete="email"
            className={inputClasses}
            name="email"
            onChange={onChange}
            value={data.email}
            placeholder="Email"
            required
            type="email"
          />
          <textarea
            className={inputClasses}
            maxLength={250}
            name="message"
            onChange={onChange}
            value={data.message}
            placeholder="Message"
            required
            rows={6}
          />
          <button
            aria-label="Submit contact form"
            className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
            type="submit"
          >
            Send Message
          </button>
        </form>
        
        {message && (
          <Modal
            message={message}
            onClose={() => setMessage(null)} // Close modal
          />
        )}
      </>
    );
  });

ContactForm.displayName = 'ContactForm';
export default ContactForm;
