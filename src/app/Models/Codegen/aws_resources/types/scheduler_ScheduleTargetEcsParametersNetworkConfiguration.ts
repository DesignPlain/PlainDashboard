import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface scheduler_ScheduleTargetEcsParametersNetworkConfiguration {
  // Set of 1 to 16 subnets to be associated with the task. These subnets must all be in the same VPC.
  subnets?: Array<string>;

  // Specifies whether the task's elastic network interface receives a public IP address. This attribute is a boolean type, where `true` maps to `ENABLED` and `false` to `DISABLED`. You can specify `true` only when the `launch_type` is set to `FARGATE`.
  assignPublicIp?: boolean;

  // Set of 1 to 5 Security Group ID-s to be associated with the task. These security groups must all be in the same VPC.
  securityGroups?: Array<string>;
}

export function scheduler_ScheduleTargetEcsParametersNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "Set of 1 to 16 subnets to be associated with the task. These subnets must all be in the same VPC.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "assignPublicIp",
      "Specifies whether the task's elastic network interface receives a public IP address. This attribute is a boolean type, where `true` maps to `ENABLED` and `false` to `DISABLED`. You can specify `true` only when the `launch_type` is set to `FARGATE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "Set of 1 to 5 Security Group ID-s to be associated with the task. These security groups must all be in the same VPC.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
