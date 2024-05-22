import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSourceParametersAwsIotAnalytics {
  // The name of the data set to which to connect.
  dataSetName?: string;
}

export function quicksight_DataSourceParametersAwsIotAnalytics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataSetName",
      "The name of the data set to which to connect.",
      [],
      true,
      false,
    ),
  ];
}
