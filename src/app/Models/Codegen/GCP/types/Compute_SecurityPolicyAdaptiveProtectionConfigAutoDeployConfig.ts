import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig {
  // Rules are only automatically deployed for alerts on potential attacks with confidence scores greater than this threshold.
  ConfidenceThreshold?: number;

  // Google Cloud Armor stops applying the action in the automatically deployed rule to an identified attacker after this duration. The rule continues to operate against new requests.
  ExpirationSec?: number;

  // Rules are only automatically deployed when the estimated impact to baseline traffic from the suggested mitigation is below this threshold.
  ImpactedBaselineThreshold?: number;

  // Identifies new attackers only when the load to the backend service that is under attack exceeds this threshold.
  LoadThreshold?: number;
}

export function Compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ConfidenceThreshold",
      "Rules are only automatically deployed for alerts on potential attacks with confidence scores greater than this threshold.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ExpirationSec",
      "Google Cloud Armor stops applying the action in the automatically deployed rule to an identified attacker after this duration. The rule continues to operate against new requests.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ImpactedBaselineThreshold",
      "Rules are only automatically deployed when the estimated impact to baseline traffic from the suggested mitigation is below this threshold.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "LoadThreshold",
      "Identifies new attackers only when the load to the backend service that is under attack exceeds this threshold.",
      [],
      false,
      false,
    ),
  ];
}
