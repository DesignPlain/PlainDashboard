export interface UptimeCheckConfigHttpCheckAcceptedResponseStatusCode {
  /*
A class of status codes to accept.
Possible values are: `STATUS_CLASS_1XX`, `STATUS_CLASS_2XX`, `STATUS_CLASS_3XX`, `STATUS_CLASS_4XX`, `STATUS_CLASS_5XX`, `STATUS_CLASS_ANY`.
*/
  StatusClass?: string;

  // A status code to accept.
  StatusValue?: number;
}
