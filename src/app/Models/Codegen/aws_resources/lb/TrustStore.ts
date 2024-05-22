import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TrustStoreArgs {
  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // S3 Bucket name holding the client certificate CA bundle.
  caCertificatesBundleS3Bucket?: string;

  // S3 object key holding the client certificate CA bundle.
  caCertificatesBundleS3Key?: string;

  // Version Id of CA bundle S3 bucket object, if versioned, defaults to latest if omitted.
  caCertificatesBundleS3ObjectVersion?: string;

  // Name of the Trust Store. If omitted, the provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.
  namePrefix?: string;
}
export class TrustStore extends Resource {
  // ARN of the Trust Store (matches `id`).
  public arn?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.
  public namePrefix?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN suffix for use with CloudWatch Metrics.
  public arnSuffix?: string;

  // S3 Bucket name holding the client certificate CA bundle.
  public caCertificatesBundleS3Bucket?: string;

  // S3 object key holding the client certificate CA bundle.
  public caCertificatesBundleS3Key?: string;

  // Version Id of CA bundle S3 bucket object, if versioned, defaults to latest if omitted.
  public caCertificatesBundleS3ObjectVersion?: string;

  // Name of the Trust Store. If omitted, the provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "caCertificatesBundleS3Key",
        "S3 object key holding the client certificate CA bundle.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "caCertificatesBundleS3ObjectVersion",
        "Version Id of CA bundle S3 bucket object, if versioned, defaults to latest if omitted.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Trust Store. If omitted, the provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "caCertificatesBundleS3Bucket",
        "S3 Bucket name holding the client certificate CA bundle.",
        [],
        true,
        false,
      ),
    ];
  }
}
