import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsClusterControlPlaneSshConfig {
  // The name of the EC2 key pair used to login into cluster machines.
  Ec2KeyPair?: string;
}

export function Container_AwsClusterControlPlaneSshConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Ec2KeyPair",
      "The name of the EC2 key pair used to login into cluster machines.",
      [],
      true,
      false,
    ),
  ];
}
