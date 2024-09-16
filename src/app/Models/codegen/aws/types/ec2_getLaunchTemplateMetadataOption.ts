import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getLaunchTemplateMetadataOption {
  //
  httpProtocolIpv6?: string;

  //
  httpPutResponseHopLimit?: number;

  //
  httpTokens?: string;

  //
  instanceMetadataTags?: string;

  //
  httpEndpoint?: string;
}

export function ec2_getLaunchTemplateMetadataOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'instanceMetadataTags',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'httpEndpoint',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'httpProtocolIpv6',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'httpPutResponseHopLimit',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'httpTokens',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
