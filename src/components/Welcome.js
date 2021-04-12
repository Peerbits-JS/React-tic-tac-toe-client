import React, { Component } from "react";
import { connect } from "react-redux";
import nameAction from "../actions/nameAction";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Player1: '',
      Player2: '',
      NameErr: ""
    };
  }
  

  handleSubmit = () => {
      const player1 =this.state.Player1;
      const player2 =this.state.Player2;
    console.log(player1);
    
    if (player1 === '') {
        this.setState({ NameErr: 'Please enter Player1 Name' })
    }
    else if (player2 === '') {
        this.setState({ NameErr: 'Please enter Player2 Name' })
    }else{
        this.setState({ NameErr: '' })
         this.props.personDispatch(player1+","+player2 )
         this.props.getIndex(0);
    }
  }
  

  render() {
      
    return (
      <div className="wrapper d-flex justify-content-center align-items-center">
        <div className="main-grid d-flex justify-content-center align-items-center">
          <div className="inner-lg-container">
            <div className="text-center mt-2">
              <h1 className="text-primary mb-4">Welcome</h1>
              <span className="text-warning mb-5 d-block font-103 text-uppercase">
                Tic Tac Toe
              </span>
            </div>

            <div className="row">
              <div className="col-md-6 text-center">
                <div className="main-grid-title">
                  <div className="form-group">
                    <label className="text-primary font-600">Player 1</label>
                    <input
                      type="text"
                      value={this.state.Player1}
                      onChange={(e)=>{this.setState({Player1:e.target.value})}} 
                      className="form-control"
                      placeholder="Please enter name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="main-grid-title">
                  <div className="form-group">
                    <label className="text-primary font-600">Player 2</label>
                    <input
                      type="text"
                      value={this.state.Player2}
                      className="form-control"
                      placeholder="Please enter name"
                      
                      onChange={(e)=>{this.setState({Player2:e.target.value})}}
                    />
                  </div>
                </div>
              </div>
                      <p className="errorMessage ">{this.state.NameErr}</p>

            </div>
            <button
              type="button"
              className="btn btn-primary mt-3 border-radius btn-block"
              onClick={this.handleSubmit.bind(this)}
            >
              Submit 
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStatetoProp = state => {
    return state;
  };
  
const mapDispatchtoProps=(dispatch)=>{
    return {
     personDispatch: (Pbname)=>{dispatch(nameAction(Pbname))}
    }
}
export default connect(mapStatetoProp,mapDispatchtoProps)(Welcome);