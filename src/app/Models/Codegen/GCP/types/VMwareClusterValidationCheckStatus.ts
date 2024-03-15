import { VMwareClusterValidationCheckStatusResult } from "./VMwareClusterValidationCheckStatusResult";

export interface VMwareClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  Results?: Array<VMwareClusterValidationCheckStatusResult>;
}
