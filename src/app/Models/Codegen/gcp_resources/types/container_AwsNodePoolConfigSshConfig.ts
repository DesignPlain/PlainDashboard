import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AwsNodePoolConfigSshConfig {
  // The name of the EC2 key pair used to login into cluster machines.
  ec2KeyPair?: string;
}

export function container_AwsNodePoolConfigSshConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ec2KeyPair",
      "The name of the EC2 key pair used to login into cluster machines.",
      [],
      true,
      false,
    ),
  ];
}
