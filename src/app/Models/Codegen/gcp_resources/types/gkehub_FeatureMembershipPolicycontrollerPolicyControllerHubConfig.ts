import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent,
  gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes,
} from "./gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent";
import {
  gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring,
  gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes,
} from "./gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring";

export interface gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig {
  // Configures the mode of the Policy Controller installation. Must be one of `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED` or `INSTALL_SPEC_DETACHED`.
  installSpec?: string;

  // Specifies the desired policy content on the cluster. Structure is documented below.
  policyContent?: gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  referentialRulesEnabled?: boolean;

  // The maximum number of audit violations to be stored in a constraint. If not set, the  default of 20 will be used.
  constraintViolationLimit?: number;

  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  exemptableNamespaces?: Array<string>;

  // Logs all denies and dry run failures.
  logDeniesEnabled?: boolean;

  // Specifies the backends Policy Controller should export metrics to. Structure is documented below.
  monitoring?: gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring;

  // Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.
  mutationEnabled?: boolean;

  // Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  auditIntervalSeconds?: number;
}

export function gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "monitoring",
      "Specifies the backends Policy Controller should export metrics to. Structure is documented below.",
      gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes(),
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
      InputType.String,
      "installSpec",
      "Configures the mode of the Policy Controller installation. Must be one of `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED` or `INSTALL_SPEC_DETACHED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "policyContent",
      "Specifies the desired policy content on the cluster. Structure is documented below.",
      gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes(),
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
      InputType.Number,
      "auditIntervalSeconds",
      "Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.",
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
      InputType.Number,
      "constraintViolationLimit",
      "The maximum number of audit violations to be stored in a constraint. If not set, the  default of 20 will be used.",
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
  ];
}
