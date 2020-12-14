import React from 'react'
import StarIcon from './StarIcon';

export default function RatingIcon(props) {
    const {
        index,
        rating,
        hoverRating
    } = props;

    const fill = React.useMemo(() => {
        if (hoverRating >= index) {
            return "#F59E0B";
        } else if (!hoverRating && rating >= index) {
            return "#F59E0B";
        }
        return "none";
    }, [rating, hoverRating, index]);


    return (
        <div className="cursor-pointer">
            <StarIcon fill={fill} />
        </div>
    );
}
