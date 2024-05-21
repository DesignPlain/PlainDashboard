import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig {
  // Specify a threshold value that can trigger the alert. For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.
  value?: number;
}

export function vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "value",
      "Specify a threshold value that can trigger the alert. For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.",
      [],
      true,
      false,
    ),
  ];
}
