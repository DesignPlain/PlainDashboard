import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DashboardDashboardPublishOptionsSheetControlsOption {
  // Visibility state. Possibles values: EXPANDED, COLLAPSED.
  visibilityState?: string;
}

export function quicksight_DashboardDashboardPublishOptionsSheetControlsOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "visibilityState",
      "Visibility state. Possibles values: EXPANDED, COLLAPSED.",
      [],
      false,
      false,
    ),
  ];
}
