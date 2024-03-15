import { FeatureMembershipConfigmanagementPolicyControllerMonitoring } from "./FeatureMembershipConfigmanagementPolicyControllerMonitoring";

export interface FeatureMembershipConfigmanagementPolicyController {
  // Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
  Enabled?: boolean;

  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  ExemptableNamespaces?: Array<string>;

  // Logs all denies and dry run failures.
  LogDeniesEnabled?: boolean;

  // Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"]
  Monitoring?: FeatureMembershipConfigmanagementPolicyControllerMonitoring;

  // Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.
  MutationEnabled?: boolean;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  ReferentialRulesEnabled?: boolean;

  // Installs the default template library along with Policy Controller.
  TemplateLibraryInstalled?: boolean;

  // Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  AuditIntervalSeconds?: string;
}
