import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Spanner_DatabaseEncryptionConfig {
  /*
Fully qualified name of the KMS key to use to encrypt this database. This key must exist
in the same location as the Spanner Database.
*/
  KmsKeyName?: string;
}

export function Spanner_DatabaseEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "Fully qualified name of the KMS key to use to encrypt this database. This key must exist\nin the same location as the Spanner Database.",
      [],
      true,
      true,
    ),
  ];
}
