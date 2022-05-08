import { RatingProps } from './Rating.props';
import style from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(style.star, {
            [style.filled]: i < currentRating,
          })}
        />
      );
    });
    setRatingArray(updateArray);
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
