export interface EnterpriseKeyWebSettings {
  // If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
  AllowAmpTraffic?: boolean;

  // Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
  AllowedDomains?: Array<string>;

  // Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY
  ChallengeSecurityPreference?: string;

  // Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE
  IntegrationType?: string;

  // If set to true, it means allowed_domains will not be enforced.
  AllowAllDomains?: boolean;
}
