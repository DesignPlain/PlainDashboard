import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Alloydb_ClusterContinuousBackupInfoEncryptionInfo,
  Alloydb_ClusterContinuousBackupInfoEncryptionInfo_GetTypes,
} from "./Alloydb_ClusterContinuousBackupInfoEncryptionInfo";

export interface Alloydb_ClusterContinuousBackupInfo {
  /*
(Output)
Days of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request.
*/
  Schedules?: Array<string>;

  /*
(Output)
The earliest restorable time that can be restored to. Output only field.
*/
  EarliestRestorableTime?: string;

  /*
(Output)
When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled.
*/
  EnabledTime?: string;

  /*
(Output)
Output only. The encryption information for the WALs and backups required for ContinuousBackup.
Structure is documented below.
*/
  EncryptionInfos?: Array<Alloydb_ClusterContinuousBackupInfoEncryptionInfo>;
}

export function Alloydb_ClusterContinuousBackupInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Schedules",
      "(Output)\nDays of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EarliestRestorableTime",
      "(Output)\nThe earliest restorable time that can be restored to. Output only field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EnabledTime",
      "(Output)\nWhen ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EncryptionInfos",
      "(Output)\nOutput only. The encryption information for the WALs and backups required for ContinuousBackup.\nStructure is documented below.",
      Alloydb_ClusterContinuousBackupInfoEncryptionInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
