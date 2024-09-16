import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dms_getEndpointElasticsearchSetting {
  //
  endpointUri?: string;

  //
  errorRetryDuration?: number;

  //
  fullLoadErrorPercentage?: number;

  //
  serviceAccessRoleArn?: string;
}

export function dms_getEndpointElasticsearchSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'errorRetryDuration',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'fullLoadErrorPercentage',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccessRoleArn',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'endpointUri',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
