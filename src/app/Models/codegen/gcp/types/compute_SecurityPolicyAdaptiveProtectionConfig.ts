import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig,
  compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig_GetTypes,
} from './compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig';
import {
  compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig,
  compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig_GetTypes,
} from './compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig';

export interface compute_SecurityPolicyAdaptiveProtectionConfig {
  /*
Configuration for [Automatically deploy Adaptive Protection suggested rules](https://cloud.google.com/armor/docs/adaptive-protection-auto-deploy?hl=en). Structure is documented below.

<a name="nested_layer_7_ddos_defense_config"></a>The `layer_7_ddos_defense_config` block supports:
*/
  autoDeployConfig?: compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;

  // Configuration for [Google Cloud Armor Adaptive Protection Layer 7 DDoS Defense](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.
  layer7DdosDefenseConfig?: compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}

export function compute_SecurityPolicyAdaptiveProtectionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'autoDeployConfig',
      'Configuration for [Automatically deploy Adaptive Protection suggested rules](https://cloud.google.com/armor/docs/adaptive-protection-auto-deploy?hl=en). Structure is documented below.\n\n<a name="nested_layer_7_ddos_defense_config"></a>The `layer_7_ddos_defense_config` block supports:',
      () =>
        compute_SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'layer7DdosDefenseConfig',
      'Configuration for [Google Cloud Armor Adaptive Protection Layer 7 DDoS Defense](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.',
      () =>
        compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
