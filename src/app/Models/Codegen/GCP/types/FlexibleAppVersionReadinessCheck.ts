export interface FlexibleAppVersionReadinessCheck {
  // Time before the check is considered failed. Default: "4s"
  Timeout?: string;

  /*
A maximum time limit on application initialization, measured from moment the application successfully
replies to a healthcheck until it is ready to serve traffic. Default: "300s"
*/
  AppStartTimeout?: string;

  // Interval between health checks.  Default: "5s".
  CheckInterval?: string;

  // Number of consecutive failed checks required before removing traffic. Default: 2.
  FailureThreshold?: number;

  // Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  Host?: string;

  // The request path.
  Path?: string;

  // Number of consecutive successful checks required before receiving traffic. Default: 2.
  SuccessThreshold?: number;
}
