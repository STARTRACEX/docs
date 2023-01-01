import Styled from "./css.js"
function OB() {
   return (
      <div className="overbreath">
         <span className="overbreathpart">
            <span className="overbreathroot">Developer.</span>
            <span className="overbreathtext">Developer.</span>
         </span>
         <span className="overbreathpart">
            <span className="overbreathroot">Full Stack.</span>
            <span className="overbreathtext">Full Stack.</span>
         </span>
         <span className="overbreathpart">
            <span className="overbreathroot">Bug Maker.</span>
            <span className="overbreathtext">Bug Maker.</span>
         </span>
      </div>
   )
}

export default function () {
   return <><Styled /><OB /></>
}