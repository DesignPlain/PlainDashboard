import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource {
  // Domain name that is targeted.
  domainName?: string;

  // Resource record set ID that is targeted.
  recordSetId?: string;
}

export function route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'domainName',
      'Domain name that is targeted.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'recordSetId',
      'Resource record set ID that is targeted.',
      () => [],
      false,
      false,
    ),
  ];
}
