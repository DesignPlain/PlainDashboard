import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsNodePoolConfigSpotConfig {
  // List of AWS EC2 instance types for creating a spot node pool's nodes. The specified instance types must have the same number of CPUs and memory. You can use the Amazon EC2 Instance Selector tool (https://github.com/aws/amazon-ec2-instance-selector) to choose instance types with matching CPU and memory
  InstanceTypes?: Array<string>;
}

export function Container_AwsNodePoolConfigSpotConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InstanceTypes",
      "List of AWS EC2 instance types for creating a spot node pool's nodes. The specified instance types must have the same number of CPUs and memory. You can use the Amazon EC2 Instance Selector tool (https://github.com/aws/amazon-ec2-instance-selector) to choose instance types with matching CPU and memory",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
