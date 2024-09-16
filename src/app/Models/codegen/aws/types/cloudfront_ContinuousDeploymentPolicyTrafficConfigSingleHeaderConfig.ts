import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig {
  // Request header name to send to the staging distribution. The header must contain the prefix `aws-cf-cd-`.
  header?: string;

  // Request header value.
  value?: string;
}

export function cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'header',
      'Request header name to send to the staging distribution. The header must contain the prefix `aws-cf-cd-`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Request header value.',
      () => [],
      true,
      false,
    ),
  ];
}
