export interface ProjectDefaultConfigSignInHashConfig {
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

  /*
(Output)
Different password hash algorithms used in Identity Toolkit.
*/
  Algorithm?: string;
}
