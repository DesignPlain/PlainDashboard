import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DataSetRefreshPropertiesRefreshConfiguration,
  quicksight_DataSetRefreshPropertiesRefreshConfiguration_GetTypes,
} from "./quicksight_DataSetRefreshPropertiesRefreshConfiguration";

export interface quicksight_DataSetRefreshProperties {
  // The refresh configuration for the data set. See refresh_configuration.
  refreshConfiguration?: quicksight_DataSetRefreshPropertiesRefreshConfiguration;
}

export function quicksight_DataSetRefreshProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "refreshConfiguration",
      "The refresh configuration for the data set. See refresh_configuration.",
      () => quicksight_DataSetRefreshPropertiesRefreshConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
