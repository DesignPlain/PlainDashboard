import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
  // The name of the CloudWatch log group that is the destination for log delivery.
  logGroup?: string;

  // Whether log delivery to Amazon CloudWatch Logs is enabled.
  enabled?: boolean;
}

export function mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'logGroup',
      'The name of the CloudWatch log group that is the destination for log delivery.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether log delivery to Amazon CloudWatch Logs is enabled.',
      () => [],
      true,
      true,
    ),
  ];
}
