/**
 * @jsx React.DOM
 */

"use strict";


var TrainingListEntry = React.createClass({

    render: function() {
        var training = this.props.training;
        return (
            <tr>
                <td>{(new Date(training.date)).toLocaleDateString()}</td>
                <td>{training.distance}</td>
                <td>{training.time}</td>
                <td>{training.comment}</td>
            </tr>
            );
    }
});

var TrainingList = React.createClass({
    render: function() {
        var trainings = this.props.trainings;
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Distance</th>
                        <th>Time</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>{
                    trainings.map(function (training, index) {
                        return <TrainingListEntry key={index} training={training} />
                    })
                }</tbody>
            </table>
        );
    }
});