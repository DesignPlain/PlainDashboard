import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterEncryptionInfo {
  /*
(Output)
Output only. Type of encryption.
*/
  EncryptionType?: string;

  /*
(Output)
Output only. Cloud KMS key versions that are being used to protect the database or the backup.
*/
  KmsKeyVersions?: Array<string>;
}

export function Alloydb_ClusterEncryptionInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EncryptionType",
      "(Output)\nOutput only. Type of encryption.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "KmsKeyVersions",
      "(Output)\nOutput only. Cloud KMS key versions that are being used to protect the database or the backup.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
