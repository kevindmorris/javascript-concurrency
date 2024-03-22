const axios = require("axios");

// Fetch random user data from the API
async function getRandomUser() {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    return response.data.results[0];
  } catch (error) {
    console.error("Error fetching random user:", error);
    throw error;
  }
}

// Example usage:
async function main() {
  try {
    const randomUser = await getRandomUser();
    console.log("Random user:", randomUser);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
