import { HTTP_STATUS } from '../utils/httpStatus';

type Status = keyof typeof HTTP_STATUS;

interface ServiceResponse<T> {
  status: Status;
  data: T;
}

export default ServiceResponse;
