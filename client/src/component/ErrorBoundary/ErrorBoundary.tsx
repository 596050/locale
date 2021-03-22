import React, { Component } from 'react'

class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { isError: false }
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  componentDidCatch(error: Error, errorInfo: any): void {
    this.props.onError(error)
    this.setState({
      error,
      errorInfo,
    })
  }

  render(): React.ReactNode {
    const { isError, error, errorInfo } = this.state
    const { children } = this.props
    if (isError) {
      console.error(error, errorInfo)
      return (
        <>
          <div>
            <h1>Something went wrong.</h1>
          </div>
          <div>{children}</div>
        </>
      )
    }

    return children
  }
}

export default ErrorBoundary
