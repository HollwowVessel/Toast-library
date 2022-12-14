import React, { Children, Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(prop) {
    super(prop);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      console.log('Something went wrong');
      return null;
    }
    return <>{prop.children}</>;
  }
}
