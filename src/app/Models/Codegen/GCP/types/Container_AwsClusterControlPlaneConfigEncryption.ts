import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsClusterControlPlaneConfigEncryption {
  // The ARN of the AWS KMS key used to encrypt cluster configuration.
  KmsKeyArn?: string;
}

export function Container_AwsClusterControlPlaneConfigEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyArn",
      "The ARN of the AWS KMS key used to encrypt cluster configuration.",
      [],
      true,
      false,
    ),
  ];
}
