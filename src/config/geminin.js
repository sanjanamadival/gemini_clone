


// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  */

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   }  from "@google/generative-ai"
  
//   const apiKey = "AIzaSyBR985iXRc7J_m3PPI36dWVrD0Yz26XkXo";
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     console.log(result.response.text());
//     return response.text();
//   }
  
//   export default run;

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyBR985iXRc7J_m3PPI36dWVrD0Yz26XkXo";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [],
      });
  
      const result = await chatSession.sendMessage(prompt);
      // `result.response.text()` is likely correct; ensure `result.response` exists
      const responseText = await result.response.text(); // Use await to get the text
      console.log(responseText); // Log the text
      return responseText; // Return the text
    } catch (error) {
      console.error('Error in run function:', error); // Error handling
      throw error; // Optionally rethrow or handle error
    }
  }
  
  export default run;
  