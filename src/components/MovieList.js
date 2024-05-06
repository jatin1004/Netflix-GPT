import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (  
      <div className="p-3 ">
        <h1 className="text-4xl font-semibold pb-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll overflow-y-scroll no-scrollbar">
          <div className="flex">
            {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
            
          </div>
        </div>
      </div>
  );
};
export default MovieList;
