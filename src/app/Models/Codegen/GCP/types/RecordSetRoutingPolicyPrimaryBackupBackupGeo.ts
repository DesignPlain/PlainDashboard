import { RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets } from "./RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets";

export interface RecordSetRoutingPolicyPrimaryBackupBackupGeo {
  /*
For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.
Structure is document below.
*/
  HealthCheckedTargets?: RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;

  // The location name defined in Google Cloud.
  Location?: string;

  //
  Rrdatas?: Array<string>;
}
