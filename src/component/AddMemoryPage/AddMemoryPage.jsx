import React from "react";
import Card from "react-bootstrap/Card";
import "./AddMemoryPage.css";
import { getUserState } from "../../selectors";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function AddMemoryPage() {
  return (
    <Card>
      {/* Redirect to login if not logged in */}
      {!this.props.user.authenticated && <Redirect to="/login" />}

      <h3>Add Memory page</h3>
    </Card>
  );
}

const mapStateToProps = state => {
  let user = getUserState(state);
  return { user };
};

export default connect(mapStateToProps)(AddMemoryPage);
