import React from 'react'
import { getMovies } from '@/utils/requests';
import SearchResults from '@/app/components/SearchResults';

async function SearchPage ({searchParams}) {
    const searchText = searchParams.query;
    const movies = await getMovies(searchText)

  return (
    <SearchResults searchText={searchText} movies={movies}></SearchResults>
  )
}

export default SearchPage