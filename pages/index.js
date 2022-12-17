import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import tmdb from './api/tmdb';
import Slider from "react-slick";
import Results from '../components/Results';


const Home = () => {
  const [popular, setPopular]  = useState([])
  const [upcoming, setUpcoming]  = useState([])
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }
  const getPopular = async(categoryName) => {
    const response = await tmdb.get(`movie/${categoryName}?`);
    setPopular(response.data.results);
  }
  const getUpcoming = async(categoryName) => {
    const response = await tmdb.get(`movie/${categoryName}?`);
    setUpcoming(response.data.results);
  }
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=6237306c868ae04c6d8dcb290b517e37&query=";
  const getSearchedMovies = () => {
    // console.log(SEARCHAPI + search)
    axios.get(
      SEARCHAPI + search
    )
      .then(
        (response) => {
          console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => { 
          console.log(error);
        }
      )
  }
  
  useEffect(()=> {
    const popular = getPopular('popular');
    const upcoming = getUpcoming('upcoming');
    // console.log(getSearchedMovies('Black'))
    if(search === ""){
       return;
    }else{
      getSearchedMovies()
    }
  }, [search])
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
    <Layout>
      <div className='hero'>
        <div className='hero__heading container text-centered pt-5'>
          <div className='display-4 text-white'>
            Watch <br/>Something <br/> Incredible.
          </div>
        </div>
      </div>
      <div className='search mt-5'>
          <div className='container'>
            <div className='search__heading mb-2'>Search</div>
            <input className="form-control" value={search} onChange={changeTheSearch} type="text" name='search' placeholder="Search..." aria-label="search" />
          </div>
      </div>
      { movies.length === 0 ? null : <Results movies={movies} /> }
      
      <div className='mt-5 container'>
          <div className='h4 mb-2'>Popular</div>
          
            <Slider {...settings}>
            {popular.map((movie, index) => {
              
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
          
          <div className='h4 mb-2 mt-5'>Upcoming</div>

            <Slider {...settings}>
            {upcoming.map((movie, index) => {
             
                return <div className='pr-5' key={`${index}`}> <div className='card border-0 pb-5' style={{ width: '16rem'}} >
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
    </Layout>
  )
}


export default Home;
