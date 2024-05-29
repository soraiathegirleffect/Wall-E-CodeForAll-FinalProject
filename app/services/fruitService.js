// Fetch fruit nutritional properties
async function getFruit(fruit) {
  const url = "" + fruit; // To complete URL

  const response = await fetch(url);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}