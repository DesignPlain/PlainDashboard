import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig {
  // The ID of the subnets in the VPC to which you want to connect your training job or model.
  subnets?: Array<string>;

  // The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the `subnets` field.
  securityGroupIds?: Array<string>;
}

export function sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subnets',
      'The ID of the subnets in the VPC to which you want to connect your training job or model.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the `subnets` field.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
