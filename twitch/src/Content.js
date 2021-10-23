import { contents } from "./contents"
const Content = () => {
    return (
        <div className="body">
         <div className="contents">
             <h1 className="title">Browse</h1>
             <div className="flexing">
             <div className="options">
                    <h3 className="game">Games</h3>
                    <img className="console" src="https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg" alt="" />
             </div>

             <div className="options">
                    <h3 className="game">IRL</h3>
                    <img className="console" src="https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg" alt="" />
             </div>
             <div className="options">
                    <h3 className="game">Music</h3>
                    <img className="console" src="https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg" alt="" />
             </div>
             <div className="options">
                    <h3 className="game">Esports</h3>
                    <img className="console" src="https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg" alt="" />
             </div>
         </div>
         <div className="selection">
             <h2 className="category active">Categories</h2>
             <h2 className="live">Live Channels</h2>
         </div>
         <div className="searchCategory">
             <div className="inputs">
                 <h3 className='filter'>Filter By</h3>
                 <div className="display">
                 <input type="text" placeholder="Search Tags" className="enter"/>
                 </div>
             </div>
             <div className="sort">
             <h3 className='filter'>Sort By</h3>
             <div className="choose">
                 <select name="choices" className="down">
                     <option value="">Recommended For You</option>
                 </select>
             </div>
                 </div>
         </div>

         <div className="twitch">
             {contents.map((content) => {
                 const {img,niche,views} = content;
                 return (
                    <>
                     <div className="listings">
                    <img className="img" src={img} alt="" />
                    <h4 className="niche">{niche}</h4>
                    <h3 className="views">{views}</h3>
                    </div>
                    </>
             )
             })}
         </div>
         </div>
        </div>
    )
}

export default Content
