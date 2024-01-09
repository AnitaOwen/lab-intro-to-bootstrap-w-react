
import { useState } from "react"
import Card from "./Card"
import PostsByLocationTable from "./PostsByLocationTable"


const Hero = ({posts}) => {
  const [searchInput, setSearchInput] = useState("")

  function filterPosts(searchInput, posts) {
    return posts.filter((post) => {
      return post.title.toLowerCase().match(searchInput.toLowerCase());
    });
  }

  function handleTextChange(event){
    const input = event.target.value
    setSearchInput(input)
  }

  function handleCancel(){
    setSearchInput("")
  }

  const filteredPosts = filterPosts(searchInput, posts)
  const result = filteredPosts.length ? filteredPosts : posts

  return (
    <main className="container mt-3 mb-3" id="hero">
      {/* Search Form */}
      <div className="row">
        <form className="d-flex" role="search">
          <label htmlFor="searchInput" className="form-label">Search posts by location...</label>
          <input
            id="searchInput"
            className="form-control flex-grow-1 me-2"
            type="search"
            aria-label="Search"
            onChange={handleTextChange}
            value={searchInput}
          />
          <button 
            className="btn btn-warning" 
            type="button" 
            onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
      
      <section className="mt-4 row">
        {/* Left Column - Cards */}
        <div className="col-9">
          <div className="row">
            {result.map((post) => (
              // left column split into 2 colums of equal size
              <div className="col-6" key={post.id}>
                <Card post={post}/>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Table */}
        <div className="col-3">
          <PostsByLocationTable posts={posts}/>
        </div>
      </section>

    </main>
  )
}

export default Hero