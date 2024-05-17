import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Integrationconnectors_ConnectionConfigVariableEncryptionKeyValue {
  /*
The [KMS key name] with which the content of the Operation is encrypted. The expected
format: projects/-/locations/-/keyRings/-/cryptoKeys/-.
Will be empty string if google managed.
*/
  KmsKeyName?: string;

  /*
Type of Encryption Key
Possible values are: `GOOGLE_MANAGED`, `CUSTOMER_MANAGED`.
*/
  Type?: string;
}

export function Integrationconnectors_ConnectionConfigVariableEncryptionKeyValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "The [KMS key name] with which the content of the Operation is encrypted. The expected\nformat: projects/*/locations/*/keyRings/*/cryptoKeys/*.\nWill be empty string if google managed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Type of Encryption Key\nPossible values are: `GOOGLE_MANAGED`, `CUSTOMER_MANAGED`.",
      [],
      true,
      false,
    ),
  ];
}
