import React, { Component } from 'react'

export default class Textform extends Component {
  state={
    date: ""
  };
  componentDidMount(){
    this.getDate();
  }
  getDate=()=>{
    var date=new Date().toDateString();
    this.setState({
      date : date
    });
  }
  render() {
    let {title,description,imageurl,url,source}=this.props
    
    return (
      <>
     
      <div className="card">
  <img src={imageurl} className="card-img-top" alt="..." style={{height:'11rem'}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">{this.state.date}</small></p> 
    <a href={url} target="_blank" className="btn btn-sm btn-primary"  >Read More</a>
    
    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'80%'}}>
    {source}
    
    </span>
</div>
</div>
      </>
    )
  }
}
