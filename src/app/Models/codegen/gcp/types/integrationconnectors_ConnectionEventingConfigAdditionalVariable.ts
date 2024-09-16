import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue,
  integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue_GetTypes,
} from './integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue';
import {
  integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue,
  integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue_GetTypes,
} from './integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue';

export interface integrationconnectors_ConnectionEventingConfigAdditionalVariable {
  // Boolean Value of configVariable.
  booleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  encryptionKeyValue?: integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  integerValue?: number;

  // Key for the configVariable
  key?: string;

  /*
Secret value of configVariable
Structure is documented below.
*/
  secretValue?: integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  stringValue?: string;
}

export function integrationconnectors_ConnectionEventingConfigAdditionalVariable_GetTypes(): DynamicUIProps[] {
  return [
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
        integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue_GetTypes(),
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
    new DynamicUIProps(
      InputType.Object,
      'secretValue',
      'Secret value of configVariable\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue_GetTypes(),
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
  ];
}
