import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  integrationconnectors_ConnectionConfigVariableSecretValue,
  integrationconnectors_ConnectionConfigVariableSecretValue_GetTypes,
} from "./integrationconnectors_ConnectionConfigVariableSecretValue";
import {
  integrationconnectors_ConnectionConfigVariableEncryptionKeyValue,
  integrationconnectors_ConnectionConfigVariableEncryptionKeyValue_GetTypes,
} from "./integrationconnectors_ConnectionConfigVariableEncryptionKeyValue";

export interface integrationconnectors_ConnectionConfigVariable {
  /*
Secret value of configVariable.
Structure is documented below.
*/
  secretValue?: integrationconnectors_ConnectionConfigVariableSecretValue;

  // String Value of configVariabley
  stringValue?: string;

  // Boolean Value of configVariable
  booleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  encryptionKeyValue?: integrationconnectors_ConnectionConfigVariableEncryptionKeyValue;

  // Integer Value of configVariable
  integerValue?: number;

  // Key for the configVariable
  key?: string;
}

export function integrationconnectors_ConnectionConfigVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "String Value of configVariabley",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "booleanValue",
      "Boolean Value of configVariable",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryptionKeyValue",
      "Encription key value of configVariable.\nStructure is documented below.",
      integrationconnectors_ConnectionConfigVariableEncryptionKeyValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "integerValue",
      "Integer Value of configVariable",
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
      "Secret value of configVariable.\nStructure is documented below.",
      integrationconnectors_ConnectionConfigVariableSecretValue_GetTypes(),
      false,
      false,
    ),
  ];
}
