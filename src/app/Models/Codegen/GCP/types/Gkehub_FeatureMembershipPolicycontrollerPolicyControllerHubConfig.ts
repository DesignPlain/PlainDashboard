import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring,
  Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes,
} from "./Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring";
import {
  Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent,
  Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes,
} from "./Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent";

export interface Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig {
  // Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  AuditIntervalSeconds?: number;

  // Logs all denies and dry run failures.
  LogDeniesEnabled?: boolean;

  // Specifies the desired policy content on the cluster. Structure is documented below.
  PolicyContent?: Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  ReferentialRulesEnabled?: boolean;

  // The maximum number of audit violations to be stored in a constraint. If not set, the  default of 20 will be used.
  ConstraintViolationLimit?: number;

  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  ExemptableNamespaces?: Array<string>;

  // Configures the mode of the Policy Controller installation. Must be one of `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED` or `INSTALL_SPEC_DETACHED`.
  InstallSpec?: string;

  // Specifies the backends Policy Controller should export metrics to. Structure is documented below.
  Monitoring?: Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring;

  // Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.
  MutationEnabled?: boolean;
}

export function Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PolicyContent",
      "Specifies the desired policy content on the cluster. Structure is documented below.",
      Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes(),
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
      InputType.Number,
      "ConstraintViolationLimit",
      "The maximum number of audit violations to be stored in a constraint. If not set, the  default of 20 will be used.",
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
      InputType.Number,
      "AuditIntervalSeconds",
      "Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.",
      [],
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
      InputType.String,
      "InstallSpec",
      "Configures the mode of the Policy Controller installation. Must be one of `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED` or `INSTALL_SPEC_DETACHED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Monitoring",
      "Specifies the backends Policy Controller should export metrics to. Structure is documented below.",
      Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "MutationEnabled",
      "Enables mutation in policy controller. If true, mutation CRDs, webhook, and controller deployment will be deployed to the cluster.",
      [],
      false,
      false,
    ),
  ];
}
