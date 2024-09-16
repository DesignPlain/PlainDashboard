import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface evidently_ProjectDataDeliveryCloudwatchLogs {
  // The name of the log group where the project stores evaluation events.
  logGroup?: string;
}

export function evidently_ProjectDataDeliveryCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'logGroup',
      'The name of the log group where the project stores evaluation events.',
      () => [],
      false,
      false,
    ),
  ];
}
