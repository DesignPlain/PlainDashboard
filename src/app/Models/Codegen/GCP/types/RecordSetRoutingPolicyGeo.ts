import { RecordSetRoutingPolicyGeoHealthCheckedTargets } from "./RecordSetRoutingPolicyGeoHealthCheckedTargets";

export interface RecordSetRoutingPolicyGeo {
  // Same as `rrdatas` above.
  Rrdatas?: Array<string>;

  /*
For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.
Structure is document below.
*/
  HealthCheckedTargets?: RecordSetRoutingPolicyGeoHealthCheckedTargets;

  // The location name defined in Google Cloud.
  Location?: string;
}
