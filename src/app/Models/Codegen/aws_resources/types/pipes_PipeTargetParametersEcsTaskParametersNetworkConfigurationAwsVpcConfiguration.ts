import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration {
  // List of the subnets associated with the stream. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
  subnets?: Array<string>;

  // Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE. Valid Values: ENABLED, DISABLED.
  assignPublicIp?: string;

  // List of security groups associated with the stream. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
  securityGroups?: Array<string>;
}

export function pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "assignPublicIp",
      "Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE. Valid Values: ENABLED, DISABLED.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "List of security groups associated with the stream. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "List of the subnets associated with the stream. These subnets must all be in the same VPC. You can specify as many as 16 subnets.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
