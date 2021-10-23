import React from 'react'
import {data} from "./following";
import {recommended} from './recommended';
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="header">
                    <h4 className='channels'>FOLLOWED CHANNELS</h4>
                </div>
                <div className="content">
                    {data.map((items) => {
                        const {img,name,status} = items;
                        return (
                            <>
                           <div className="items">
                           <img src={img} alt=""/>
                            <h4 className="name">{name}</h4>
                            <p>{status}</p>
                           </div>
                            </>
                        )
                    })}
                </div>
                <p className="more">Show More</p>
                <div className="recommended-channels">
                    <h4 className='recommended'>Recommended Channels</h4>
                    <div className="channel">
                        <div className="div">
                            {recommended.map((item) => {
                                console.log(item)
                                const {image,views,title} = item;
                                return (
                                    <>
                                   <div className="recommend">
                                   <img src={image} alt="" />
                                    <h4 className='hello'>{title}</h4>
                                    <div className="center">
                                    <span className="watch"></span>
                                    <h4>{views}</h4>
                                    </div>
                                   </div>
                                    </>

                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar
