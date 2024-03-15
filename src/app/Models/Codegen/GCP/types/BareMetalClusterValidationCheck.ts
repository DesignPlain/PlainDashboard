import { BareMetalClusterValidationCheckStatus } from "./BareMetalClusterValidationCheckStatus";

export interface BareMetalClusterValidationCheck {
  /*
(Output)
Options used for the validation check.
*/
  Options?: string;

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
  Statuses?: Array<BareMetalClusterValidationCheckStatus>;
}
