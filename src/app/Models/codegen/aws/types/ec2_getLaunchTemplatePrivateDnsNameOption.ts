import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getLaunchTemplatePrivateDnsNameOption {
  //
  enableResourceNameDnsARecord?: boolean;

  //
  enableResourceNameDnsAaaaRecord?: boolean;

  //
  hostnameType?: string;
}

export function ec2_getLaunchTemplatePrivateDnsNameOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableResourceNameDnsAaaaRecord',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'hostnameType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableResourceNameDnsARecord',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
