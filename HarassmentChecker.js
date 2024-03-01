const generateText = async (val) => {
  const api_key = "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";

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${api_key}`
  };

  let messages;
  const input = val;
  const preMsg = "im gonna give you a conversation between young girl and someone else. please tell me if you this it can be offensive or harmfull. answer yes or no with one sentence of explenation: ";
  const prompt = preMsg + input;
  const model = "gpt-3.5-turbo";

  messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: prompt }
  ];

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        model: model,
        messages: messages,
        max_tokens: 100,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content.trim();
    return generatedText;
  } catch (error) {
    console.error('Error:', error);
    return null; // Handle errors accordingly
  }
};

export default generateText;
