import { useState } from "react";
import './styles.css';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1 style={{ color: 'green' }}>Correct!</h1>;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextAreaChange(event) {
    setAnswer(event.target.value);
  }

  return (
    <>
      <h3>City Quiz</h3>
      <p>Which city is the capital of Brazil?</p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextAreaChange} disabled={status === 'submitting'}></textarea>
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>

        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldError = answer.toLowerCase() !== 'distrito federal';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}