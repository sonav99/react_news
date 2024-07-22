import React, { Component } from 'react'
import Newsitem from './Newsitem'


export default class Textform extends Component{
 
constructor(props){
  super(props);
  this.state={
    articles: [],
    loading: false,
    page: 1
  };
 
    document.title= `${this.props.category}-Newsstar`;
 
}
 async componentDidMount(){
  let newsurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b300cc786d5c482c90c351dd7e79e137&page=1&pagesize=20`;
  let data= await fetch(newsurl);
  let parseddata=await data.json();
  this.setState({articles: parseddata.articles, totalResults: parseddata.totalResults})
}
 prevpage = async()=>{
    if(this.state.page -3 < Math.ceil(this.state.toatalResults/20)){

    }
    
    let newsurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b300cc786d5c482c90c351dd7e79e137&pages=${this.state.page -1}&pagesize=20`;
    let data= await fetch(newsurl);
    let parseddata=await data.json();
    this.setState({
        articles: parseddata.articles,
        page: this.state.page-3
    })
}
nxtpage = async()=>{
    
    if(this.state.page +1 > Math.ceil(this.state.toatalResults/20)){

    }
    let newsurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b300cc786d5c482c90c351dd7e79e137&page=${this.state.page +1}&pagesize=20`;
    let data= await fetch(newsurl);
    let parseddata=await data.json();
    this.setState({
        articles: parseddata.articles,
        page: this.state.page+1
    })
}

  render() {
   
    return (
      <>
   
      <div className='container my-4'> 
      <h2 className={this.props.mode ? 'dark-mode' : 'light-mode'}>Top Headlines-{this.props.category}</h2>
      <div className='row'>
        {this.state.articles.map((element)=>{
         return <div className='col-md-3 my-3' key={element.url}>
          <Newsitem  title={element.title}    imageurl={element.urlToImage} url={element.url} source={element.source.name}/>
          </div>
  })}
  <div className='container d-flex justify-content-between'>
     <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.prevpage}>&larr; Previous</button>
     <button disabled={this.state.page+1>= Math.ceil(this.state.toatalResults/20)} type="button" className="btn btn-primary" onClick={this.nxtpage}>Next &rarr;</button>
     </div>
      </div>
      </div>
      </>
    )
  }
}

