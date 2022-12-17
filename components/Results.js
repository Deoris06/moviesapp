import React from 'react'
import Slider from "react-slick";

export default function Result(props) {
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        // initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='container mt-5'>
        <div className='h4 mb-2'>Search Results</div>
            <Slider {...settings}>
            {props.movies.map((movie, index) => {
              
                return <div className='pr-5' key={`${index * 2}`}> <div className='card border-0 pb-3' style={{ width: '16rem'}} >
                  <div className='container__relative'>
                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className='img-fluid backdrop'/>
                    <div className='overlay'>
                      <div className='content'>
                        {movie.title}
                      </div>
                    </div>
                  </div>
               </div>
               </div>
            })}
            </Slider>
        </div>
    )
}