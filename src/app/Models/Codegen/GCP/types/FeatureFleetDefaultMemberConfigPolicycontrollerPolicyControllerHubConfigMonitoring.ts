export interface FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring {
  /*
Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export.
Each value may be one of: `MONITORING_BACKEND_UNSPECIFIED`, `PROMETHEUS`, `CLOUD_MONITORING`.
*/
  Backends?: Array<string>;
}
