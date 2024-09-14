import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sesv2_EmailIdentityDkimSigningAttributes {
  // [Easy DKIM] The last time a key pair was generated for this identity.
  lastKeyGenerationTimestamp?: string;

  // [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day. Valid values: `RSA_1024_BIT`, `RSA_2048_BIT`.
  nextSigningKeyLength?: string;

  // A string that indicates how DKIM was configured for the identity. `AWS_SES` indicates that DKIM was configured for the identity by using Easy DKIM. `EXTERNAL` indicates that DKIM was configured for the identity by using Bring Your Own DKIM (BYODKIM).
  signingAttributesOrigin?: string;

  // Describes whether or not Amazon SES has successfully located the DKIM records in the DNS records for the domain. See the [AWS SES API v2 Reference](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DkimAttributes.html#SES-Type-DkimAttributes-Status) for supported statuses.
  status?: string;

  // If you used Easy DKIM to configure DKIM authentication for the domain, then this object contains a set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon SES detects these records in the DNS configuration for your domain, the DKIM authentication process is complete. If you configured DKIM authentication for the domain by providing your own public-private key pair, then this object contains the selector for the public key.
  tokens?: Array<string>;

  // [Easy DKIM] The key length of the DKIM key pair in use.
  currentSigningKeyLength?: string;

  /*
[Bring Your Own DKIM] A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.

> --NOTE:-- You have to delete the first and last lines ('-----BEGIN PRIVATE KEY-----' and '-----END PRIVATE KEY-----', respectively) of the generated private key. Additionally, you have to remove the line breaks in the generated private key. The resulting value is a string of characters with no spaces or line breaks.
*/
  domainSigningPrivateKey?: string;

  // [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
  domainSigningSelector?: string;
}

export function sesv2_EmailIdentityDkimSigningAttributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "signingAttributesOrigin",
      "A string that indicates how DKIM was configured for the identity. `AWS_SES` indicates that DKIM was configured for the identity by using Easy DKIM. `EXTERNAL` indicates that DKIM was configured for the identity by using Bring Your Own DKIM (BYODKIM).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Describes whether or not Amazon SES has successfully located the DKIM records in the DNS records for the domain. See the [AWS SES API v2 Reference](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DkimAttributes.html#SES-Type-DkimAttributes-Status) for supported statuses.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tokens",
      "If you used Easy DKIM to configure DKIM authentication for the domain, then this object contains a set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon SES detects these records in the DNS configuration for your domain, the DKIM authentication process is complete. If you configured DKIM authentication for the domain by providing your own public-private key pair, then this object contains the selector for the public key.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "currentSigningKeyLength",
      "[Easy DKIM] The key length of the DKIM key pair in use.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainSigningPrivateKey",
      "[Bring Your Own DKIM] A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.\n\n> **NOTE:** You have to delete the first and last lines ('-----BEGIN PRIVATE KEY-----' and '-----END PRIVATE KEY-----', respectively) of the generated private key. Additionally, you have to remove the line breaks in the generated private key. The resulting value is a string of characters with no spaces or line breaks.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainSigningSelector",
      "[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastKeyGenerationTimestamp",
      "[Easy DKIM] The last time a key pair was generated for this identity.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nextSigningKeyLength",
      "[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day. Valid values: `RSA_1024_BIT`, `RSA_2048_BIT`.",
      () => [],
      false,
      false,
    ),
  ];
}
