import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow,
  quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow_GetTypes,
} from "./quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow";

export interface quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh {
  // The lookback window setup for an incremental refresh configuration. See lookback_window.
  lookbackWindow?: quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow;
}

export function quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "lookbackWindow",
      "The lookback window setup for an incremental refresh configuration. See lookback_window.",
      quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
