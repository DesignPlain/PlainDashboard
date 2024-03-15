import { ClusterContinuousBackupInfoEncryptionInfo } from "./ClusterContinuousBackupInfoEncryptionInfo";

export interface ClusterContinuousBackupInfo {
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
  EncryptionInfos?: Array<ClusterContinuousBackupInfoEncryptionInfo>;

  /*
(Output)
Days of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request.
*/
  Schedules?: Array<string>;
}
