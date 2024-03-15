import { ConnectionSslConfigAdditionalVariableEncryptionKeyValue } from "./ConnectionSslConfigAdditionalVariableEncryptionKeyValue";
import { ConnectionSslConfigAdditionalVariableSecretValue } from "./ConnectionSslConfigAdditionalVariableSecretValue";

export interface ConnectionSslConfigAdditionalVariable {
  /*
Encription key value of configVariable.
Structure is documented below.
*/
  EncryptionKeyValue?: ConnectionSslConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  IntegerValue?: number;

  // Key for the configVariable
  Key?: string;

  /*
Secret value of configVariable
Structure is documented below.
*/
  SecretValue?: ConnectionSslConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  StringValue?: string;

  // Boolean Value of configVariable.
  BooleanValue?: boolean;
}
