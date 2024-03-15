import { BareMetalAdminClusterStatusCondition } from "./BareMetalAdminClusterStatusCondition";

export interface BareMetalAdminClusterStatus {
  /*
(Output)
ResourceConditions provide a standard mechanism for higher-level status reporting from admin cluster controller.
Structure is documented below.
*/
  Conditions?: Array<BareMetalAdminClusterStatusCondition>;

  /*
(Output)
Human-friendly representation of the error message from the admin cluster
controller. The error message can be temporary as the admin cluster
controller creates a cluster or node pool. If the error message persists
for a longer period of time, it can be used to surface error message to
indicate real problems requiring user intervention.
*/
  ErrorMessage?: string;
}
