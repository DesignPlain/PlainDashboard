export interface BareMetalAdminClusterValidationCheckStatusResult {
  /*
(Output)
A human-readable message of the check failure.
*/
  Reason?: string;

  /*
(Output)
The category of the validation.
*/
  Category?: string;

  // A human readable description of this Bare Metal Admin Cluster.
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
}
