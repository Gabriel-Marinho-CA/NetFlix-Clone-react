import React from 'react';
import '../scss/FeaturedMovie.css';
import  Tmdb from '../../Tmdb'


export default ({item})  => {  
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return(
       <section className="featured"
        style = {{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}
       >
         <div className="featured--vertical">
             <div className="featured--horizontal">
                 <h2 className="featured--name">{item.original_name}</h2>
                 <div className="featured--info">
                     <div className="featured--points">{item.vote_average} pontos</div>
                     <div className="featured--year"> {firstDate.getFullYear()}</div>
                     <div className = "featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                     <div className="featured--description">
                         <p className="descrição">{item.overview} </p>
                         </div>
                     <div className="featured--buttons">
                        <a className="featured--watchbutton" href = {`/watch/${item.id}`} >► Assistir</a>
                        <a className="featured--mylistbutton" href = {`/list/add/${item.id}`} >+ Minha Lista</a>
                     </div>
                     <div className="featured--gener"><strong>Gêneros: </strong> 
                            {genres.join(', ')}
                      </div>
                 </div>

             </div>
         </div>

       </section>
    )
}
