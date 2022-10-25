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
             item: basicFetch( `discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
             slug: 'trending',
             title: 'We suggest to you',
             item: (`trending/all/week&api_key=${API_KEY}`)
            },
            {
            slug:'toprated',
            title:'Top rated',
            item:(`movie/top_rated&api_key=${API_KEY}}`)
            },
            {
            slug:'action',
            title: 'Action',
            item:(`discover/movie?28&api_key=${API_KEY}`)
            },
            {
            slug: 'comedy',
            title:'Comedy',
            item:(`discover/movie?35&api_key=${API_KEY}`)
            },
            {
            slug:'terror',
            title: 'Terror',
            item:(`discover/movie?27&api_key=${API_KEY}`)
            },
            {
            slug:'romance',
            title:'Romance',
            item:(`discover/movie?10749&api_key=${API_KEY}`)
            },
            {
            slug:'documentary',
            title:'Documentary',
            item:(`discover/movie?99&api_key=${API_KEY}`)
            },
        ]
    }
}