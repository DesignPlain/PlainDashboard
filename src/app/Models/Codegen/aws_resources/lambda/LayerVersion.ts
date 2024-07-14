import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LayerVersionArgs {
  // List of [Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-CompatibleRuntimes) this layer is compatible with. Up to 15 runtimes can be specified.
  compatibleRuntimes?: Array<string>;

  // License info for your Lambda Layer. See [License Info](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-LicenseInfo).
  licenseInfo?: string;

  // S3 key of an object containing the function's deployment package. Conflicts with `filename`.
  s3Key?: string;

  // Object version containing the function's deployment package. Conflicts with `filename`.
  s3ObjectVersion?: string;

  // Whether to retain the old version of a previously deployed Lambda Layer. Default is `false`. When this is not set to `true`, changing any of `compatible_architectures`, `compatible_runtimes`, `description`, `filename`, `layer_name`, `license_info`, `s3_bucket`, `s3_key`, `s3_object_version`, or `source_code_hash` forces deletion of the existing layer version and creation of a new layer version.
  skipDestroy?: boolean;

  // Path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
  code?: string;

  // List of [Architectures](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-CompatibleArchitectures) this layer is compatible with. Currently `x86_64` and `arm64` can be specified.
  compatibleArchitectures?: Array<string>;

  // Description of what your Lambda Layer does.
  description?: string;

  /*
Unique name for your Lambda Layer

The following arguments are optional:
*/
  layerName?: string;

  // S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
  s3Bucket?: string;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.
  sourceCodeHash?: string;
}
export class LayerVersion extends Resource {
  // ARN of the Lambda Layer with version.
  public arn?: string;

  // S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
  public s3Bucket?: string;

  // Object version containing the function's deployment package. Conflicts with `filename`.
  public s3ObjectVersion?: string;

  // Lambda Layer version.
  public version?: string;

  /*
Unique name for your Lambda Layer

The following arguments are optional:
*/
  public layerName?: string;

  // S3 key of an object containing the function's deployment package. Conflicts with `filename`.
  public s3Key?: string;

  // ARN of a signing job.
  public signingJobArn?: string;

  // ARN for a signing profile version.
  public signingProfileVersionArn?: string;

  // Path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
  public code?: string;

  // List of [Architectures](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-CompatibleArchitectures) this layer is compatible with. Currently `x86_64` and `arm64` can be specified.
  public compatibleArchitectures?: Array<string>;

  // List of [Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-CompatibleRuntimes) this layer is compatible with. Up to 15 runtimes can be specified.
  public compatibleRuntimes?: Array<string>;

  // Date this resource was created.
  public createdDate?: string;

  // Description of what your Lambda Layer does.
  public description?: string;

  // Size in bytes of the function .zip file.
  public sourceCodeSize?: number;

  // ARN of the Lambda Layer without version.
  public layerArn?: string;

  // License info for your Lambda Layer. See [License Info](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-LicenseInfo).
  public licenseInfo?: string;

  // Whether to retain the old version of a previously deployed Lambda Layer. Default is `false`. When this is not set to `true`, changing any of `compatible_architectures`, `compatible_runtimes`, `description`, `filename`, `layer_name`, `license_info`, `s3_bucket`, `s3_key`, `s3_object_version`, or `source_code_hash` forces deletion of the existing layer version and creation of a new layer version.
  public skipDestroy?: boolean;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.
  public sourceCodeHash?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "licenseInfo",
        "License info for your Lambda Layer. See [License Info](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-LicenseInfo).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3Key",
        "S3 key of an object containing the function's deployment package. Conflicts with `filename`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "Whether to retain the old version of a previously deployed Lambda Layer. Default is `false`. When this is not set to `true`, changing any of `compatible_architectures`, `compatible_runtimes`, `description`, `filename`, `layer_name`, `license_info`, `s3_bucket`, `s3_key`, `s3_object_version`, or `source_code_hash` forces deletion of the existing layer version and creation of a new layer version.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "compatibleArchitectures",
        "List of [Architectures](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-CompatibleArchitectures) this layer is compatible with. Currently `x86_64` and `arm64` can be specified.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of what your Lambda Layer does.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "layerName",
        "Unique name for your Lambda Layer\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "compatibleRuntimes",
        "List of [Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#SSS-PublishLayerVersion-request-CompatibleRuntimes) this layer is compatible with. Up to 15 runtimes can be specified.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3ObjectVersion",
        "Object version containing the function's deployment package. Conflicts with `filename`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "code",
        "Path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3Bucket",
        "S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceCodeHash",
        "Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.",
        [],
        false,
        true,
      ),
    ];
  }
}
