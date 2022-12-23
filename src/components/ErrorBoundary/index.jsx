import { any } from "prop-types";
import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state.hasError;
    if (hasError) {
      return null;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: any,
};
