import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration,
  pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration";

export interface pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration {
  // Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode. Detailed below.
  awsVpcConfiguration?: pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration;
}

export function pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "awsVpcConfiguration",
      "Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
