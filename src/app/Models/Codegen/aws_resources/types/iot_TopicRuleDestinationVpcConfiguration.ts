import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_TopicRuleDestinationVpcConfiguration {
  // The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).
  roleArn?: string;

  // The security groups of the VPC destination.
  securityGroups?: Array<string>;

  // The subnet IDs of the VPC destination.
  subnetIds?: Array<string>;

  // The ID of the VPC.
  vpcId?: string;
}

export function iot_TopicRuleDestinationVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "The security groups of the VPC destination.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "The subnet IDs of the VPC destination.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The ID of the VPC.",
      [],
      true,
      true,
    ),
  ];
}
