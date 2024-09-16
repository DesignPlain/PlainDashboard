import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue,
  integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue_GetTypes,
} from './integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue';
import {
  integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue,
  integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue_GetTypes,
} from './integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue';

export interface integrationconnectors_ConnectionAuthConfigAdditionalVariable {
  /*
Secret value of configVariable
Structure is documented below.
*/
  secretValue?: integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  stringValue?: string;

  // Boolean Value of configVariable.
  booleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  encryptionKeyValue?: integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  integerValue?: number;

  // Key for the configVariable
  key?: string;
}

export function integrationconnectors_ConnectionAuthConfigAdditionalVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'secretValue',
      'Secret value of configVariable\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stringValue',
      'String Value of configVariabley.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'booleanValue',
      'Boolean Value of configVariable.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'encryptionKeyValue',
      'Encription key value of configVariable.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'integerValue',
      'Integer Value of configVariable.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'key',
      'Key for the configVariable',
      () => [],
      true,
      false,
    ),
  ];
}
