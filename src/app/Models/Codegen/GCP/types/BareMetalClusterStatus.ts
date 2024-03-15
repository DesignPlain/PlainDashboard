import { BareMetalClusterStatusCondition } from "./BareMetalClusterStatusCondition";

export interface BareMetalClusterStatus {
  /*
(Output)
ResourceConditions provide a standard mechanism for higher-level status reporting from user cluster controller.
Structure is documented below.
*/
  Conditions?: Array<BareMetalClusterStatusCondition>;

  /*
(Output)
Human-friendly representation of the error message from the user cluster
controller. The error message can be temporary as the user cluster
controller creates a cluster or node pool. If the error message persists
for a longer period of time, it can be used to surface error message to
indicate real problems requiring user intervention.
*/
  ErrorMessage?: string;
}
