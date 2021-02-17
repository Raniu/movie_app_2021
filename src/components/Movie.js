import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"
import { Link } from 'react-router-dom';

//Movie 컴포넌트는 state가 필요하지 않으므로 함수형 컴포넌트로 작성
function Movie({ id, title, year, summary, poster, genres }){
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: { year, title, summary, poster, genres },
                }}
                // to={{
                //     pathname: `/movie/${id}`,
                //     state: { year, title, summary, poster, genres },
                // }}
            >
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p> 
                    <ul className="movie__genres">
                        {genres.map((genres, index) => {
                            return (
                                <li key={index} className="movie__genre">
                                    {genres}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Link>
        </div>
    );
}

//props는 아래 propsTypes를 통해서 정의할 수 있습니다.
Movie.propTypes = { 
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // 이미지 주소(문자열) 저장
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie; //export해줘야 다른 js에서 Movie라는 component를 사용할 수 있움