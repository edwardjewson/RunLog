/**
 * @jsx React.DOM
 */

"use strict";

var TrainingStats = React.createClass({
    sumProperty: function (property) {
        return this.props.trainings.reduce(function (prevSum, curVal) {
            return prevSum + curVal[property];
        }, 0);
    },
    getTrainingsPerWeek: function (trainings) {
        var trainingDates, milliDiff, numberOfWeeks;
        trainingDates = trainings.map(function (training) {
            return new Date(training.date);
        }).sort(function (d1, d2) {
            return d1 - d2;
        });
        milliDiff = trainingDates[trainingDates.length - 1] - trainingDates[0];
        numberOfWeeks = Math.max(1, milliDiff / (1000 * 3600 * 24 * 7));

        return trainingDates.length / numberOfWeeks;
    },
    render: function() {
        var trainings = this.props.trainings;
        var totalDistance = this.sumProperty("distance");
        var totalTime = this.sumProperty("time");
        var averagePace = totalDistance / (totalTime * 60); //since we store in minutes
        var trainingsPerWeek = Math.round(10 * this.getTrainingsPerWeek(trainings)) / 10;
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Total trainings</th>
                        <th>Total distance</th>
                        <th>Total Time</th>
                        <th>Average Pace</th>
                        <th>Trainings per week</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{trainings.length}</td>
                        <td>{totalDistance} meters</td>
                        <td>{totalTime} minutes</td>
                        <td>{averagePace} m/s</td>
                        <td>{trainingsPerWeek}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
});