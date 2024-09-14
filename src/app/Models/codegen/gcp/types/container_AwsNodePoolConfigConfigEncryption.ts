import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_AwsNodePoolConfigConfigEncryption {
  // The ARN of the AWS KMS key used to encrypt node pool configuration.
  kmsKeyArn?: string;
}

export function container_AwsNodePoolConfigConfigEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "The ARN of the AWS KMS key used to encrypt node pool configuration.",
      () => [],
      true,
      false,
    ),
  ];
}
