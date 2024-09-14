import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_AwsClusterControlPlaneSshConfig {
  // The name of the EC2 key pair used to login into cluster machines.
  ec2KeyPair?: string;
}

export function container_AwsClusterControlPlaneSshConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ec2KeyPair",
      "The name of the EC2 key pair used to login into cluster machines.",
      () => [],
      true,
      false,
    ),
  ];
}
