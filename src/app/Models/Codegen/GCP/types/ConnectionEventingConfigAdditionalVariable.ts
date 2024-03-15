import { ConnectionEventingConfigAdditionalVariableSecretValue } from "./ConnectionEventingConfigAdditionalVariableSecretValue";
import { ConnectionEventingConfigAdditionalVariableEncryptionKeyValue } from "./ConnectionEventingConfigAdditionalVariableEncryptionKeyValue";

export interface ConnectionEventingConfigAdditionalVariable {
  // Integer Value of configVariable.
  IntegerValue?: number;

  // Key for the configVariable
  Key?: string;

  /*
Secret value of configVariable
Structure is documented below.
*/
  SecretValue?: ConnectionEventingConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  StringValue?: string;

  // Boolean Value of configVariable.
  BooleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  EncryptionKeyValue?: ConnectionEventingConfigAdditionalVariableEncryptionKeyValue;
}
