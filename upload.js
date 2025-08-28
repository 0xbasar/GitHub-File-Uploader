// A function to handle the file upload
async function uploadFile() {
  // Get the personal access token, repository details, and file from the user
  const token = document.getElementById('token').value;
  const repo = document.getElementById('repo').value;
  const username = document.getElementById('username').value;
  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file to upload.");
    return;
  }

  const reader = new FileReader();

  reader.onload = async function(e) {
    const content = e.target.result.split(',')[1]; // Get the base64 encoded content

    const url = `https://api.github.com/repos/${username}/${repo}/contents/${file.name}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Upload ${file.name}`,
        content: content
      })
    });

    if (response.ok) {
      alert("File uploaded successfully!");
    } else {
      const error = await response.json();
      alert(`Error uploading file: ${error.message}`);
    }
  };

  reader.readAsDataURL(file); // Read the file as a data URL
}
