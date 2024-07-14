import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketReplicationConfigurationRule,
  s3_BucketReplicationConfigurationRule_GetTypes,
} from "./s3_BucketReplicationConfigurationRule";

export interface s3_BucketReplicationConfiguration {
  // The ARN of the IAM role for Amazon S3 to assume when replicating the objects.
  role?: string;

  // Specifies the rules managing the replication (documented below).
  rules?: Array<s3_BucketReplicationConfigurationRule>;
}

export function s3_BucketReplicationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "role",
      "The ARN of the IAM role for Amazon S3 to assume when replicating the objects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "Specifies the rules managing the replication (documented below).",
      s3_BucketReplicationConfigurationRule_GetTypes(),
      true,
      false,
    ),
  ];
}
