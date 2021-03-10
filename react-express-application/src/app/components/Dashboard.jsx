import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from "./TaskList";

const Dashboard = ({groups})=>(
    <div className="row">
        {groups.map(group=>(
            <ConnectedTaskList id={group.id} name={group.name} />
        ))}
    </div>
);

// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.
function mapStateToProps(state) {
    return {
        groups:state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);