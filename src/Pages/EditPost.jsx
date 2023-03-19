import React, {useState, useEffect} from "react"
import "../assets/css/update.css"

import axios from "axios"
import {useParams, Link, useNavigate} from "react-router-dom"

export default function EditPost() {
  const navigate = useNavigate()
  const {id} = useParams()
  //   console.log(id)

  const [update, setUpdate] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      //   .get(`http://localhost:5000/api/v1/updates/${id}`)
      .get(`https://conferenceapi.onrender.com/api/v1/updates/${id}`)
      .then((res) => {
        // console.log(res.data)
        setUpdate(res.data.update)
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
      //   .patch(`http://localhost:5000/api/v1/updates/${id}`, {update})

      //   This is for production
      .patch(`https://conferenceapi.onrender.com/api/v1/updates/${id}`, {
        update,
      })
      .then((res) => {
        // console.log(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }

  const handleDelete = (e) => {
    e.preventDefault()

    setIsLoading(true)
    axios
      // This is for local development
      //   .delete(`http://localhost:5000/api/v1/updates/${id}`, {update})

      // This is for production
      .delete(`https://conferenceapi.onrender.com/api/v1/updates/${id}`, {
        update,
      })
      .then((res) => {
        // console.log(res.data)
        setIsLoading(false)
        navigate("/admin/updatepost")
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }
  return (
    <div className="postUpdateContainer">
      <h1 className="postUpdateHeading">Edit Update</h1>

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
            value={isLoading ? "Loading..." : update}
            onChange={handleChange}
          />
        </div>
        <button className="postUpdateButton" onClick={handleSubmit}>
          {isLoading ? "Posting..." : "Edit Update"}
        </button>
        <button className="postUpdateButton" onClick={handleDelete}>
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </form>

      <div className="goBack">
        <Link to="/admin/updatepost">
          <h2>Go Back</h2>
        </Link>
      </div>
    </div>
  )
}
