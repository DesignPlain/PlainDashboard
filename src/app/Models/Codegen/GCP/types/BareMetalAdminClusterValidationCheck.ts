import { BareMetalAdminClusterValidationCheckStatus } from "./BareMetalAdminClusterValidationCheckStatus";

export interface BareMetalAdminClusterValidationCheck {
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
  Statuses?: Array<BareMetalAdminClusterValidationCheckStatus>;
}
