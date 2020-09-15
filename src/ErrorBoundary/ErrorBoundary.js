import React, {Component} from 'react';


class ErrorBoundary extends Component {
  
     state = { 
      hasError: false,
      error: null,
      errorInfo:null

    };
  

  static getDerivedStateFromError(error) { 
      return {hasError:true, error}; 
    }
  componentDidCatch(error, errorInfo) {   
      console.log(error, errorInfo);
      this.setState({
        hasError:true,
        error,
        errorInfo
      });
   }
  render() {
    if (this.state.hasError) {
        return ( 
          <div className="errorBoundry">
            <p>Oops, Something went wrong: {this.state.error.message}</p>
         </div>
        )
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;