import React from 'react';

import ClassNames from 'classnames';

export default class Player extends React.Component {

    render() {
        const playPauseClass = ClassNames({
            'fa fa-play': this.props.playStatus == 'PLAYING'
                ? false
                : true,
            'fa fa-pause': this.props.playStatus == 'PLAYING'
                ? true
                : false
        });

        return (
            <div className="player">
                <div className="player__back">
                    <button onClick={this.props.back}>
                        <i className="fa fa-step-backward"></i>
                    </button>
                    </div>
                    <div className="player__main">
                    <button  onClick={this.props.togglePlay}>
                        <i className={playPauseClass}></i>
                    </button>
                    </div>
                    <div className="player__forward">
                    <button onClick={this.props.forward}>
                        <i className="fa fa-step-forward"></i>
                    </button>
                </div>
            </div>
        )
    }
}
