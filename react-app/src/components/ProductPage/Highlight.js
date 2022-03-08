import { useEffect, useState } from "react";
import './Highlight.css'

function Highlight({ string }) {
  const [tooLong, setTooLong] = useState(false);
  const [icon, setIcon] = useState("<i class='fa-solid fa-plus'></i>");

  useEffect(() => {
    if (string.length > 43) setTooLong(true)
    if (string.includes("Handmade")) setIcon("<i class='fa-solid fa-hands'></i>")
    if (string.includes("Materials")) setIcon("<i class='fa-solid fa-toolbox'></i>")
  }, [])

  return (
    <div className="highlight-div">
      <div dangerouslySetInnerHTML={{ __html: icon }}></div>
      {tooLong ?
        <div className="overflow-div">
          <p className="overflow">{string} </p>
          <button
            className="ellipsis-button"
            onClick={() => setTooLong(false)}
          >...</button>
        </div> :
        <p className="highlight-text">{string}</p>}
    </div>
  )
}

export default Highlight;
