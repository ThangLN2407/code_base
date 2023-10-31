const errors = {
  NETWORK_ERROR: {
    message: 'network_error',
  },
  SERVER_ERROR: {
    code: 500,
    message: 'server_error',
  },
  BAD_REQUEST: {
    code: 400,
    message: 'bad_request',
  },
  UNAUTHENTICATED: {
    code: 401,
    message: 'unauthenticated',
  },
  FORBIDDEN: {
    code: 403,
    message: 'forbidden',
  },
  NOT_FOUND: {
    code: 404,
    message: 'not_found',
  },
  EMAIL_EXISTS: {
    code: 1,
    message: 'email_exists',
  },
  INVALID_REGISTER_TOKEN: {
    code: 2,
    message: 'invalid_register_token',
  },
  OTP_EXPIRED: {
    code: 401,
    message: 'otp_expired',
  },
  EMAIL_DOES_NOT_EXIST: {
    code: 404,
    message: 'email_not_found',
  },
  USER_NOT_FOUND: {
    code: 404,
    message: 'user_not_found',
  },
  USER_DOES_NOT_EXIST: {
    code: 1,
    message: 'user_does_not_exist',
  },
  PASSWORD_IS_INCORRECT: {
    code: 2,
    message: 'password_is_incorrect',
  },
  VERIFICATION_CODE_NOT_MATCH: {
    code: 3,
    message: 'verification_code_not_match',
  },
  TOKEN_EXPIRED: {
    code: 419,
    message: 'token_expired',
  },
}

export default errors
