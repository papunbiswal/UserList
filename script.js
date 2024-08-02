document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.getElementById('users');
  
    // Fetch users from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        users.forEach((user) => {
          const userElement = createUserElement(user);
          usersContainer.appendChild(userElement);
        });
      })
      .catch((error) => console.error('Error fetching users:', error));

      
    // Function to create user elements
    function createUserElement(user) {
      const userElement = document.createElement('div');
      userElement.classList.add('user');
      userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
        `;
      return userElement;
    }
  
  });
  