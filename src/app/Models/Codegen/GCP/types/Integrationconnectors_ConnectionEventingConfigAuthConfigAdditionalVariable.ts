import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue,
  integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue_GetTypes,
} from "./integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue";
import {
  integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue,
  integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue_GetTypes,
} from "./integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue";

export interface integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable {
  /*
Encription key value of configVariable.
Structure is documented below.
*/
  encryptionKeyValue?: integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  integerValue?: number;

  // Key for the configVariable
  key?: string;

  /*
Secret value of configVariable
Structure is documented below.
*/
  secretValue?: integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  stringValue?: string;

  // Boolean Value of configVariable.
  booleanValue?: boolean;
}

export function integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "encryptionKeyValue",
      "Encription key value of configVariable.\nStructure is documented below.",
      integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "integerValue",
      "Integer Value of configVariable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for the configVariable",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "secretValue",
      "Secret value of configVariable\nStructure is documented below.",
      integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "String Value of configVariabley.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "booleanValue",
      "Boolean Value of configVariable.",
      [],
      false,
      false,
    ),
  ];
}
