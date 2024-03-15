export interface FlexibleAppVersionLivenessCheck {
  // Interval between health checks.
  CheckInterval?: string;

  // Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.
  FailureThreshold?: number;

  // Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  Host?: string;

  /*
The initial delay before starting to execute the checks. Default: "300s"

- - -
*/
  InitialDelay?: string;

  // The request path.
  Path?: string;

  // Number of consecutive successful checks required before considering the VM healthy. Default: 2.
  SuccessThreshold?: number;

  // Time before the check is considered failed. Default: "4s"
  Timeout?: string;
}
