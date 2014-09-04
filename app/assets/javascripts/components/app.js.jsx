/**
 * @jsx React.DOM
 */
"use strict";

var Page = {
    LIST: "#list",
    NEW: "#new",
    STATS: "#stats"
};


var App = React.createClass({
    getInitialState: function() {
        return {
            trainings: [],
            currentPage: location.hash
        };
    },
    componentDidMount: function() {
        $.getJSON("/trainings.json", function (data) {
            this.setState({
                trainings: data 
            });
        }.bind(this));
    },
    handleNewTraining: function (NewTraining, completion) {
        $.post("/trainings.json", {training: NewTraining}, function (data) {
            this.setState({
                trainings: data,
                currentPage: Page.LIST
            });
            history.replaceState(null, null, Page.LIST);
            if (completion) {
                completion();
            }
        }.bind(this));
    },
    setPage: function (page) {
        this.setState({
            currentPage: page
        });
        history.replaceState(null, null, page);
    },
    render: function() {
        var componentToShow;
        if (this.state.currentPage == Page.STATS) {
            componentToShow = <TrainingStats trainings={this.state.trainings} />;
        } else if (this.state.currentPage == Page.NEW) {
            componentToShow = <NewTraining onNewTrainingSubmitted={this.handleNewTraining}/>;
        } else {
            componentToShow = <TrainingList trainings={this.state.trainings} />;
        }
        return (
            <div>
                <button className="btn btn-default" onClick={this.setPage.bind(this, Page.LIST)}>List</button>
                <button className="btn btn-default" onClick={this.setPage.bind(this, Page.STATS)}>Stats</button>
                <button className="btn btn-default" onClick={this.setPage.bind(this, Page.NEW)}>New</button>
            {componentToShow}
            </div>
        );
    }
});