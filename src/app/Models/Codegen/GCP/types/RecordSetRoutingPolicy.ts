import { RecordSetRoutingPolicyGeo } from "./RecordSetRoutingPolicyGeo";
import { RecordSetRoutingPolicyPrimaryBackup } from "./RecordSetRoutingPolicyPrimaryBackup";
import { RecordSetRoutingPolicyWrr } from "./RecordSetRoutingPolicyWrr";

export interface RecordSetRoutingPolicy {
  // Specifies whether to enable fencing for geo queries.
  EnableGeoFencing?: boolean;

  /*
The configuration for Geolocation based routing policy.
Structure is document below.
*/
  Geos?: Array<RecordSetRoutingPolicyGeo>;

  /*
The configuration for a primary-backup policy with global to regional failover. Queries are responded to with the global primary targets, but if none of the primary targets are healthy, then we fallback to a regional failover policy.
Structure is document below.
*/
  PrimaryBackup?: RecordSetRoutingPolicyPrimaryBackup;

  /*
The configuration for Weighted Round Robin based routing policy.
Structure is document below.
*/
  Wrrs?: Array<RecordSetRoutingPolicyWrr>;
}
