import { ConnectionAuthConfigAdditionalVariableSecretValue } from "./ConnectionAuthConfigAdditionalVariableSecretValue";
import { ConnectionAuthConfigAdditionalVariableEncryptionKeyValue } from "./ConnectionAuthConfigAdditionalVariableEncryptionKeyValue";

export interface ConnectionAuthConfigAdditionalVariable {
  /*
Secret value of configVariable
Structure is documented below.
*/
  SecretValue?: ConnectionAuthConfigAdditionalVariableSecretValue;

  // String Value of configVariabley.
  StringValue?: string;

  // Boolean Value of configVariable.
  BooleanValue?: boolean;

  /*
Encription key value of configVariable.
Structure is documented below.
*/
  EncryptionKeyValue?: ConnectionAuthConfigAdditionalVariableEncryptionKeyValue;

  // Integer Value of configVariable.
  IntegerValue?: number;

  // Key for the configVariable
  Key?: string;
}
