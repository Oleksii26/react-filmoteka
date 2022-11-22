import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Navigate = lazy(() => import('./Navigate/Navigate'))
const Home = lazy(() => import('./Home/Home'))
const Movie = lazy(() => import('./Movie/Movie'))
const MovieDetails = lazy(() => import('./Movie/MovieDetails'))
const Cast = lazy(() => import('./Movie/Other/Cast'))
const Actor = lazy(() => import('./Movie/Other/Actor'))
const Rewievs = lazy(() => import('./Movie/Other/Rewievs'))

export const App = () => {
  return (
    <Suspense fallback={<p>Page is loading...</p>}>
      <Navigate element={<Navigate />} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='rewievs' element={<Rewievs />} />
        </Route>
        <Route path='/movies/:movieId/cast/:actorId' element={<Actor />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Suspense>
  )
}
