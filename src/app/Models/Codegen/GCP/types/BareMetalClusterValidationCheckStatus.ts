import { BareMetalClusterValidationCheckStatusResult } from "./BareMetalClusterValidationCheckStatusResult";

export interface BareMetalClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  Results?: Array<BareMetalClusterValidationCheckStatusResult>;
}
