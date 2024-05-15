import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Recaptcha_EnterpriseKeyWebSettings {
  // If set to true, it means allowed_domains will not be enforced.
  AllowAllDomains?: boolean;

  // If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
  AllowAmpTraffic?: boolean;

  // Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
  AllowedDomains?: Array<string>;

  // Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY
  ChallengeSecurityPreference?: string;

  // Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE
  IntegrationType?: string;
}

export function Recaptcha_EnterpriseKeyWebSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedDomains",
      "Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ChallengeSecurityPreference",
      "Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IntegrationType",
      "Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowAllDomains",
      "If set to true, it means allowed_domains will not be enforced.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowAmpTraffic",
      "If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.",
      [],
      false,
      false,
    ),
  ];
}
