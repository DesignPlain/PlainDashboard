import { BareMetalAdminClusterValidationCheckStatusResult } from "./BareMetalAdminClusterValidationCheckStatusResult";

export interface BareMetalAdminClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  Results?: Array<BareMetalAdminClusterValidationCheckStatusResult>;
}
