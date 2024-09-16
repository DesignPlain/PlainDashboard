import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface integrationconnectors_ConnectionConfigVariableEncryptionKeyValue {
  /*
The [KMS key name] with which the content of the Operation is encrypted. The expected
format: projects/-/locations/-/keyRings/-/cryptoKeys/-.
Will be empty string if google managed.
*/
  kmsKeyName?: string;

  /*
Type of Encryption Key
Possible values are: `GOOGLE_MANAGED`, `CUSTOMER_MANAGED`.
*/
  type?: string;
}

export function integrationconnectors_ConnectionConfigVariableEncryptionKeyValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyName',
      'The [KMS key name] with which the content of the Operation is encrypted. The expected\nformat: projects/*/locations/*/keyRings/*/cryptoKeys/*.\nWill be empty string if google managed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of Encryption Key\nPossible values are: `GOOGLE_MANAGED`, `CUSTOMER_MANAGED`.',
      () => [],
      true,
      false,
    ),
  ];
}
