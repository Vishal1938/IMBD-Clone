import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./card.css"; 

const CardComponent = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(loadingTimeout); // Clear timeout on unmount
    }, []);

    if (!movie) {
        return null;
    }

    const { id, poster_path, original_title, release_date, vote_average, overview } = movie;

    return (
        <>
            {isLoading ? (
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
            ) : (
                <Link to={`/movies/details/${id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div className="cards">
                        <img
                            className="cards__img"
                            src={`https://image.tmdb.org/t/p/original${poster_path}`}
                            alt={original_title}
                        />
                        <div className="cards__overlay">
                            <div className="card__title">{original_title}</div>
                            <div className="card__runtime">
                                {release_date}
                                <span className="card__rating">
                                    {vote_average}
                                    <i className="fas fa-star" />
                                </span>
                            </div>
                            <div className="card__description">
                                {overview.slice(0, 118) + "..."}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

export default CardComponent;
