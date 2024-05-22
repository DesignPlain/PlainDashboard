import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sesv2_getEmailIdentityDkimSigningAttribute {
  //
  domainSigningPrivateKey?: string;

  //
  domainSigningSelector?: string;

  // [Easy DKIM] The last time a key pair was generated for this identity.
  lastKeyGenerationTimestamp?: string;

  // [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.
  nextSigningKeyLength?: string;

  // A string that indicates how DKIM was configured for the identity. `AWS_SES` indicates that DKIM was configured for the identity by using Easy DKIM. `EXTERNAL` indicates that DKIM was configured for the identity by using Bring Your Own DKIM (BYODKIM).
  signingAttributesOrigin?: string;

  // Describes whether or not Amazon SES has successfully located the DKIM records in the DNS records for the domain. See the [AWS SES API v2 Reference](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DkimAttributes.html#SES-Type-DkimAttributes-Status) for supported statuses.
  status?: string;

  // If you used Easy DKIM to configure DKIM authentication for the domain, then this object contains a set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon SES detects these records in the DNS configuration for your domain, the DKIM authentication process is complete. If you configured DKIM authentication for the domain by providing your own public-private key pair, then this object contains the selector for the public key.
  tokens?: Array<string>;

  // [Easy DKIM] The key length of the DKIM key pair in use.
  currentSigningKeyLength?: string;
}

export function sesv2_getEmailIdentityDkimSigningAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "currentSigningKeyLength",
      "[Easy DKIM] The key length of the DKIM key pair in use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainSigningPrivateKey",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainSigningSelector",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastKeyGenerationTimestamp",
      "[Easy DKIM] The last time a key pair was generated for this identity.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nextSigningKeyLength",
      "[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "signingAttributesOrigin",
      "A string that indicates how DKIM was configured for the identity. `AWS_SES` indicates that DKIM was configured for the identity by using Easy DKIM. `EXTERNAL` indicates that DKIM was configured for the identity by using Bring Your Own DKIM (BYODKIM).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Describes whether or not Amazon SES has successfully located the DKIM records in the DNS records for the domain. See the [AWS SES API v2 Reference](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DkimAttributes.html#SES-Type-DkimAttributes-Status) for supported statuses.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tokens",
      "If you used Easy DKIM to configure DKIM authentication for the domain, then this object contains a set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon SES detects these records in the DNS configuration for your domain, the DKIM authentication process is complete. If you configured DKIM authentication for the domain by providing your own public-private key pair, then this object contains the selector for the public key.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
