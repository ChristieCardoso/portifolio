import "./BottonCurriculo.scss";


export const BottonCurriculo = () => {
  document.addEventListener("DOMContentLoaded", function () {
    this.addEventListener("click", e => {
      let tar = e.target;
      if (tar.hasAttribute("data-dl")) {
        let dlClass = "dl-working";
        if (!tar.classList.contains(dlClass)) {
          let lastSpan = tar.querySelector("span:last-child"),
            lastSpanText = lastSpan.textContent,
            timeout = getMSFromProperty("--dur", ":root");

          tar.classList.add(dlClass);
          lastSpan.textContent = "Downloading…";
          tar.disabled = true;

          setTimeout(() => {
            lastSpan.textContent = "Completed!";
          }, timeout * 0.9);

          setTimeout(() => {
            tar.classList.remove(dlClass);
            lastSpan.textContent = lastSpanText;
            tar.disabled = false;
          }, timeout + 1e3);
        }
      }
    });
  });
  function getMSFromProperty(property, selector) {
    let cs = window.getComputedStyle(document.querySelector(selector)),
      transDur = cs.getPropertyValue(property),
      msLabelPos = transDur.indexOf("ms"),
      sLabelPos = transDur.indexOf("s");

    if (msLabelPos > -1)
      return transDur.substr(0, msLabelPos);
    else if (sLabelPos > -1)
      return transDur.substr(0, sLabelPos) * 1e3;
  }

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
    <div className="ButtonContainer">
      <h3 className="ButtonTitle">Currículo</h3>
      <button type="button" data-dl onClick={handleDownload}>
        <span className="dl-icon"></span><span>Download</span>
      </button>
    </div>
  )
}