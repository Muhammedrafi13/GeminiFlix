import Header from "./Header"
import useNowPlayingMovies from "./hooks/useNowPlayingMovies"
import MainContaniner from "./MainContaniner";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContaniner />
      <SecondaryContainer />
    </div>
  )
}

export default Browse