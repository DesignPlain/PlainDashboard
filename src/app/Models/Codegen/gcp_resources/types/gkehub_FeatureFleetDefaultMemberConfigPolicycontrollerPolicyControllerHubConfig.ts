import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring,
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring";
import {
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig,
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig";
import {
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent,
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent";

export interface gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig {
  /*
Monitoring specifies the configuration of monitoring Policy Controller.
Structure is documented below.
*/
  monitoring?: gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring;

  // Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  referentialRulesEnabled?: boolean;

  /*
Map of deployment configs to deployments ("admission", "audit", "mutation").
Structure is documented below.
*/
  deploymentConfigs?: Array<gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig>;

  // Logs all denies and dry run failures.
  logDeniesEnabled?: boolean;

  // The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  exemptableNamespaces?: Array<string>;

  /*
Configures the mode of the Policy Controller installation
Possible values are: `INSTALL_SPEC_UNSPECIFIED`, `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED`, `INSTALL_SPEC_DETACHED`.
*/
  installSpec?: string;

  // Enables the ability to mutate resources using Policy Controller.
  mutationEnabled?: boolean;

  /*
Specifies the desired policy content on the cluster.
Structure is documented below.
*/
  policyContent?: gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent;

  // Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether.
  auditIntervalSeconds?: number;

  // The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.
  constraintViolationLimit?: number;
}

export function gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "logDeniesEnabled",
      "Logs all denies and dry run failures.",
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
      InputType.String,
      "installSpec",
      "Configures the mode of the Policy Controller installation\nPossible values are: `INSTALL_SPEC_UNSPECIFIED`, `INSTALL_SPEC_NOT_INSTALLED`, `INSTALL_SPEC_ENABLED`, `INSTALL_SPEC_SUSPENDED`, `INSTALL_SPEC_DETACHED`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "policyContent",
      "Specifies the desired policy content on the cluster.\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "auditIntervalSeconds",
      "Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "constraintViolationLimit",
      "The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "monitoring",
      "Monitoring specifies the configuration of monitoring Policy Controller.\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "deploymentConfigs",
      'Map of deployment configs to deployments ("admission", "audit", "mutation").\nStructure is documented below.',
      gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig_GetTypes(),
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
      "mutationEnabled",
      "Enables the ability to mutate resources using Policy Controller.",
      [],
      false,
      false,
    ),
  ];
}
