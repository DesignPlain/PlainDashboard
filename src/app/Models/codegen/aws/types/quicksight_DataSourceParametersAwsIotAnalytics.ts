import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSourceParametersAwsIotAnalytics {
  // The name of the data set to which to connect.
  dataSetName?: string;
}

export function quicksight_DataSourceParametersAwsIotAnalytics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dataSetName',
      'The name of the data set to which to connect.',
      () => [],
      true,
      false,
    ),
  ];
}
