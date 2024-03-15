import { VMwareClusterValidationCheckStatus } from "./VMwareClusterValidationCheckStatus";

export interface VMwareClusterValidationCheck {
  /*
(Output)
The scenario when the preflight checks were run..
*/
  Scenario?: string;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  Statuses?: Array<VMwareClusterValidationCheckStatus>;

  /*
(Output)
Options used for the validation check.
*/
  Options?: string;
}
