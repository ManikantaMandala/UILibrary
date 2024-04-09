interface RatingStarsProps{
    rating: number;
}

export default function RatingStars({rating}: RatingStarsProps){
    const MaxStars = 5;

    function ratingArray(): string[]{
        let RatingArray = [];
        for(let i=0;i<MaxStars;i++){
            if(rating>0){
                RatingArray.push("filled");
                rating--;
            }
            else{
                RatingArray.push("empty");
            }
        }
        return RatingArray;
    }
    const ratingArr = ratingArray();

    return (
        <div className="rating-stars" style={{display: "flex", flexDirection: "row"}}>
            {
                ratingArr.map((star, index)=>(
                    star === "filled" ? 
                        <span key={index}> 
                            <img src="/filled-star.svg" alt="star" />
                        </span>:
                        <span key={index}>
                            <img src="/half-star.svg" alt="star" />
                        </span>
                ))
            }
        </div>
    )
}
