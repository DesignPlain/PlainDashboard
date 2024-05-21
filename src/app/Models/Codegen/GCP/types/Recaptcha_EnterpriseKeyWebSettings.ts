import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface recaptcha_EnterpriseKeyWebSettings {
  // Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE
  integrationType?: string;

  // If set to true, it means allowed_domains will not be enforced.
  allowAllDomains?: boolean;

  // If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
  allowAmpTraffic?: boolean;

  // Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
  allowedDomains?: Array<string>;

  // Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY
  challengeSecurityPreference?: string;
}

export function recaptcha_EnterpriseKeyWebSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "integrationType",
      "Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowAllDomains",
      "If set to true, it means allowed_domains will not be enforced.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowAmpTraffic",
      "If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedDomains",
      "Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "challengeSecurityPreference",
      "Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY",
      [],
      false,
      false,
    ),
  ];
}
