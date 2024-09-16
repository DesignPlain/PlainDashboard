import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apprunner_VpcIngressConnectionIngressVpcConfiguration {
  // The ID of the VPC endpoint that your App Runner service connects to.
  vpcEndpointId?: string;

  // The ID of the VPC that is used for the VPC endpoint.
  vpcId?: string;
}

export function apprunner_VpcIngressConnectionIngressVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'vpcEndpointId',
      'The ID of the VPC endpoint that your App Runner service connects to.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'The ID of the VPC that is used for the VPC endpoint.',
      () => [],
      false,
      false,
    ),
  ];
}
