import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue,
  Integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue";
import {
  Integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue,
  Integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue";

export interface Integrationconnectors_ConnectionEventingConfigAdditionalVariable {
  // Boolean Value of configVariable.
  BooleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  EncryptionKeyValue?: Integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  IntegerValue?: number;

  // Key for the configVariable
  Key?: string;

  /*
Secret value of configVariable
Structure is documented below.
*/
  SecretValue?: Integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  StringValue?: string;
}

export function Integrationconnectors_ConnectionEventingConfigAdditionalVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SecretValue",
      "Secret value of configVariable\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigAdditionalVariableSecretValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StringValue",
      "String Value of configVariabley.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "BooleanValue",
      "Boolean Value of configVariable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EncryptionKeyValue",
      "Encription key value of configVariable.\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigAdditionalVariableEncryptionKeyValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "IntegerValue",
      "Integer Value of configVariable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Key for the configVariable",
      [],
      true,
      false,
    ),
  ];
}
