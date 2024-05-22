import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  athena_DatabaseEncryptionConfiguration,
  athena_DatabaseEncryptionConfiguration_GetTypes,
} from "../types/athena_DatabaseEncryptionConfiguration";
import {
  athena_DatabaseAclConfiguration,
  athena_DatabaseAclConfiguration_GetTypes,
} from "../types/athena_DatabaseAclConfiguration";

export interface DatabaseArgs {
  // Name of S3 bucket to save the results of the query execution.
  bucket?: string;

  // Description of the database.
  comment?: string;

  // Encryption key block AWS Athena uses to decrypt the data in S3, such as an AWS Key Management Service (AWS KMS) key. See Encryption Configuration below.
  encryptionConfiguration?: athena_DatabaseEncryptionConfiguration;

  // AWS account ID that you expect to be the owner of the Amazon S3 bucket.
  expectedBucketOwner?: string;

  // Boolean that indicates all tables should be deleted from the database so that the database can be destroyed without error. The tables are -not- recoverable.
  forceDestroy?: boolean;

  // Name of the database to create.
  name?: string;

  // Key-value map of custom metadata properties for the database definition.
  properties?: Map<string, string>;

  // That an Amazon S3 canned ACL should be set to control ownership of stored query results. See ACL Configuration below.
  aclConfiguration?: athena_DatabaseAclConfiguration;
}
export class Database extends Resource {
  // Name of the database to create.
  public name?: string;

  // Key-value map of custom metadata properties for the database definition.
  public properties?: Map<string, string>;

  // That an Amazon S3 canned ACL should be set to control ownership of stored query results. See ACL Configuration below.
  public aclConfiguration?: athena_DatabaseAclConfiguration;

  // Name of S3 bucket to save the results of the query execution.
  public bucket?: string;

  // Description of the database.
  public comment?: string;

  // Encryption key block AWS Athena uses to decrypt the data in S3, such as an AWS Key Management Service (AWS KMS) key. See Encryption Configuration below.
  public encryptionConfiguration?: athena_DatabaseEncryptionConfiguration;

  // AWS account ID that you expect to be the owner of the Amazon S3 bucket.
  public expectedBucketOwner?: string;

  // Boolean that indicates all tables should be deleted from the database so that the database can be destroyed without error. The tables are -not- recoverable.
  public forceDestroy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "comment",
        "Description of the database.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfiguration",
        "Encryption key block AWS Athena uses to decrypt the data in S3, such as an AWS Key Management Service (AWS KMS) key. See Encryption Configuration below.",
        athena_DatabaseEncryptionConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "AWS account ID that you expect to be the owner of the Amazon S3 bucket.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Boolean that indicates all tables should be deleted from the database so that the database can be destroyed without error. The tables are *not* recoverable.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the database to create.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "properties",
        "Key-value map of custom metadata properties for the database definition.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "aclConfiguration",
        "That an Amazon S3 canned ACL should be set to control ownership of stored query results. See ACL Configuration below.",
        athena_DatabaseAclConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of S3 bucket to save the results of the query execution.",
        [],
        false,
        false,
      ),
    ];
  }
}
