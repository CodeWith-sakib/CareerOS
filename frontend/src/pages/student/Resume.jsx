import { useState } from 'react';
import { Upload, FileText, Trash2 } from 'lucide-react';
import './Resume.css';

export default function Resume() {
  const [file, setFile] = useState(null);

  function handleDrop(e) {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
    }
  }

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  }

  return (
    <div className="resume-page">
      <h1 className="page-title">Resume</h1>
      <p className="page-subtitle">Upload and manage your resume for job applications</p>

      <div className="resume-card">
        {!file ? (
          <div
            className="upload-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <Upload size={40} className="upload-icon" />
            <h3>Drag & drop your resume here</h3>
            <p>or click to browse files</p>
            <p className="upload-hint">Supports PDF, DOC, DOCX (Max 5MB)</p>
            <label className="upload-btn">
              Choose File
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                hidden
              />
            </label>
          </div>
        ) : (
          <div className="file-preview">
            <div className="file-info">
              <FileText size={32} className="file-icon" />
              <div>
                <p className="file-name">{file.name}</p>
                <p className="file-size">{(file.size / 1024).toFixed(1)} KB</p>
              </div>
            </div>
            <button className="remove-btn" onClick={() => setFile(null)}>
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
