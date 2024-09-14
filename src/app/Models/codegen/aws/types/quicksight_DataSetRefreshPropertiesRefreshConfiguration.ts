import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh,
  quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh_GetTypes,
} from "./quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh";

export interface quicksight_DataSetRefreshPropertiesRefreshConfiguration {
  // The incremental refresh for the data set. See incremental_refresh.
  incrementalRefresh?: quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh;
}

export function quicksight_DataSetRefreshPropertiesRefreshConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "incrementalRefresh",
      "The incremental refresh for the data set. See incremental_refresh.",
      () =>
        quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh_GetTypes(),
      true,
      false,
    ),
  ];
}
