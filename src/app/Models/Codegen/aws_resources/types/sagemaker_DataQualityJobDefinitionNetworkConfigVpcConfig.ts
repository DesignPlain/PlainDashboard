import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig {
  // The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the `subnets` field.
  securityGroupIds?: Array<string>;

  // The ID of the subnets in the VPC to which you want to connect your training job or model.
  subnets?: Array<string>;
}

export function sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the `subnets` field.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "The ID of the subnets in the VPC to which you want to connect your training job or model.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
