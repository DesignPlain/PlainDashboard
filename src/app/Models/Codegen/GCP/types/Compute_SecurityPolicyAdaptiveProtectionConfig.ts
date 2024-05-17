import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig,
  Compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig_GetTypes,
} from "./Compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig";
import {
  Compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig,
  Compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig_GetTypes,
} from "./Compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig";

export interface Compute_SecurityPolicyAdaptiveProtectionConfig {
  /*
Configuration for [Automatically deploy Adaptive Protection suggested rules](https://cloud.google.com/armor/docs/adaptive-protection-auto-deploy?hl=en). Structure is documented below.

<a name="nested_layer_7_ddos_defense_config"></a>The `layer_7_ddos_defense_config` block supports:
*/
  AutoDeployConfig?: Compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;

  // Configuration for [Google Cloud Armor Adaptive Protection Layer 7 DDoS Defense](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.
  Layer7DdosDefenseConfig?: Compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}

export function Compute_SecurityPolicyAdaptiveProtectionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AutoDeployConfig",
      'Configuration for [Automatically deploy Adaptive Protection suggested rules](https://cloud.google.com/armor/docs/adaptive-protection-auto-deploy?hl=en). Structure is documented below.\n\n<a name="nested_layer_7_ddos_defense_config"></a>The `layer_7_ddos_defense_config` block supports:',
      Compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Layer7DdosDefenseConfig",
      "Configuration for [Google Cloud Armor Adaptive Protection Layer 7 DDoS Defense](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.",
      Compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
