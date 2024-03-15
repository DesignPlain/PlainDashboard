export interface DatabaseInstanceSettingsIpConfigurationPscConfig {
  // List of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).
  AllowedConsumerProjects?: Array<string>;

  // Whether PSC connectivity is enabled for this instance.
  PscEnabled?: boolean;
}
