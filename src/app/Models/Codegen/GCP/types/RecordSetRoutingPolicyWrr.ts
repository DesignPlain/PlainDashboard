import { RecordSetRoutingPolicyWrrHealthCheckedTargets } from "./RecordSetRoutingPolicyWrrHealthCheckedTargets";

export interface RecordSetRoutingPolicyWrr {
  // Same as `rrdatas` above.
  Rrdatas?: Array<string>;

  // The ratio of traffic routed to the target.
  Weight?: number;

  /*
The list of targets to be health checked. Note that if DNSSEC is enabled for this zone, only one of `rrdatas` or `health_checked_targets` can be set.
Structure is document below.
*/
  HealthCheckedTargets?: RecordSetRoutingPolicyWrrHealthCheckedTargets;
}
