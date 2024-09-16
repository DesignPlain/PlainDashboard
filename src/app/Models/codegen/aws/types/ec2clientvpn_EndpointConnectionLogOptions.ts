import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2clientvpn_EndpointConnectionLogOptions {
  // The name of the CloudWatch Logs log group.
  cloudwatchLogGroup?: string;

  // The name of the CloudWatch Logs log stream to which the connection data is published.
  cloudwatchLogStream?: string;

  // Indicates whether connection logging is enabled.
  enabled?: boolean;
}

export function ec2clientvpn_EndpointConnectionLogOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Indicates whether connection logging is enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cloudwatchLogGroup',
      'The name of the CloudWatch Logs log group.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cloudwatchLogStream',
      'The name of the CloudWatch Logs log stream to which the connection data is published.',
      () => [],
      false,
      false,
    ),
  ];
}
