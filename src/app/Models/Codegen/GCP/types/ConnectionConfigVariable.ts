import { ConnectionConfigVariableEncryptionKeyValue } from "./ConnectionConfigVariableEncryptionKeyValue";
import { ConnectionConfigVariableSecretValue } from "./ConnectionConfigVariableSecretValue";

export interface ConnectionConfigVariable {
  // Boolean Value of configVariable
  BooleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  EncryptionKeyValue?: ConnectionConfigVariableEncryptionKeyValue;

  // Integer Value of configVariable
  IntegerValue?: number;

  // Key for the configVariable
  Key?: string;

  /*
Secret value of configVariable.
Structure is documented below.
*/
  SecretValue?: ConnectionConfigVariableSecretValue;

  // String Value of configVariabley
  StringValue?: string;
}
