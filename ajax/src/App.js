import './App.css';
import React, { Component } from 'react';

class Nav extends Component {

    state = {
      list:[]
    }
  // 깨알 영어단어, Mount : 탑재되다
  // Component가 초기화될때, 네트워크 통신하기위해 최적의 Method
  // ComponentDidMount에다가 Ajax 콜을 넣고, 직접 영향을 끼치는게 아니라
  // 가져온 데이터를 State에 영향을 줘서 Render 한다
  componentDidMount() {
    // 'list.json'을 connection
    // .then() : 어떻게 제어할것이냐라는 걸
    fetch('list.json')
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        // converting 한 결과로 준다.
        console.log(json);
        this.setState({ list: json });
      }.bind(this));
  }

  render() {
    var listTag = [];

    for (var i = 0; i < this.state.list.length; i++) {
      var li = this.state.list[i];

      listTag.push(<li key={ li.id}>
        <a href={li.id} data-id={li.title} onClick={function (e) {
          e.preventDefault();
          console.log('trigger');
          this.props.onClick(e.target.dataset.id);
        }.bind(this) }>
          {li.title}
        </a>
      </li>);

    }

    return (
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>

    );
  }
}
  class Article extends Component {
    render() {
      return (
        <article>
        <h2>
            {this.props.title}
        </h2>
            {this.props.desc}
      </article>
      );
        
    }
  }


class App extends Component {

  state = {
    article: {title:"What is this?", desc:"This is part of Ajax.........."}
  }
  render() {
    return (
      <div className="App">
      
        <h1>This is lee!</h1>
       
        <Nav onClick={function (title) {

          console.log(title);

          fetch(title + '.json')
            .then(function (result) {
              // json 으로 파싱해줘
              return result.json();
            })
            .then(function (json) {
              this.setState({
                article: {
                  title: json.title,
                  desc: json.desc
                }
              })
            }.bind(this));
        }.bind(this)}></Nav>
        
       <Article title={this.state.article.title} desc={ this.state.article.desc }></Article>
      
      </div>
    );
  }
}

export default App;
