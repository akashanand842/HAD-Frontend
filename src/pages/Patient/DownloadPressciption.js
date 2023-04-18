import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

export default function DownloadPressciption() {
   
const [pdfUrl, setPdfUrl] = useState('');
const jwtToken=localStorage.getItem('token');

axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
  const handleDownloadClick = async () => {
    try {
        const response = await axios.get('http://localhost:8081/patient/prescription/2/2', {
          responseType: 'arraybuffer',
        });
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error) {
        console.error('error on downloading prescription');
      }
    };

  return (
    <div>
      <button onClick={handleDownloadClick}>Download Prescription</button>
      {pdfUrl && (
        <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
      )}
    </div>
  )
}
