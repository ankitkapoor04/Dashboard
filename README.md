# User Management Dashboard

## Overview

This is a **User Management Dashboard** built using **Angular**, allowing users to view, add, edit, and delete user details fetched from a mock backend API. The application interacts with **JSONPlaceholder's** '/users' endpoint to simulate CRUD operations on user data.

## Features

- **View Users**: Displays a list of users with details such as ID, First Name, Last Name, Email, and Department.
- **Add Users**: A form allows adding new users. The form validates the user inputs before submission. The user data is sent to the mock backend, and a simulated response is returned.
- **Edit Users**: Existing user data can be edited. The current user data is fetched, edited, and updated via a PUT request to the mock backend API.
- **Delete Users**: Users can be deleted by sending a delete request to the backend API.
- **Pagination**: Pagination has been implemented to manage and display a limited number of users per page for better performance.
- **Client-Side Validation**: The form used to add/edit users includes client-side validation, ensuring that all fields are filled out correctly before submission.
- **Responsive UI**: The dashboard is fully responsive across all devices, from desktops to mobile phones.
- **Toast Notifications**: Toast messages are displayed to inform the user about the status of actions such as adding, editing, or deleting users.

## Technologies Used

- **Angular** (for building the frontend)
- **HTML, CSS** (for the structure and styling)
- **JSONPlaceholder API** (for mock backend interaction)
- **Bootstrap** (for responsive design and layout)
- **RxJS** (for handling asynchronous HTTP requests)

## Installation

To run the project locally, follow these steps:

### Prerequisites

- Install [Node.js](https://nodejs.org/) (v14 or above).
- Install [Angular CLI](https://angular.io/cli).

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Adarsh01208/User-dashboard
    cd User-dashboard
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the application**:

    ```bash
    ng serve
    ```

    After running this command, the application will be available at `http://localhost:4200`.

## Challenges Faced

One of the major challenges I faced was making the application responsive across different screen sizes. Since I created separate components for the sidebar and navbar, it required a significant amount of time to ensure that both components were correctly responsive across all devices. Managing layout responsiveness with Bootstrap and ensuring the sidebar collapsed properly on smaller screens was tricky. However, with adjustments to media queries and Bootstrap grid classes, I was able to resolve the issue.

## Future Improvements

- **Error Handling Enhancements**: Improve error handling to show more specific messages when the API is unreachable or returns errors.
- **Testing**: Add unit tests and integration tests to ensure that future changes don't break the functionality.
- **State Management**: Introduce state management using **NgRx** or another library for managing the state in a scalable way, especially as the app grows.
- **User Authentication**: Implement user authentication for more secure actions (like adding, editing, and deleting users).

## Submission Details

### Task Objective:

- Develop a simple web application where users can **view**, **add**, **edit**, and **delete** user details from a mock backend API.
- **UI**: Display a list of users and provide buttons or links to "Add", "Edit", and "Delete" users. Include a form for adding/editing users.
- **Backend**: Use the **JSONPlaceholder** API, specifically the `/users` endpoint to simulate CRUD operations.

### Functionality Implemented:
- **View**: Users are fetched from the **JSONPlaceholder** API's `/users` endpoint and displayed in a list.
- **Add**: A form allows the creation of new users, with data posted to the API. (Note: JSONPlaceholder simulates the addition of a user.)
- **Edit**: A user can be edited by fetching the current data, allowing the user to modify it, and then sending the updated data back to the API.
- **Delete**: A user can be deleted by sending a delete request to the API.

### Bonus Features Implemented:
- **Pagination**: Pagination has been implemented to limit the number of users displayed per page.
- **Client-Side Validation**: Form fields are validated before submission to ensure the data is correct.
- **Responsive Design**: The application layout adapts to different screen sizes, making it mobile-friendly.

### Challenges:
- The most challenging part was ensuring that the application was **responsive** on all device sizes, especially with the separate **sidebar** and **navbar** components. Managing the layout and making sure the sidebar collapsed on smaller screens took considerable effort, but it was resolved with proper media queries and Bootstrap classes.

## Acknowledgments

- Thanks to [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a mock API to facilitate development.
- Special thanks to **Bootstrap** for helping with the responsive design, making it much easier to create a mobile-friendly application.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For any queries or feedback, feel free to reach out to me:

- GitHub: [@Adarsh01208](https://github.com/Adarsh01208)
- Email: [adarsh01208@example.com](mailto:adarshsingh01209@example.com)

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
