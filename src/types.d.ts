interface Todo {
    text: string;
    complete: boolean;
  }

  interface Movie {
    title: string;
    overview: string;
  }

  type ToggleTodo = (selectedTodo: Todo) => void;
  type AddTodo = (text: string) => void;
  type FetchMovie = (text: string) => void;
  type MovieDetails = (movieId: number) => void;

  interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }

  interface IHttpResponseType{
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number

  }

  interface IProductionCompany{
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
  }

  interface IProductionCountry{
    iso_3166_1: string,
    name: string
  }
  interface ISpokenLang{
    english_name: string,
    iso_639_1: string,
    name: string
  }

  interface IMoveDetails{
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: any,
    budget: number,
    genres: any[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProductionCompany[],
    production_countries: IProductionCountry[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: ISpokenLang[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }