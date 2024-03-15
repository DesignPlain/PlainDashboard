export interface BareMetalClusterValidationCheckStatusResult {
  /*
(Output)
The category of the validation.
*/
  Category?: string;

  // A human readable description of this Bare Metal User Cluster.
  Description?: string;

  /*
(Output)
Detailed failure information, which might be unformatted.
*/
  Details?: string;

  /*
(Output)
Options used for the validation check.
*/
  Options?: string;

  /*
(Output)
A human-readable message of the check failure.
*/
  Reason?: string;
}
