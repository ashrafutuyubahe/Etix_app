import React, { useState } from "react";
import axios from "axios";

function UploadForm() {
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:7600/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setStatusMessage(response.data.message || "Data processed successfully");
      setErrorMessage("");
    } catch (error) {
      console.error("Error uploading file:", error);
      setErrorMessage("Error uploading file. Please try again.");
      setStatusMessage("");
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {statusMessage && <p style={{ color: 'green' }}>{statusMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default UploadForm;
