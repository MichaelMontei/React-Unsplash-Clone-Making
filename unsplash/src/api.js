import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 3xoUWst8zSyl12-kAkxXphe--srSrhPq0BEvW7cA96M'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
};

export default searchImages;