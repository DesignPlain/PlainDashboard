import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Alloydb_ClusterContinuousBackupConfigEncryptionConfig,
  Alloydb_ClusterContinuousBackupConfigEncryptionConfig_GetTypes,
} from "./Alloydb_ClusterContinuousBackupConfigEncryptionConfig";

export interface Alloydb_ClusterContinuousBackupConfig {
  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  EncryptionConfig?: Alloydb_ClusterContinuousBackupConfigEncryptionConfig;

  /*
The numbers of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window.
If not set, defaults to 14 days.
*/
  RecoveryWindowDays?: number;

  // Whether continuous backup recovery is enabled. If not set, defaults to true.
  Enabled?: boolean;
}

export function Alloydb_ClusterContinuousBackupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EncryptionConfig",
      "EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.",
      Alloydb_ClusterContinuousBackupConfigEncryptionConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "RecoveryWindowDays",
      "The numbers of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window.\nIf not set, defaults to 14 days.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether continuous backup recovery is enabled. If not set, defaults to true.",
      [],
      false,
      false,
    ),
  ];
}
