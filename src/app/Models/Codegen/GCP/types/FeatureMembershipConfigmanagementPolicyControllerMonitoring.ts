export interface FeatureMembershipConfigmanagementPolicyControllerMonitoring {
  // Specifies the list of backends Policy Controller will export to. Must be one of `CLOUD_MONITORING` or `PROMETHEUS`. Defaults to [`CLOUD_MONITORING`, `PROMETHEUS`]. Specifying an empty value `[]` disables metrics export.
  Backends?: Array<string>;
}
