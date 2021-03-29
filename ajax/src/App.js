import './App.css';
import React, { Component } from 'react';

class Nav extends Component {

  render() {
    var listTag = [];

    for (var i = 0; i < this.props.list.length; i++) {
      var li = this.props.list[i];

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

class NowLoading extends Component{
  render() {
    return(
      <div>
        Now Loading.... Waiting....
      </div>
    );
  }
}

class App extends Component {



  state = {
    article: {
      item: { title: "What is this?", desc: "This is part of Ajax.........." },
      isLoading: false
    },
    list: {
      items: [],
      isLoading: false
    }
  }

  // 깨알 영어단어, Mount : 탑재되다
  // Component가 초기화될때, 네트워크 통신하기위해 최적의 Method
  // ComponentDidMount에다가 Ajax 콜을 넣고, 직접 영향을 끼치는게 아니라
  // 가져온 데이터를 State에 영향을 줘서 Render 한다
  componentDidMount() {
    var newList = Object.assign({}, this.state.list, { isLoading: true });
    this.setState({ list: newList });

    // 'list.json'을 connection
    // .then() : 어떻게 제어할것이냐라는 걸
    fetch('list.json')
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        // converting 한 결과로 준다.
        console.log(json);
        this.setState({
          list: {
            items: json,
            isLoading: false
        } });
      }.bind(this));
  }

  render() {

    var NavTag = null;
    if (this.state.list.isLoading) {
      NavTag = <NowLoading></NowLoading>
    } else {
      NavTag = <Nav list={this.state.list.items } onClick={function (title) {
        var newArticle = Object.assign({}, this.state.article, { isLoading: true });

        this.setState({ article: newArticle });
          fetch(title + '.json')
            .then(function (result) {
              // json 으로 파싱해줘
              return result.json();
            })
            .then(function (json) {
              this.setState({
                article: {
                  item: {
                    title: json.title,
                    desc: json.desc
                  },
                  isLoading: false
                }
              })
            }.bind(this));
        }.bind(this)}></Nav>
    }

    var ArticleTag = null;
    if (this.state.article.isLoading) {
      ArticleTag = <NowLoading></NowLoading>
    } else {
      ArticleTag = <Article title={this.state.article.item.title} desc={ this.state.article.item.desc }></Article>
    }

    return (
      <div className="App">
      
        <h1>This is lee Ajax!</h1>
       
        {NavTag}
        
        {ArticleTag}
      
      </div>
    );
  }
}

export default App;
