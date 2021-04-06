import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render 순서 : componentWillMount() >> render() >> componetDidMount()

  // componentWillMount() {
  //   console.log('will.mount');
  // }

  state = {}
  
  componentDidMount() {

    console.log('did.mount');
    
    this._getMoives();

    // 원래 fetch가 끝나기 전에는 밑에 잇는 구문이 실행되지 않음
    // 그래서 사용되는게 Promise
    // Promise는 asynchronous.
    
    /*
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
    */
    // 이거는 console에서 나왔던거
    // console.log(response)
    // ok: true  >>>> request가 성공적이었따는 뜻
    // redirected: false 
    // status: 200  >>>> OK
    // statusText: ""
    // type: "cors"
  }
  
  // = () =>
  // 이거는 
  _renderMovies = () => {
    var m = this.state.movies.map((movie) => {
      // key값 정하기
      // map의 기능 중 하나인 index를 사용해서 key값을 정하는 것
      // movieInfo에 고유 id값을 정하는 것
      console.log(movie);

      return <Movie
        title={movie.title}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />;
    });
    return m;
  }
  
   _getMoives = async () => {
     var a = await this._callApi();
    // callApi 실행후 밑의 코드가 실행됨
     
     this.setState({
       movies : a
     });
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
    
  }

  render() { 
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
