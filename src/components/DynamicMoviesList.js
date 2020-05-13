import React, { Component } from "react";
import ImprovedCard from './ImprovedCard';
import AddMovie from './AddMovie';

class DynamicMoviesList extends Component {
  constructor(){
        super();
        this.state = {
          movies: [
            { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
            { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
            { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
          ],
          showOscarAwarded: false,
        };
    }

    toggleMovies = () => {
    this.setState({ showOscarAwarded: !this.state.showOscarAwarded })
  }

    deleteItem = (movieIndex) => {
      const moviesCopy = [...this.filteredMovies];
      moviesCopy.splice(movieIndex, 1);
      this.setState({
          movies: moviesCopy
      })
    }

    addMovie = () => {
      const {movies} = this.state;
      const movie = { title: "Harry Potter", director: "David Yates", hasOscars: false, IMDbRating: 8.1 };
      this.setState({
        movies: [...movies, movie]
      })
    }

    addMovieHandler = theMovie => {
      const moviesCopy = [...this.state.movies];
      moviesCopy.push(theMovie);
      this.setState({
        movies: moviesCopy
      })
    }

    filteredMovies;

    handleFormSubmit = (event) => {
      event.preventDefault();
      this.props.addTheMovie(this.state);   
      this.setState({
        title: '',
        director: '',
        hasOscars: false,
        IMDbRating: '' 
      })  
    }

    render() {
      const {showOscarAwarded} = this.state;
      this.filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded);
        return (
            <div>
              <AddMovie
                addTheMovie={this.addMovieHandler}
              />
              {
                this.filteredMovies.map( (oneMovie, index) => {
                  return (
                    <ImprovedCard 
                      key={index} 
                      {...oneMovie} 
                      deleteItem={() => this.deleteItem(index)}
                      addItem = { () => this.addMovie()}
                    />
                    
                  )
                })
              }

              <button onClick={() => this.toggleMovies() }>
                {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
              </button>
            </div>
        )
    }
}

export default DynamicMoviesList;
