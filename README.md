# React-Unsplash-Clone-Making

![Unsplash](/src/images/unsplash.png)


### STEP 1: Preparation for this APP

I wanted to make an Unsplash Clone with React so I started by going into the Unsplash documentation to check how we could make a Get request and get an array back with pictures. I noticed that we would need in our request a Header with AUthorization and a Params with a query:term. 
You can test the Application here! Just search for a term and it will show an array of 10 pictures regarding that subject:
 https://genuine-gnome-a674fa.netlify.app/

### Step 2: Making of the components and the API Call: 

I Divided my app into components where I would need a SearchBar, ImageList and an ImageShow Component.
SearchBar: Here I would need to use state and a event.target.value to check for handleChange everytime the user would Type something my state would be updated.
ImageList: Here I would need to show the renderedImages coming back from the API in the array response
ImageShow: Here I would just show the List of Images we would get back

For the API call I made a seperate file and did not work with UseEffect in React. I could have done it this way but wanted to work with a seperate file.
I also used Axios to make the API Get Request from Unsplash. 


API CALL
```js
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
```

SearchBar
```js
import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {  
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
    );
}

export default SearchBar;
```

ImageList
```js
import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList( { images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    });

    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
```

ImageShow
```js
function ImageShow({ image }) {
    return <div>
        <img src={image.urls.small} alt={image.alt_description}/>
        </div>;
}

export default ImageShow;
```