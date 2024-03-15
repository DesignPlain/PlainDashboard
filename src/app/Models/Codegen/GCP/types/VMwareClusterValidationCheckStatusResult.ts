export interface VMwareClusterValidationCheckStatusResult {
  /*
(Output)
Options used for the validation check.
*/
  Options?: string;

  /*
(Output)
Machine-readable message indicating details about last transition.
*/
  Reason?: string;

  /*
(Output)
The category of the validation.
*/
  Category?: string;

  // A human readable description of this VMware User Cluster.
  Description?: string;

  /*
(Output)
Detailed failure information, which might be unformatted.
*/
  Details?: string;
}
