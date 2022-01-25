import React, { useEffect, useState } from 'react';
import './App.css'

import Tmdb from './Tmdb'
import MovieRow from './Components/js/MovieRow';

import FeaturedMovie from './Components/js/FeaturedMovie';  

import Header from './Components/js/Header';

export default () => {

  const [ movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  
  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total dos filmes 

      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter(
        i => i.slug === 'originals'
      );
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');

      setFeaturedData(chosenInfo);
    }
    loadAll();
  },[]);

  useEffect(() =>{
    const scrollListener = () => {
      window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false);
    }
    window.addEventListener('scroll',scrollListener);
    return () => {
      window.addEventListener('scroll',scrollListener)
    }
  },[])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item = {featuredData} />
      }

      <section className ='lists'>
        {movieList.map((item,chave) => (
          <MovieRow 
            key={chave}
            title = {item.title}
            items = {item.items}
          />
        ))}
      </section>
          <footer>
            Direitos de imagem para Neflix <br/>
            Dados pegos da api Themovie.org
          </footer>
    </div>
  )

}