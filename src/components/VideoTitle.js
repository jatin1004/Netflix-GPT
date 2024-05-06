
const VideoTitle = ({title, overview}) => {
    return <div className="w-[100%] aspect-video pt-[20%] px-16  absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold w-1/2">{title}</h1>
        <p className="text-xl py-6 w-2/4">{overview}</p>
        <div className="">
            <button className="bg-white p-3 px-12 text-black rounded-md font-semibold hover:bg-opacity-70"> ▶️ Play</button>
            <button className="bg-gray-500 p-3 px-10 text-black rounded-md font-semibold mx-2 bg-opacity-55 hover:bg-white">⚠️ More Info</button>
        </div>
    </div>
};

export default VideoTitle;