# GitHub File Uploader using JavaScript

This project provides a simple web-based interface to upload files to a GitHub repository using the GitHub REST API and JavaScript.

## Description

The included HTML and JavaScript files allow a user to select a file from their local machine and upload it to a specified GitHub repository. This is achieved by using a GitHub Personal Access Token for authentication and making a `PUT` request to the GitHub API. The file content is encoded in Base64 before being sent.

## Setup

### 1. Personal Access Token

To use this script, you need a GitHub Personal Access Token with the `repo` scope. Follow these steps to generate one:

1.  Go to your GitHub **Settings**.
2.  Navigate to **Developer settings**.
3.  Click on **Personal access tokens**.
4.  Click on **Generate new token**.
5.  Give your token a descriptive name in the "Note" field.
6.  Under "Select scopes," check the box for `repo`. This will grant full control of private repositories.
7.  Click **Generate token** at the bottom of the page.
8.  **Important:** Copy your new personal access token. You won’t be able to see it again!

### 2. HTML and JavaScript Files

Place the `index.html` and `upload.js` files in the same directory. You can open the `index.html` file in your web browser to use the uploader.

## Usage

1.  Open the `index.html` file in a web browser.
2.  Enter your GitHub Personal Access Token in the designated field.
3.  Enter your GitHub username.
4.  Enter the name of the repository you want to upload the file to.
5.  Click "Choose a file to upload" and select the file from your local machine.
6.  Click the "Upload File" button.
7.  You will receive an alert indicating whether the file was uploaded successfully or if an error occurred.

## How It Works

The `upload.js` script performs the following actions:

1.  **Gathers User Input:** It retrieves the personal access token, username, repository name, and the selected file from the HTML input fields.
2.  **File Reading:** It uses the `FileReader` API to read the content of the selected file as a data URL. This process encodes the file content into a Base64 string.
3.  **API Request:** It constructs a `PUT` request to the GitHub API endpoint for creating or updating a file: `https://api.github.com/repos/{username}/{repo}/contents/{fileName}`.
4.  **Authentication:** The Personal Access Token is included in the `Authorization` header of the request.
5.  **Request Body:** The request body is a JSON object containing a commit message and the Base64 encoded file content.
6.  **Response Handling:** It handles the response from the GitHub API to notify the user of the upload status.

## Security Considerations

-   **Token Security:** Your Personal Access Token is sensitive and should be treated like a password. Do not hardcode it directly in the JavaScript file if you are deploying this to a public website. The current example is intended for local or private use. For a production environment, consider more secure ways to handle authentication, such as using an OAuth flow.
-   **Browser Environment:** This script is designed to be run in a web browser. It does not require any server-side code.
