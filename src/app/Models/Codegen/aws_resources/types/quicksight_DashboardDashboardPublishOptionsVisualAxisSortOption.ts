import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption {
  // Availability status. Possibles values: ENABLED, DISABLED.
  availabilityStatus?: string;
}

export function quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "availabilityStatus",
      "Availability status. Possibles values: ENABLED, DISABLED.",
      [],
      false,
      false,
    ),
  ];
}
