import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig {
  // Google Cloud Armor stops applying the action in the automatically deployed rule to an identified attacker after this duration. The rule continues to operate against new requests.
  expirationSec?: number;

  // Rules are only automatically deployed when the estimated impact to baseline traffic from the suggested mitigation is below this threshold.
  impactedBaselineThreshold?: number;

  // Identifies new attackers only when the load to the backend service that is under attack exceeds this threshold.
  loadThreshold?: number;

  // Rules are only automatically deployed for alerts on potential attacks with confidence scores greater than this threshold.
  confidenceThreshold?: number;
}

export function compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "expirationSec",
      "Google Cloud Armor stops applying the action in the automatically deployed rule to an identified attacker after this duration. The rule continues to operate against new requests.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "impactedBaselineThreshold",
      "Rules are only automatically deployed when the estimated impact to baseline traffic from the suggested mitigation is below this threshold.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "loadThreshold",
      "Identifies new attackers only when the load to the backend service that is under attack exceeds this threshold.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "confidenceThreshold",
      "Rules are only automatically deployed for alerts on potential attacks with confidence scores greater than this threshold.",
      [],
      false,
      false,
    ),
  ];
}
