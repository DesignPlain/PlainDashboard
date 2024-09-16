import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedaccess_EndpointLoadBalancerOptions {
  //
  loadBalancerArn?: string;

  //
  port?: number;

  //
  protocol?: string;

  //
  subnetIds?: Array<string>;
}

export function verifiedaccess_EndpointLoadBalancerOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'loadBalancerArn',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.Number, 'port', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'protocol',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
