import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_AccessPointVpcConfiguration,
  s3_AccessPointVpcConfiguration_GetTypes,
} from "../types/s3_AccessPointVpcConfiguration";
import {
  s3_AccessPointPublicAccessBlockConfiguration,
  s3_AccessPointPublicAccessBlockConfiguration_GetTypes,
} from "../types/s3_AccessPointPublicAccessBlockConfiguration";

export interface AccessPointArgs {
  // Configuration block to restrict access to this access point to requests from the specified Virtual Private Cloud (VPC). Required for S3 on Outposts. Detailed below.
  vpcConfiguration?: s3_AccessPointVpcConfiguration;

  // AWS account ID for the owner of the bucket for which you want to create an access point. Defaults to automatically determined account ID of the AWS provider.
  accountId?: string;

  // Name of an AWS Partition S3 General Purpose Bucket or the ARN of S3 on Outposts Bucket that you want to associate this access point with.
  bucket?: string;

  // AWS account ID associated with the S3 bucket associated with this access point.
  bucketAccountId?: string;

  /*
Name you want to assign to this access point.

The following arguments are optional:
*/
  name?: string;

  // Valid JSON document that specifies the policy that you want to apply to this access point. Removing `policy` from your configuration or setting `policy` to null or an empty string (i.e., `policy = ""`) _will not_ delete the policy since it could have been set by `aws.s3control.AccessPointPolicy`. To remove the `policy`, set it to `"{}"` (an empty JSON document).
  policy?: string;

  // Configuration block to manage the `PublicAccessBlock` configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. Detailed below.
  publicAccessBlockConfiguration?: s3_AccessPointPublicAccessBlockConfiguration;
}
export class AccessPoint extends Resource {
  // Alias of the S3 Access Point.
  public alias?: string;

  // AWS account ID associated with the S3 bucket associated with this access point.
  public bucketAccountId?: string;

  /*
DNS domain name of the S3 Access Point in the format _`name`_-_`account_id`_.s3-accesspoint._region_.amazonaws.com.
Note: S3 access points only support secure access by HTTPS. HTTP isn't supported.
*/
  public domainName?: string;

  // VPC endpoints for the S3 Access Point.
  public endpoints?: Map<string, string>;

  // Indicates whether this access point allows access from the public Internet. Values are `VPC` (the access point doesn't allow access from the public Internet) and `Internet` (the access point allows access from the public Internet, subject to the access point and bucket access policies).
  public networkOrigin?: string;

  // Valid JSON document that specifies the policy that you want to apply to this access point. Removing `policy` from your configuration or setting `policy` to null or an empty string (i.e., `policy = ""`) _will not_ delete the policy since it could have been set by `aws.s3control.AccessPointPolicy`. To remove the `policy`, set it to `"{}"` (an empty JSON document).
  public policy?: string;

  // Configuration block to restrict access to this access point to requests from the specified Virtual Private Cloud (VPC). Required for S3 on Outposts. Detailed below.
  public vpcConfiguration?: s3_AccessPointVpcConfiguration;

  // AWS account ID for the owner of the bucket for which you want to create an access point. Defaults to automatically determined account ID of the AWS provider.
  public accountId?: string;

  // ARN of the S3 Access Point.
  public arn?: string;

  // Name of an AWS Partition S3 General Purpose Bucket or the ARN of S3 on Outposts Bucket that you want to associate this access point with.
  public bucket?: string;

  // Indicates whether this access point currently has a policy that allows public access.
  public hasPublicAccessPolicy?: boolean;

  /*
Name you want to assign to this access point.

The following arguments are optional:
*/
  public name?: string;

  // Configuration block to manage the `PublicAccessBlock` configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. Detailed below.
  public publicAccessBlockConfiguration?: s3_AccessPointPublicAccessBlockConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of an AWS Partition S3 General Purpose Bucket or the ARN of S3 on Outposts Bucket that you want to associate this access point with.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketAccountId",
        "AWS account ID associated with the S3 bucket associated with this access point.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name you want to assign to this access point.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        'Valid JSON document that specifies the policy that you want to apply to this access point. Removing `policy` from your configuration or setting `policy` to null or an empty string (i.e., `policy = ""`) _will not_ delete the policy since it could have been set by `aws.s3control.AccessPointPolicy`. To remove the `policy`, set it to `"{}"` (an empty JSON document).',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "publicAccessBlockConfiguration",
        "Configuration block to manage the `PublicAccessBlock` configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. Detailed below.",
        s3_AccessPointPublicAccessBlockConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfiguration",
        "Configuration block to restrict access to this access point to requests from the specified Virtual Private Cloud (VPC). Required for S3 on Outposts. Detailed below.",
        s3_AccessPointVpcConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "AWS account ID for the owner of the bucket for which you want to create an access point. Defaults to automatically determined account ID of the AWS provider.",
        [],
        false,
        true,
      ),
    ];
  }
}
