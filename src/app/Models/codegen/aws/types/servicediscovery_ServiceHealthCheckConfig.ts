import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface servicediscovery_ServiceHealthCheckConfig {
  // The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP
  type?: string;

  // The number of consecutive health checks. Maximum value of 10.
  failureThreshold?: number;

  // The path that you want Route 53 to request when performing health checks. Route 53 automatically adds the DNS name for the service. If you don't specify a value, the default value is /.
  resourcePath?: string;
}

export function servicediscovery_ServiceHealthCheckConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'failureThreshold',
      'The number of consecutive health checks. Maximum value of 10.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourcePath',
      "The path that you want Route 53 to request when performing health checks. Route 53 automatically adds the DNS name for the service. If you don't specify a value, the default value is /.",
      () => [],
      false,
      false,
    ),
  ];
}
