import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring,
  gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring_GetTypes,
} from "./gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring";

export interface gkehub_FeatureMembershipConfigmanagementPolicyController {
  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  exemptableNamespaces?: Array<string>;

  // Logs all denies and dry run failures.
  logDeniesEnabled?: boolean;

  // Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"]
  monitoring?: gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring;

  // Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.
  mutationEnabled?: boolean;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  referentialRulesEnabled?: boolean;

  // Installs the default template library along with Policy Controller.
  templateLibraryInstalled?: boolean;

  // Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  auditIntervalSeconds?: string;

  // Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
  enabled?: boolean;
}

export function gkehub_FeatureMembershipConfigmanagementPolicyController_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exemptableNamespaces",
      "The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "logDeniesEnabled",
      "Logs all denies and dry run failures.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "monitoring",
      'Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"]',
      gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "mutationEnabled",
      "Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "referentialRulesEnabled",
      "Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "templateLibraryInstalled",
      "Installs the default template library along with Policy Controller.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "auditIntervalSeconds",
      "Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.",
      [],
      false,
      false,
    ),
  ];
}
