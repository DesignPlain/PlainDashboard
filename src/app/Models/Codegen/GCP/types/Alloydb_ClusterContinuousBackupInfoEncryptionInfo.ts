import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alloydb_ClusterContinuousBackupInfoEncryptionInfo {
  /*
(Output)
Output only. Type of encryption.
*/
  encryptionType?: string;

  /*
(Output)
Output only. Cloud KMS key versions that are being used to protect the database or the backup.
*/
  kmsKeyVersions?: Array<string>;
}

export function alloydb_ClusterContinuousBackupInfoEncryptionInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionType",
      "(Output)\nOutput only. Type of encryption.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "kmsKeyVersions",
      "(Output)\nOutput only. Cloud KMS key versions that are being used to protect the database or the backup.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
