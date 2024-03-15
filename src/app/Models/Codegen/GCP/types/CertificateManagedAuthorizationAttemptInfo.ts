export interface CertificateManagedAuthorizationAttemptInfo {
  /*
(Output)
Human readable explanation for reaching the state. Provided to help
address the configuration issues.
Not guaranteed to be stable. For programmatic access use `failure_reason` field.
*/
  Details?: string;

  /*
(Output)
Domain name of the authorization attempt.
*/
  Domain?: string;

  /*
(Output)
Reason for failure of the authorization attempt for the domain.
*/
  FailureReason?: string;

  /*
(Output)
State of the domain for managed certificate issuance.
*/
  State?: string;
}
