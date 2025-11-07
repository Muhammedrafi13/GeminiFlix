

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="py-6 text-lg w-2/4">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-white/80">Play</button>
                <button className="mx-2 bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg hover:bg-gray-500/90">More Info</button>
            </div>

        </div>
    )
}

export default VideoTitle