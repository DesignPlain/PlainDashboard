import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iot_TopicRuleErrorActionS3 {
  // The Amazon S3 bucket name.
  bucketName?: string;

  // The Amazon S3 canned ACL that controls access to the object identified by the object key. [Valid values](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).
  cannedAcl?: string;

  // The object key.
  key?: string;

  // The ARN of the IAM role that grants access.
  roleArn?: string;
}

export function iot_TopicRuleErrorActionS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "The Amazon S3 bucket name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cannedAcl",
      "The Amazon S3 canned ACL that controls access to the object identified by the object key. [Valid values](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The object key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access.",
      () => [],
      true,
      false,
    ),
  ];
}
