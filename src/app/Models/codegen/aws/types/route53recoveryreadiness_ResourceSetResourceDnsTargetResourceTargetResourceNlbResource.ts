import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource {
  // NLB resource ARN.
  arn?: string;
}

export function route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'NLB resource ARN.',
      () => [],
      false,
      false,
    ),
  ];
}
