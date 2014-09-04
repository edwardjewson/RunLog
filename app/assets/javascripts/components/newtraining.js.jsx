/**
 * @jsx React.DOM
 */

 "use strict";

var NewTraining = React.createClass({
    handleSubmit: function (event) {
        event.preventDefault();
        var newTraining = {
            date: new Date(this.refs.newDate.getDOMNode().value),
            distance: +this.refs.newDistance.getDOMNode().value,
            time: +this.refs.newTime.getDOMNode().value,
            comment: this.refs.newComment.getDOMNode().value
        };
        this.props.onNewTrainingSubmitted(newTraining);
    },
    resetForm: function () {
        this.refs.newDistance.getDOMNode().value = 0;
        this.refs.newDate.getDOMNode().value = "";
        this.refs.newTime.getDOMNode().value = "";
        this.refs.newComment.getDOMNode().value = "";        
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Date</label>
                    <input type="datetime-local" id="newDate" defaultValue="2014-01-02T11:30:00" ref="newDate" className="form-control" />
                </div>
                <div>
                    <label>Distance</label>
                    <input ref="newDistance" type="number" defaultValue="1000" /> meters
                </div>
                <div>
                    <label>Time</label>
                    <input ref="newTime" type="text" defaultValue="60" /> minutes
                </div>
                <div>
                    <label>Comment</label>
                    <textarea ref="newComment" defaultValue="A great run" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
});