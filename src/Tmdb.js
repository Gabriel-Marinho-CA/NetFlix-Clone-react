
const url = `https://api.themoviedb.org/3`;

const apiKey = `e058b76154aa2075d648452a260f59f7`;

/*
   - originais da netflix
   - recomendados (trending)
   - em alta (top rated)
   - ação
   - comedia
   - romance
   - terror
   - documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${url}${endpoint}`);
    const json = await req.json();
    // console.log(json);
    return json;
}



export default { 
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language-pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items:  await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items:  await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items:  await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items:  await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`)
            },

        ];
    },
        getMovieInfo: async (movieId, type) => {
            let info = {};
            if(movieId) {
                switch(type) {
                    case 'movie':
                        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${apiKey}`)

                    break;

                    case 'tv' :
                        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${apiKey}`)
                    break;

            
                }
            }
            return info;
        }
    }
