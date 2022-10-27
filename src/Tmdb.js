const API_KEY = '1a950d9ff38d1bc4cee25b176e1a17f1'
const API_BASE = 'https://api.themoviedb.org/3/'


const basicFetch = async (endpoint) =>{
const req = await fetch(`${API_BASE}${endpoint}`)
const json = await req.json() 
return json

}

export default {
     getHomeList: async () => {
        return [
            {
             slug: 'originals',
             title: 'Netflix originals',
             item: await basicFetch( `/discover/tv?with_networks=213&api_key=${API_KEY}`)
            },
            {
             slug: 'trending',
             title: 'We suggest to you',
             item: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
            slug:'toprated',
            title:'Top rated',
            item: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug:'action',
            title: 'Action',
            item: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
            slug: 'comedy',
            title:'Comedy',
            item: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
            slug:'terror',
            title: 'Terror',
            item: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
            slug:'romance',
            title:'Romance',
            item: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
            slug:'documentary',
            title:'Documentary',
            item: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            },
            
        ]
    }
}