import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface identityplatform_ConfigSignInHashConfig {
  /*
(Output)
How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.
*/
  rounds?: number;

  /*
(Output)
Non-printable character to be inserted between the salt and plain text password in base64.
*/
  saltSeparator?: string;

  /*
(Output)
Signer key in base64.
*/
  signerKey?: string;

  /*
(Output)
Different password hash algorithms used in Identity Toolkit.
*/
  algorithm?: string;

  /*
(Output)
Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.
*/
  memoryCost?: number;
}

export function identityplatform_ConfigSignInHashConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "signerKey",
      "(Output)\nSigner key in base64.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "algorithm",
      "(Output)\nDifferent password hash algorithms used in Identity Toolkit.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryCost",
      "(Output)\nMemory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rounds",
      "(Output)\nHow many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "saltSeparator",
      "(Output)\nNon-printable character to be inserted between the salt and plain text password in base64.",
      [],
      false,
      false,
    ),
  ];
}
