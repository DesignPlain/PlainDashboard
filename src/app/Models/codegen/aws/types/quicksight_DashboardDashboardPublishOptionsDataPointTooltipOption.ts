import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption {
  // Availability status. Possibles values: ENABLED, DISABLED.
  availabilityStatus?: string;
}

export function quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "availabilityStatus",
      "Availability status. Possibles values: ENABLED, DISABLED.",
      () => [],
      false,
      false,
    ),
  ];
}
