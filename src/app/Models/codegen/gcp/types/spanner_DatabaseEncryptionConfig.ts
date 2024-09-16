import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface spanner_DatabaseEncryptionConfig {
  /*
Fully qualified name of the KMS key to use to encrypt this database. This key must exist
in the same location as the Spanner Database.
*/
  kmsKeyName?: string;
}

export function spanner_DatabaseEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyName',
      'Fully qualified name of the KMS key to use to encrypt this database. This key must exist\nin the same location as the Spanner Database.',
      () => [],
      true,
      true,
    ),
  ];
}
