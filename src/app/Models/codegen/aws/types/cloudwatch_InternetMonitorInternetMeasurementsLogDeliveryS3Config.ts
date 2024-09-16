import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config {
  //
  bucketName?: string;

  //
  bucketPrefix?: string;

  //
  logDeliveryStatus?: string;
}

export function cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucketPrefix',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logDeliveryStatus',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
