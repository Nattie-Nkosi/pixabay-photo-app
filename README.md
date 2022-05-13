# Review of the React App

### App Component

- The main component which displays all components.
- This is where I initialize an image state object to an empty array.
- Then I made a network request to Pixabay API using axios.
- Then the state object is updated using setState object which makes the app component rerender.

### The SearchBar Component

- Decleared a state 'term' object to an empty string.
- The onChange Event Listener will get envoked as soon as user pressed enter button on keyboard.
- the onFormSubmit function will get the updated state object 'term' and pass it to App component.

### The ImageList Component

- Listing images to be displayed in grid layout.
- Learned how to map through a given array using map funtion.
- Give each image a unique key when it is rendered on the screen.
