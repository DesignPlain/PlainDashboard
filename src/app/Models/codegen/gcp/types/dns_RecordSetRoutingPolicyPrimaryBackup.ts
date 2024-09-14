import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo,
  dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo_GetTypes,
} from "./dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo";
import {
  dns_RecordSetRoutingPolicyPrimaryBackupPrimary,
  dns_RecordSetRoutingPolicyPrimaryBackupPrimary_GetTypes,
} from "./dns_RecordSetRoutingPolicyPrimaryBackupPrimary";

export interface dns_RecordSetRoutingPolicyPrimaryBackup {
  // Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.
  trickleRatio?: number;

  /*
The backup geo targets, which provide a regional failover policy for the otherwise global primary targets.
Structure is document above.
*/
  backupGeos?: Array<dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo>;

  // Specifies whether to enable fencing for backup geo queries.
  enableGeoFencingForBackups?: boolean;

  /*
The list of global primary targets to be health checked.
Structure is document below.
*/
  primary?: dns_RecordSetRoutingPolicyPrimaryBackupPrimary;
}

export function dns_RecordSetRoutingPolicyPrimaryBackup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "trickleRatio",
      "Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "backupGeos",
      "The backup geo targets, which provide a regional failover policy for the otherwise global primary targets.\nStructure is document above.",
      () => dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableGeoFencingForBackups",
      "Specifies whether to enable fencing for backup geo queries.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "primary",
      "The list of global primary targets to be health checked.\nStructure is document below.",
      () => dns_RecordSetRoutingPolicyPrimaryBackupPrimary_GetTypes(),
      true,
      false,
    ),
  ];
}
