import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alloydb_ClusterContinuousBackupConfigEncryptionConfig,
  alloydb_ClusterContinuousBackupConfigEncryptionConfig_GetTypes,
} from "./alloydb_ClusterContinuousBackupConfigEncryptionConfig";

export interface alloydb_ClusterContinuousBackupConfig {
  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  encryptionConfig?: alloydb_ClusterContinuousBackupConfigEncryptionConfig;

  /*
The numbers of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window.
If not set, defaults to 14 days.
*/
  recoveryWindowDays?: number;

  // Whether continuous backup recovery is enabled. If not set, defaults to true.
  enabled?: boolean;
}

export function alloydb_ClusterContinuousBackupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "recoveryWindowDays",
      "The numbers of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window.\nIf not set, defaults to 14 days.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether continuous backup recovery is enabled. If not set, defaults to true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryptionConfig",
      "EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.",
      alloydb_ClusterContinuousBackupConfigEncryptionConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
