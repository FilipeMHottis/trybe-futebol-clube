import { HTTP_STATUS } from '../utils/httpStatus';

type Status = keyof typeof HTTP_STATUS;

interface ServiceResponseSucessfull<T> {
  status: Status;
  data: T;
}

interface ServiceResponseError {
  status: Status;
  data: {
    message: string;
  };
}

type ServiceResponse<T> = ServiceResponseSucessfull<T> | ServiceResponseError;

export { ServiceResponseSucessfull, ServiceResponseError };
export default ServiceResponse;
