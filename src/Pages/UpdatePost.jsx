import React, {useState} from "react"
import "../assets/css/update.css"

import axios from "axios"

export default function UpdatePost() {
  const [update, setUpdate] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setUpdate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log({update})
    setIsLoading(true)
    axios
      .post("http://localhost:5000/api/v1/updates", {update})
      .then((res) => {
        // console.log(res.data)
        setIsLoading(false)
        setUpdate("")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="postUpdateContainer">
      <h1 className="postUpdateHeading">Post Update</h1>

      {/* Simple Form with Input Field */}
      <form className="postUpdateForm">
        <div className="formGroup">
          <textarea
            type="text"
            rows={5}
            cols={20}
            placeholder="Add Important Update"
            id="update"
            className="postUpdateInput"
            value={update}
            onChange={handleChange}
          />
        </div>
        <button className="postUpdateButton" onClick={handleSubmit}>
          {isLoading ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  )
}
