import "./write.css"

export default function Write() {
  return (
    <div className="write">
       {/* <img
        className="writeImg"
        src=
        alt=""
      /> */}
      <form className="writeForm">
        <div className="writeFormGroup">
        <label htmlFor="fileInput"> 
        <i className="writeIcon fas fa-plus"></i>
           </label> 
        <input  type="file" id="fileInput" style={{ display: "none" }} />
          
          <input type="text"
            className="writeInput"
            placeholder="Title"
            
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
         
    
          <textarea
           className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Post
        </button>
        <button className="writeDelete" type="delete">
          Delete
        </button>
      </form>

    </div>
  )
}
  