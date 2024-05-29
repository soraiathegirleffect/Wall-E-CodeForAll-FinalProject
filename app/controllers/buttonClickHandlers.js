import getFruit from "../services/fruitService";

export async function onSubmitFruit(event) {
  try {
    //Do we need to select the input field with Dom??? - To check!
    const fruit = fruit.value;
    const fruitDetails = await getFruit(fruit);
    renderFruit(fruitDetails); // - renderFruit function TO BE ADDED TO THE VIEW!
  } catch (error) {
    renderAlert(); // renderAlert function to be added to the view
  }
}
