import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ProjectDefaultConfigSignInHashConfig {
  /*
(Output)
Different password hash algorithms used in Identity Toolkit.
*/
  Algorithm?: string;

  /*
(Output)
Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.
*/
  MemoryCost?: number;

  /*
(Output)
How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.
*/
  Rounds?: number;

  /*
(Output)
Non-printable character to be inserted between the salt and plain text password in base64.
*/
  SaltSeparator?: string;

  /*
(Output)
Signer key in base64.
*/
  SignerKey?: string;
}

export function Identityplatform_ProjectDefaultConfigSignInHashConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MemoryCost",
      "(Output)\nMemory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Rounds",
      "(Output)\nHow many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SaltSeparator",
      "(Output)\nNon-printable character to be inserted between the salt and plain text password in base64.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SignerKey",
      "(Output)\nSigner key in base64.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Algorithm",
      "(Output)\nDifferent password hash algorithms used in Identity Toolkit.",
      [],
      false,
      false,
    ),
  ];
}
