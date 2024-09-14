import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue,
  integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue_GetTypes,
} from "./integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue";
import {
  integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue,
  integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue_GetTypes,
} from "./integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue";

export interface integrationconnectors_ConnectionSslConfigAdditionalVariable {
  // Boolean Value of configVariable.
  booleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  encryptionKeyValue?: integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  integerValue?: number;

  // Key for the configVariable
  key?: string;

  /*
Secret value of configVariable
Structure is documented below.
*/
  secretValue?: integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  stringValue?: string;
}

export function integrationconnectors_ConnectionSslConfigAdditionalVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "String Value of configVariabley.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "booleanValue",
      "Boolean Value of configVariable.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryptionKeyValue",
      "Encription key value of configVariable.\nStructure is documented below.",
      () =>
        integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "integerValue",
      "Integer Value of configVariable.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for the configVariable",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "secretValue",
      "Secret value of configVariable\nStructure is documented below.",
      () =>
        integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue_GetTypes(),
      false,
      false,
    ),
  ];
}
