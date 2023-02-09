# React-Unsplash-Clone-Making

![Unsplash](/images/unsplash.png)


### STEP 1: Preparation for this APP

I wanted to make an Unsplash Clone with React so I started by going into the Unsplash documentation to check how we could make a Get request and get an array back with pictures. I noticed that we would need in our request a Header with AUthorization and a Params with a query:term. 

### Step 2: Making of the components and the API Call: 

I Divided my app into components where I would need a SearchBar, ImageList and an ImageShow Component.
SearchBar: Here I would need to use state and a event.target.value to check for handleChange everytime the user would Type something my state would be updated.
ImageList: Here I would need to show the renderedImages coming back from the API in the array response
ImageShow: Here I would just show the List of Images we would get back

For the API call I made a seperate file and did not work with UseEffect in React. I could have done it this way but wanted to work with a seperate file.
<<<<<<< HEAD
I also used Axios to make the API Get Request from Unsplash. 
=======
I also used Axios to make the API Get Request from Unsplash. 

>>>>>>> bfa3dd10ca24d793c9c5782c518a8925fdbe6d7b
