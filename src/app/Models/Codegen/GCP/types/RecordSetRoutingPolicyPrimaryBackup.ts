import { RecordSetRoutingPolicyPrimaryBackupBackupGeo } from "./RecordSetRoutingPolicyPrimaryBackupBackupGeo";
import { RecordSetRoutingPolicyPrimaryBackupPrimary } from "./RecordSetRoutingPolicyPrimaryBackupPrimary";

export interface RecordSetRoutingPolicyPrimaryBackup {
  // Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.
  TrickleRatio?: number;

  /*
The backup geo targets, which provide a regional failover policy for the otherwise global primary targets.
Structure is document above.
*/
  BackupGeos?: Array<RecordSetRoutingPolicyPrimaryBackupBackupGeo>;

  // Specifies whether to enable fencing for backup geo queries.
  EnableGeoFencingForBackups?: boolean;

  /*
The list of global primary targets to be health checked.
Structure is document below.
*/
  Primary?: RecordSetRoutingPolicyPrimaryBackupPrimary;
}
