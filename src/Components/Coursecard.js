import React, { useState } from "react";
import './Coursecard.css';

import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";

function Coursecard(props) {
    
    const [like, setLike] = useState(false);
    let item = props.item;
    let likedList = props.likedList;
    let setLikedList = props.setLikedList;
    function likeHandler() {
        if (likedList.has(item.id)) {
            likedList.delete(item.id);
            setLike(false);
            toast.warning("Liked Removed");
        } else {
            setLikedList(likedList.add(item.id));
            setLike(true);
            toast.success("Course Liked Successfully");
        }

    }
    const [readMore, setReadMore] = useState("Read More")
    const [desc, setDesc] = useState(`${item.description.substring(0, 100)}...`)
    function readMoreHandler() {
        if (readMore === "Read More") {
            setDesc(item.description);
            setReadMore("Show Less");
        } else {
            setDesc(`${item.description.substring(0, 100)}...`);
            setReadMore("Read More");
        }
    }
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={item.image.url} alt={item.image.alt} />
                <button className="fclike" onClick={likeHandler}>

                    {
                        like ? <FcLike fontSize={30} /> : <FcLikePlaceholder fontSize={30} />
                    }
                </button>
            </div>
            <h3>{item.title}</h3>
            <p>
                {desc}
                <span onClick={readMoreHandler}>{readMore}</span>
            </p>
        </div>
    );
}
export default Coursecard;