// Fetch random user data from the API
async function getRandomUser() {
  try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
          throw new Error('Failed to fetch random user');
      }
      const data = await response.json();
      return data.results[0];
  } catch (error) {
      console.error('Error fetching random user:', error);
      throw error;
  }
}

// Example usage:
async function main() {
  try {
      const randomUser = await getRandomUser();
      console.log('Random user:', randomUser);
  } catch (error) {
      console.error('An error occurred:', error);
  }
}

main();
