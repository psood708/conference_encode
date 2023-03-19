import React, {useState, useEffect} from "react"
import "../assets/css/update.css"

import axios from "axios"
import {Link} from "react-router-dom"

export default function UpdatePost() {
  const [update, setUpdate] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [allUpdates, setAllUpdates] = useState([])

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`https://conferenceapi.onrender.com/api/v1/updates/`)
      .then((res) => {
        // console.log(res.data)
        setAllUpdates(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }, [])

  const handleChange = (e) => {
    setUpdate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log({update})
    setIsLoading(true)
    axios
      // This is for local development
      // .post("http://localhost:5000/api/v1/updates", {update})

      // This is for production
      .post("https://conferenceapi.onrender.com/api/v1/updates", {update})
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

      <div className="postUpdateContainer">
        <h1 className="postUpdateHeading">All Updates</h1>

        <div className="allUpdates">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <ol className="updateListContainer">
              {allUpdates.map((update) => (
                <Link key={update._id} to={`/admin/editpost/${update._id}`}>
                  <li className="update">{update.update}</li>
                </Link>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  )
}
