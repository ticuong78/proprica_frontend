class Errors {
  getError() {
    return this.message;
  }
}

class InvalidURL extends Errors {
  constructor() {
    super();
    this.message = "Invalid URL, please check good";
  }
}

class InternalServerError extends Errors {
  constructor() {
    super();
    this.message = "Internal server error";
  }
}

class ErrorCompany {
  getErrorMsg(error) {
    const status = error?.response?.status;   //response Error
    if (status === 404) return new InvalidURL().getError();
    if (status === 500) return new InternalServerError().getError();
  }
}

export default ErrorCompany;