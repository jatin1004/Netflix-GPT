import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) =>{
    return <div className="w-48 pr-4 cursor-pointer ">
        <img className="border border-gray-400"  alt="Movie Card" src= {IMG_CDN + posterPath} />
    </div>
}
export default MovieCard;