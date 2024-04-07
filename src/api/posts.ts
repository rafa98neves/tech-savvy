import axios from 'axios';

export class PostService {
    private readonly baseUrl: string;

    constructor() {
        const { REACT_APP_JSON_BASE_URL, REACT_APP_JSON_API_KEY, REACT_APP_JSON_API_CLIENT } = process.env;
        this.baseUrl = `${REACT_APP_JSON_BASE_URL}/${REACT_APP_JSON_API_KEY}/${REACT_APP_JSON_API_CLIENT}`;
    }

    public getPosts(): Promise<any> {
        return axios.get(this.baseUrl)
    }
}