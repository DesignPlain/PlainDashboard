import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      false,
      false,
    ),
  ];
}
