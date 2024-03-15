import { FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent } from "./FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent";
import { FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig } from "./FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig";
import { FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring } from "./FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring";

export interface FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig {
  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  ExemptableNamespaces?: Array<string>;

  // Logs all denies and dry run failures.
  LogDeniesEnabled?: boolean;

  /*
Monitoring specifies the configuration of monitoring Policy Controller.
Structure is documented below.
*/
  Monitoring?: FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring;

  /*
Specifies the desired policy content on the cluster.
Structure is documented below.
*/
  PolicyContent?: FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  ReferentialRulesEnabled?: boolean;

  // Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether.
  AuditIntervalSeconds?: number;

  /*
Map of deployment configs to deployments ("admission", "audit", "mutation").
Structure is documented below.
*/
  DeploymentConfigs?: Array<FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig>;

  // Enables the ability to mutate resources using Policy Controller.
  MutationEnabled?: boolean;

  // The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.
  ConstraintViolationLimit?: number;

  /*
Configures the mode of the Policy Controller installation
Possible values are: `INSTALL_SPEC_UNSPECIFIED`, `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED`, `INSTALL_SPEC_DETACHED`.
*/
  InstallSpec?: string;
}
