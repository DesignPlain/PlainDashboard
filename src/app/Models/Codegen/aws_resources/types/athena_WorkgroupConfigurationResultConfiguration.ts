import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  athena_WorkgroupConfigurationResultConfigurationAclConfiguration,
  athena_WorkgroupConfigurationResultConfigurationAclConfiguration_GetTypes,
} from "./athena_WorkgroupConfigurationResultConfigurationAclConfiguration";
import {
  athena_WorkgroupConfigurationResultConfigurationEncryptionConfiguration,
  athena_WorkgroupConfigurationResultConfigurationEncryptionConfiguration_GetTypes,
} from "./athena_WorkgroupConfigurationResultConfigurationEncryptionConfiguration";

export interface athena_WorkgroupConfigurationResultConfiguration {
  // Location in Amazon S3 where your query results are stored, such as `s3://path/to/query/bucket/`. For more information, see [Queries and Query Result Files](https://docs.aws.amazon.com/athena/latest/ug/querying.html).
  outputLocation?: string;

  // That an Amazon S3 canned ACL should be set to control ownership of stored query results. See ACL Configuration below.
  aclConfiguration?: athena_WorkgroupConfigurationResultConfigurationAclConfiguration;

  // Configuration block with encryption settings. See Encryption Configuration below.
  encryptionConfiguration?: athena_WorkgroupConfigurationResultConfigurationEncryptionConfiguration;

  // AWS account ID that you expect to be the owner of the Amazon S3 bucket.
  expectedBucketOwner?: string;
}

export function athena_WorkgroupConfigurationResultConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "outputLocation",
      "Location in Amazon S3 where your query results are stored, such as `s3://path/to/query/bucket/`. For more information, see [Queries and Query Result Files](https://docs.aws.amazon.com/athena/latest/ug/querying.html).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "aclConfiguration",
      "That an Amazon S3 canned ACL should be set to control ownership of stored query results. See ACL Configuration below.",
      athena_WorkgroupConfigurationResultConfigurationAclConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryptionConfiguration",
      "Configuration block with encryption settings. See Encryption Configuration below.",
      athena_WorkgroupConfigurationResultConfigurationEncryptionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expectedBucketOwner",
      "AWS account ID that you expect to be the owner of the Amazon S3 bucket.",
      [],
      false,
      false,
    ),
  ];
}
