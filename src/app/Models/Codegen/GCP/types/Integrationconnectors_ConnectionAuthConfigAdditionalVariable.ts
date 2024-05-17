import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue,
  Integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue";
import {
  Integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue,
  Integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue";

export interface Integrationconnectors_ConnectionAuthConfigAdditionalVariable {
  // Boolean Value of configVariable.
  BooleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  EncryptionKeyValue?: Integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  IntegerValue?: number;

  // Key for the configVariable
  Key?: string;

  /*
Secret value of configVariable
Structure is documented below.
*/
  SecretValue?: Integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  StringValue?: string;
}

export function Integrationconnectors_ConnectionAuthConfigAdditionalVariable_GetTypes(): DynamicUIProps[] {
  return [
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
      Integrationconnectors_ConnectionAuthConfigAdditionalVariableEncryptionKeyValue_GetTypes(),
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
    new DynamicUIProps(
      InputType.Object,
      "SecretValue",
      "Secret value of configVariable\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigAdditionalVariableSecretValue_GetTypes(),
      false,
      false,
    ),
  ];
}
