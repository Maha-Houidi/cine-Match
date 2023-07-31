"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [searchText, setSearchText] = useState("")
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchText){
      router.push(`/movies/search?query=${searchText}`)
    }
  }

  return (
    <div>
        <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" href='/'>CineMatch</Link>
                <form className="d-flex" role="search" onSubmit={e => handleSubmit(e)}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearchText(e.target.value)} />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Header