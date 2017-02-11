import React from 'react';

export default class Progress extends React.Component {

    render() {
        return (
            <div className="progress">
                <progress value={this.props.position} max="1"></progress>
                <span className="player__time-elapsed">{this.props.elapsed}</span>
                <span className="player__time-total">/{this.props.total}</span>

            </div>
        )
    }
}
