import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring,
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring";
import {
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent,
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent";
import {
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig,
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig";

export interface Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig {
  // The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.
  ConstraintViolationLimit?: number;

  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  ExemptableNamespaces?: Array<string>;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  ReferentialRulesEnabled?: boolean;

  /*
Monitoring specifies the configuration of monitoring Policy Controller.
Structure is documented below.
*/
  Monitoring?: Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring;

  // Enables the ability to mutate resources using Policy Controller.
  MutationEnabled?: boolean;

  /*
Specifies the desired policy content on the cluster.
Structure is documented below.
*/
  PolicyContent?: Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent;

  // Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether.
  AuditIntervalSeconds?: number;

  /*
Map of deployment configs to deployments ("admission", "audit", "mutation").
Structure is documented below.
*/
  DeploymentConfigs?: Array<Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig>;

  /*
Configures the mode of the Policy Controller installation
Possible values are: `INSTALL_SPEC_UNSPECIFIED`, `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED`, `INSTALL_SPEC_DETACHED`.
*/
  InstallSpec?: string;

  // Logs all denies and dry run failures.
  LogDeniesEnabled?: boolean;
}

export function Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ReferentialRulesEnabled",
      "Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Monitoring",
      "Monitoring specifies the configuration of monitoring Policy Controller.\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "AuditIntervalSeconds",
      "Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstallSpec",
      "Configures the mode of the Policy Controller installation\nPossible values are: `INSTALL_SPEC_UNSPECIFIED`, `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED`, `INSTALL_SPEC_DETACHED`.",
      [],
      true,
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
      InputType.Number,
      "ConstraintViolationLimit",
      "The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.",
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
      "MutationEnabled",
      "Enables the ability to mutate resources using Policy Controller.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PolicyContent",
      "Specifies the desired policy content on the cluster.\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DeploymentConfigs",
      'Map of deployment configs to deployments ("admission", "audit", "mutation").\nStructure is documented below.',
      Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
