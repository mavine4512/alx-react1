import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

const WithLogging = (WrappedComponent) => {
  const name =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  class NewComponent extends Component {
    componentDidMount() {
      console.log(`Component ${name} mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  NewComponent.displayName = `WithLogging(${name})`;
  return NewComponent;
};

const styles = StyleSheet.create({});
export default WithLogging;
