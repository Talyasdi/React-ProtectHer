import { useState } from "react";
import { useNavigate } from "react-router-dom";
import generateText from './HarassmentChecker';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [generatedText, setGeneratedText] = useState(''); // State to hold generated text
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Call generateText function with the entered text
    const result = await generateText(body);
    
    // Update state with the generated text
    setGeneratedText(result);

    // Now you can use the generated text in your component or perform further actions
  }

  return (
    <div className="create">
      <h2>Harmful Content Checker</h2>
      <form onSubmit={handleSubmit}>
        <label>Insert text here:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
       
        <button>Check Text</button>
      </form>

      {/* Display the generated text in the component */}
      {generatedText && (
        <div>
          <h3>Generated Text:</h3>
          <p>{generatedText}</p>
        </div>
      )}
    </div>
  );
}
 
export default Create;
