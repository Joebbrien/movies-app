import axios, { AxiosResponse} from "axios";

const baseUrl ="https://localhost:5001/api";


export const getMovies = async (): Promise<AxiosResponse<IHttpResponseType>> =>{
    try {
        const data: AxiosResponse<IHttpResponseType> = await axios.get(
            baseUrl+"/movie"
        );
        console.log("get movies: ", data);
        return data;
    } catch (error) {
        throw error;
    }
}

export const searchMovie = async (query: string): Promise<AxiosResponse<IHttpResponseType>> =>{
    try {
        const data: AxiosResponse<IHttpResponseType> = await axios.get(
            baseUrl+"/search/"+query
        );
        console.log("search ovies: ", data);
        return data;
    } catch (error) {
        throw error;
    }
}

export const getMovieById = async (id: number): Promise<AxiosResponse<IMoveDetails>> =>{
    try {
        const data: AxiosResponse<IMoveDetails> = await axios.get(
            baseUrl+"/movie/"+id
        );
        console.log("get Movies Id: ", data);
        return data;
    } catch (error) {
        throw error;
    }
}