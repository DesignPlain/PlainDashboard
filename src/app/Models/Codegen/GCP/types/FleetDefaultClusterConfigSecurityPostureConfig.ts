export interface FleetDefaultClusterConfigSecurityPostureConfig {
  /*
Sets which mode to use for vulnerability scanning.
Possible values are: `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC`, `VULNERABILITY_ENTERPRISE`.
*/
  VulnerabilityMode?: string;

  /*
Sets which mode to use for Security Posture features.
Possible values are: `DISABLED`, `BASIC`.
*/
  Mode?: string;
}
