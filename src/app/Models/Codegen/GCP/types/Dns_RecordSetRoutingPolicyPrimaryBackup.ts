import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo,
  Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo_GetTypes,
} from "./Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo";
import {
  Dns_RecordSetRoutingPolicyPrimaryBackupPrimary,
  Dns_RecordSetRoutingPolicyPrimaryBackupPrimary_GetTypes,
} from "./Dns_RecordSetRoutingPolicyPrimaryBackupPrimary";

export interface Dns_RecordSetRoutingPolicyPrimaryBackup {
  /*
The backup geo targets, which provide a regional failover policy for the otherwise global primary targets.
Structure is document above.
*/
  BackupGeos?: Array<Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo>;

  // Specifies whether to enable fencing for backup geo queries.
  EnableGeoFencingForBackups?: boolean;

  /*
The list of global primary targets to be health checked.
Structure is document below.
*/
  Primary?: Dns_RecordSetRoutingPolicyPrimaryBackupPrimary;

  // Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.
  TrickleRatio?: number;
}

export function Dns_RecordSetRoutingPolicyPrimaryBackup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Primary",
      "The list of global primary targets to be health checked.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyPrimaryBackupPrimary_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TrickleRatio",
      "Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BackupGeos",
      "The backup geo targets, which provide a regional failover policy for the otherwise global primary targets.\nStructure is document above.",
      Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableGeoFencingForBackups",
      "Specifies whether to enable fencing for backup geo queries.",
      [],
      false,
      false,
    ),
  ];
}
