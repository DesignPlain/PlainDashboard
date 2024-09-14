import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  alloydb_ClusterContinuousBackupInfoEncryptionInfo,
  alloydb_ClusterContinuousBackupInfoEncryptionInfo_GetTypes,
} from "./alloydb_ClusterContinuousBackupInfoEncryptionInfo";

export interface alloydb_ClusterContinuousBackupInfo {
  /*
(Output)
The earliest restorable time that can be restored to. Output only field.
*/
  earliestRestorableTime?: string;

  /*
(Output)
When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled.
*/
  enabledTime?: string;

  /*
(Output)
Output only. The encryption information for the WALs and backups required for ContinuousBackup.
Structure is documented below.
*/
  encryptionInfos?: Array<alloydb_ClusterContinuousBackupInfoEncryptionInfo>;

  /*
(Output)
Days of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request.
*/
  schedules?: Array<string>;
}

export function alloydb_ClusterContinuousBackupInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "earliestRestorableTime",
      "(Output)\nThe earliest restorable time that can be restored to. Output only field.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "enabledTime",
      "(Output)\nWhen ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "encryptionInfos",
      "(Output)\nOutput only. The encryption information for the WALs and backups required for ContinuousBackup.\nStructure is documented below.",
      () => alloydb_ClusterContinuousBackupInfoEncryptionInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "schedules",
      "(Output)\nDays of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
