import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Board from "./Board";
import { startAgain } from "../actions/actions";
import axios from "axios";

let player1Score = 0,
  player2Score = 0;

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1Score: 0,
      player2Score: 0
    };
  }

  WinnerApiCall = (fPlayer, sPlayer, win) => {
    axios
      .post("/game", {
        firstPlayer: fPlayer,
        secondPlayer: sPlayer,
        winner: win
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getScoreApi = (firstPlayer, secondPlayer) => {
    console.log("FirstName: " + firstPlayer + "Secon player: " + secondPlayer);
    const url =
      "/score/?firstPlayer=" + firstPlayer + "&secondPlayer=" + secondPlayer;

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        player1Score = response.data[firstPlayer.toLowerCase()];
        player2Score = response.data[secondPlayer.toLowerCase()];

        this.setState({
          player1Score: response.data[firstPlayer.toLowerCase()],
          player2Score: response.data[secondPlayer.toLowerCase()]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    let PlayerName = this.props.name;
    let PlayerName1, PlayerName2;
    const answer_array = PlayerName.split(",");
    PlayerName1 = answer_array[0];
    PlayerName2 = answer_array[1];

    this.getScoreApi(PlayerName1, PlayerName2);
  }

  componentWillMount() {
    this.getScoreApi = this.getScoreApi.bind(this);
  }

  render() {
    let result = "";
    let PlayerName = this.props.name;
    let PlayerName1, PlayerName2;

    const answer_array = PlayerName.split(",");
    PlayerName1 = answer_array[0];
    PlayerName2 = answer_array[1];

    if (this.props.turn) {
      if (this.props.turn.toUpperCase() === "O") {
        result = `It's ${PlayerName1.toUpperCase()}'s turn.`;
      } else {
        result = `It's ${PlayerName2.toUpperCase()}'s turn.`;
      }
    }
    if (this.props.won) {
      if (this.props.turn.toUpperCase() === "O") {
        result = `Yay! ${PlayerName1.toUpperCase()} won!`;
        player1Score = player1Score + 1;
        this.WinnerApiCall(PlayerName1, PlayerName2, PlayerName1);
      } else {
        result = `Yay! ${PlayerName2.toUpperCase()} won!`;
        player2Score = player2Score + 1;
        this.WinnerApiCall(PlayerName1, PlayerName2, PlayerName2);
      }
    } else if (this.props.draw) {
      result = "Opps! Match draw!";
      this.WinnerApiCall(PlayerName1, PlayerName2, "");
    }
    return (
      <div className="main-grid  d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="main-box">
            <div className="text-center sub-title">
              <span className="text-warning d-block font-60 text-uppercase">
                Tic Tac Toe
              </span>
              <p className="font-30">{result}</p>
            </div>

            <div className="row margin-top">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between">
                  <div className="player-name color d-flex justify-content-center align-items-center">
                    <span className="number">{player1Score}</span>
                    <span className="text">{PlayerName1.toUpperCase()}</span>
                  </div>
                  <div className="player-name color d-flex justify-content-center align-items-center">
                    <span className="number">{player2Score}</span>
                    <span className="text">{PlayerName2.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>
            <Board />
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between">
                  <div className="footer-text color text-center">
                    <div
                      className="color-list"
                      onClick={(e) => {
                        return window.alert("Comming Soon...");
                      }}
                    >
                      <img src="img/list.png" alt="resetImage" />
                    </div>
                    <h4>View Listing</h4>
                  </div>
                  <div
                    className="footer-text color text-center"
                    onClick={this.props.startAgain}
                  >
                    <div className="color-list">
                      <img src="img/reset.png" alt="resetImage" />
                    </div>
                    <h4>Reset</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired
};

export default connect(
  ({ won, turn, draw, name }) => ({
    won,
    turn,
    draw,
    name
  }),
  (dispatch) => {
    return {
      startAgain() {
        dispatch(startAgain());
      }
    };
  }
)(Result);

export { Result as PureResult };
