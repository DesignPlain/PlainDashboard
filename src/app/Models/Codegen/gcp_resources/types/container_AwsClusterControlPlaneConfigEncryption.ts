import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AwsClusterControlPlaneConfigEncryption {
  // The ARN of the AWS KMS key used to encrypt cluster configuration.
  kmsKeyArn?: string;
}

export function container_AwsClusterControlPlaneConfigEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "The ARN of the AWS KMS key used to encrypt cluster configuration.",
      [],
      true,
      false,
    ),
  ];
}
