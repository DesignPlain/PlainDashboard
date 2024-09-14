import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_AgentDataSourceServerSideEncryptionConfiguration {
  // ARN of the AWS KMS key used to encrypt the resource.
  kmsKeyArn?: string;
}

export function bedrock_AgentDataSourceServerSideEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "ARN of the AWS KMS key used to encrypt the resource.",
      () => [],
      false,
      false,
    ),
  ];
}
