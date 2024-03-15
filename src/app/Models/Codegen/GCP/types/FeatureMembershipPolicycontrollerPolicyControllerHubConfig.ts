import { FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring } from "./FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring";
import { FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent } from "./FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent";

export interface FeatureMembershipPolicycontrollerPolicyControllerHubConfig {
  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  ExemptableNamespaces?: Array<string>;

  // Logs all denies and dry run failures.
  LogDeniesEnabled?: boolean;

  // Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.
  MutationEnabled?: boolean;

  // Specifies the desired policy content on the cluster. Structure is documented below.
  PolicyContent?: FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent;

  // The maximum number of audit violations to be stored in a constraint. If not set, the  default of 20 will be used.
  ConstraintViolationLimit?: number;

  // Configures the mode of the Policy Controller installation. Must be one of `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED` or `INSTALL_SPEC_DETACHED`.
  InstallSpec?: string;

  // Specifies the backends Policy Controller should export metrics to. Structure is documented below.
  Monitoring?: FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  ReferentialRulesEnabled?: boolean;

  // Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  AuditIntervalSeconds?: number;
}
