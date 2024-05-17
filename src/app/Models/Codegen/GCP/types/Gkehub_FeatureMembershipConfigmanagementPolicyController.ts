import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring,
  Gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring_GetTypes,
} from "./Gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring";

export interface Gkehub_FeatureMembershipConfigmanagementPolicyController {
  // Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  AuditIntervalSeconds?: string;

  // Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
  Enabled?: boolean;

  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  ExemptableNamespaces?: Array<string>;

  // Logs all denies and dry run failures.
  LogDeniesEnabled?: boolean;

  // Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"]
  Monitoring?: Gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring;

  // Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.
  MutationEnabled?: boolean;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  ReferentialRulesEnabled?: boolean;

  // Installs the default template library along with Policy Controller.
  TemplateLibraryInstalled?: boolean;
}

export function Gkehub_FeatureMembershipConfigmanagementPolicyController_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "MutationEnabled",
      "Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ReferentialRulesEnabled",
      "Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "TemplateLibraryInstalled",
      "Installs the default template library along with Policy Controller.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AuditIntervalSeconds",
      "Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExemptableNamespaces",
      "The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "LogDeniesEnabled",
      "Logs all denies and dry run failures.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Monitoring",
      'Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"]',
      Gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring_GetTypes(),
      false,
      false,
    ),
  ];
}
