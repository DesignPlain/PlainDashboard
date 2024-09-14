import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_AgentDataSourceDataSourceConfigurationS3Configuration {
  // List of S3 prefixes that define the object containing the data sources. For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html).
  inclusionPrefixes?: Array<string>;

  // ARN of the bucket that contains the data source.
  bucketArn?: string;

  // Bucket account owner ID for the S3 bucket.
  bucketOwnerAccountId?: string;
}

export function bedrock_AgentDataSourceDataSourceConfigurationS3Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "inclusionPrefixes",
      "List of S3 prefixes that define the object containing the data sources. For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html).",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "ARN of the bucket that contains the data source.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketOwnerAccountId",
      "Bucket account owner ID for the S3 bucket.",
      () => [],
      false,
      false,
    ),
  ];
}
