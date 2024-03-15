export interface CertificateManagedProvisioningIssue {
  /*
(Output)
Human readable explanation for reaching the state. Provided to help
address the configuration issues.
Not guaranteed to be stable. For programmatic access use `failure_reason` field.
*/
  Details?: string;

  /*
(Output)
Reason for provisioning failures.
*/
  Reason?: string;
}
