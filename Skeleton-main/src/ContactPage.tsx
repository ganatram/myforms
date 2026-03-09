import { FormEvent } from 'react';
import { ActionFunctionArgs, Form, redirect, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  /*  const [contact, setContact] = useState<Contact>({
    name: '',
    email: '',
    reason: '',
    notes: '',
  }); */
  const fieldStyle = 'flex flex-col mb-2';

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  function customFormMethod(contact: Contact) {
    console.log('Submitted details', contact); // invoking the contact object

    return redirect(`/thank-you/${contact.name}`);
  }

  /*   function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const contact = {
      name: formData.get('name'),
      email: formData.get('email'),
      reason: formData.get('reason'),
      notes: formData.get('notes'),
    };

    console.log('Submitted details', contact); // invoking the contact object
  } */

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
      <form onSubmit={handleSubmit(customFormMethod)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" {...register('name')} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" {...register('email')} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select id="reason" {...register('reason')}>
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register('notes')} />
        </div>
        <div>
          <button type="submit" className="mt-2 h-10 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

/* export async function contactPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData(); // .then() - waits for promise to resolve - safeguard

  const contact = {
    name: formData.get('name'),
    email: formData.get('email'),
    reason: formData.get('reason'),
    notes: formData.get('notes'),
  };

  console.log('Submitted details', contact); // invoking the contact object

  return redirect(`/thank-you/${formData.get('name')}`);
} */
