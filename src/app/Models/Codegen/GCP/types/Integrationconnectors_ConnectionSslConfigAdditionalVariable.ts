import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue,
  Integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue_GetTypes,
} from "./Integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue";
import {
  Integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue,
  Integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue_GetTypes,
} from "./Integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue";

export interface Integrationconnectors_ConnectionSslConfigAdditionalVariable {
  /*
Secret value of configVariable
Structure is documented below.
*/
  SecretValue?: Integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  StringValue?: string;

  // Boolean Value of configVariable.
  BooleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  EncryptionKeyValue?: Integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  IntegerValue?: number;

  // Key for the configVariable
  Key?: string;
}

export function Integrationconnectors_ConnectionSslConfigAdditionalVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SecretValue",
      "Secret value of configVariable\nStructure is documented below.",
      Integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue_GetTypes(),
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
      Integrationconnectors_ConnectionSslConfigAdditionalVariableEncryptionKeyValue_GetTypes(),
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
