const ErrorComponent = (errorResponse) => {
    console.log(errorResponse)
    return (
      <div className="error-page">
        <h1>Error</h1>
        <p>{errorResponse.message}</p>
      </div>
    );
  };

  export default ErrorComponent;