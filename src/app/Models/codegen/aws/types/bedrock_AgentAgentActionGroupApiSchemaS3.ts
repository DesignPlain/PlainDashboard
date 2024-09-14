import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_AgentAgentActionGroupApiSchemaS3 {
  // Name of the S3 bucket.
  s3BucketName?: string;

  // S3 object key containing the resource.
  s3ObjectKey?: string;
}

export function bedrock_AgentAgentActionGroupApiSchemaS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "Name of the S3 bucket.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3ObjectKey",
      "S3 object key containing the resource.",
      () => [],
      false,
      false,
    ),
  ];
}
