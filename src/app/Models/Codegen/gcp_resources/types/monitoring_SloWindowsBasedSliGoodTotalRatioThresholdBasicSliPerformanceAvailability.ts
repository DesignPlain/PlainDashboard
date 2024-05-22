import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
  // Whether an availability SLI is enabled or not. Must be set to `true. Defaults to `true`.
  enabled?: boolean;
}

export function monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether an availability SLI is enabled or not. Must be set to `true. Defaults to `true`.",
      [],
      false,
      false,
    ),
  ];
}
