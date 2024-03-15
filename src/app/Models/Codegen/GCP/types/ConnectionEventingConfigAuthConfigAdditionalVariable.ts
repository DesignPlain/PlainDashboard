import { ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue } from "./ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue";
import { ConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue } from "./ConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue";

export interface ConnectionEventingConfigAuthConfigAdditionalVariable {
  /*
Secret value of configVariable
Structure is documented below.
*/
  SecretValue?: ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  StringValue?: string;

  // Boolean Value of configVariable.
  BooleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  EncryptionKeyValue?: ConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  IntegerValue?: number;

  // Key for the configVariable
  Key?: string;
}
