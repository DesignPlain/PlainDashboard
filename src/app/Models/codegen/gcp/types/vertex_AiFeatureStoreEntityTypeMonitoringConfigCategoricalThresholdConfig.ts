import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig {
  // Specify a threshold value that can trigger the alert. For categorical feature, the distribution distance is calculated by L-inifinity norm. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.
  value?: number;
}

export function vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'value',
      'Specify a threshold value that can trigger the alert. For categorical feature, the distribution distance is calculated by L-inifinity norm. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.',
      () => [],
      true,
      false,
    ),
  ];
}
