const HTTP_STATUS = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  unprocessableEntity: 422,
};

const mapStatus = (statusCode: keyof typeof HTTP_STATUS) => HTTP_STATUS[statusCode];

export { HTTP_STATUS };
export default mapStatus;
