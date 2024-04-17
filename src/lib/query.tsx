const query = async (prompt: string) => {
  //fetching the response
  const res = await fetch("http://localhost:8080/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: prompt }),
  }).catch((err) => {
    console.error(err);
    return new Response("Error: Unable to connect to the server.");
  });
  return res.json();
};

export default query;
