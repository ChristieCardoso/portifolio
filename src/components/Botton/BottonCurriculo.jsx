import { FaCloudDownloadAlt, FaHdd } from "react-icons/fa";

import "./BottonCurriculo.scss";

export const BottonCurriculo = () => {
  const resumeLink = ' https://raw.githubusercontent.com/ChristieCardoso/christiecardoso/main/CV.pdf';

  const handleDownload = async () => {
    const response = await fetch(resumeLink);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV.pdf';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <button className="face-button" type="button" data-dl onClick={handleDownload}>
        <span className="face-primary">
          <FaCloudDownloadAlt />
          Currículo
        </span>
        <span className="face-secondary">
          <FaHdd />
          Size: 148 kb
        </span>
      </button>
    </>
  )
}