import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lambda_FunctionImageConfig,
  lambda_FunctionImageConfig_GetTypes,
} from "../types/lambda_FunctionImageConfig";
import {
  lambda_FunctionDeadLetterConfig,
  lambda_FunctionDeadLetterConfig_GetTypes,
} from "../types/lambda_FunctionDeadLetterConfig";
import {
  lambda_FunctionLoggingConfig,
  lambda_FunctionLoggingConfig_GetTypes,
} from "../types/lambda_FunctionLoggingConfig";
import {
  lambda_FunctionEnvironment,
  lambda_FunctionEnvironment_GetTypes,
} from "../types/lambda_FunctionEnvironment";
import {
  lambda_FunctionTracingConfig,
  lambda_FunctionTracingConfig_GetTypes,
} from "../types/lambda_FunctionTracingConfig";
import {
  lambda_FunctionEphemeralStorage,
  lambda_FunctionEphemeralStorage_GetTypes,
} from "../types/lambda_FunctionEphemeralStorage";
import {
  lambda_FunctionSnapStart,
  lambda_FunctionSnapStart_GetTypes,
} from "../types/lambda_FunctionSnapStart";
import {
  lambda_FunctionFileSystemConfig,
  lambda_FunctionFileSystemConfig_GetTypes,
} from "../types/lambda_FunctionFileSystemConfig";
import {
  lambda_FunctionVpcConfig,
  lambda_FunctionVpcConfig_GetTypes,
} from "../types/lambda_FunctionVpcConfig";

export interface FunctionArgs {
  // Path to the function's deployment package within the local filesystem. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified.
  code?: string;

  // Configuration block. Detailed below.
  environment?: lambda_FunctionEnvironment;

  /*
Amazon Resource Name (ARN) of the function's execution role. The role provides the function's identity and access to AWS services and resources.

The following arguments are optional:
*/
  role?: string;

  // Configuration block. Detailed below.
  vpcConfig?: lambda_FunctionVpcConfig;

  // To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
  codeSigningConfigArn?: string;

  // Unique name for your Lambda Function.
  name?: string;

  // Identifier of the function's runtime. See [Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html#SSS-CreateFunction-request-Runtime) for valid values.
  runtime?: string;

  // Object version containing the function's deployment package. Conflicts with `filename` and `image_uri`.
  s3ObjectVersion?: string;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block. Detailed below.
  imageConfig?: lambda_FunctionImageConfig;

  // --AWS no longer supports this operation. This attribute now has no effect and will be removed in a future major version.-- Whether to replace the security groups on associated lambda network interfaces upon destruction. Removing these security groups from orphaned network interfaces can speed up security group deletion times by avoiding a dependency on AWS's internal cleanup operations. By default, the ENI security groups will be replaced with the `default` security group in the function's VPC. Set the `replacement_security_group_ids` attribute to use a custom list of security groups for replacement.
  replaceSecurityGroupsOnDestroy?: boolean;

  // List of security group IDs to assign to orphaned Lambda function network interfaces upon destruction. `replace_security_groups_on_destroy` must be set to `true` to use this attribute.
  replacementSecurityGroupIds?: Array<string>;

  // S3 bucket location containing the function's deployment package. This bucket must reside in the same AWS region where you are creating the Lambda function. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. When `s3_bucket` is set, `s3_key` is required.
  s3Bucket?: string;

  // Configuration block. Detailed below.
  tracingConfig?: lambda_FunctionTracingConfig;

  // Instruction set architecture for your Lambda function. Valid values are `["x86_64"]` and `["arm64"]`. Default is `["x86_64"]`. Removing this attribute, function's architecture stay the same.
  architectures?: Array<string>;

  // List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
  layers?: Array<string>;

  // Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html)
  memorySize?: number;

  // Lambda deployment package type. Valid values are `Zip` and `Image`. Defaults to `Zip`.
  packageType?: string;

  // S3 key of an object containing the function's deployment package. When `s3_bucket` is set, `s3_key` is required.
  s3Key?: string;

  // Configuration block. Detailed below.
  deadLetterConfig?: lambda_FunctionDeadLetterConfig;

  // ECR image URI containing the function's deployment package. Exactly one of `filename`, `image_uri`,  or `s3_bucket` must be specified.
  imageUri?: string;

  // Configuration block used to specify advanced logging settings. Detailed below.
  loggingConfig?: lambda_FunctionLoggingConfig;

  // Amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)
  reservedConcurrentExecutions?: number;

  // Description of what your Lambda Function does.
  description?: string;

  // The amount of Ephemeral storage(`/tmp`) to allocate for the Lambda Function in MB. This parameter is used to expand the total amount of Ephemeral storage available, beyond the default amount of `512`MB. Detailed below.
  ephemeralStorage?: lambda_FunctionEphemeralStorage;

  // Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
  publish?: boolean;

  // Set to true if you do not wish the function to be deleted at destroy time, and instead just remove the function from the Pulumi state.
  skipDestroy?: boolean;

  // Snap start settings block. Detailed below.
  snapStart?: lambda_FunctionSnapStart;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.
  sourceCodeHash?: string;

  // Configuration block. Detailed below.
  fileSystemConfig?: lambda_FunctionFileSystemConfig;

  // Function [entrypoint](https://docs.aws.amazon.com/lambda/latest/dg/walkthrough-custom-events-create-test-function.html) in your code.
  handler?: string;

  // Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key that is used to encrypt environment variables. If this configuration is not provided when environment variables are in use, AWS Lambda uses a default service key. If this configuration is provided when environment variables are not in use, the AWS Lambda API does not save this configuration and the provider will show a perpetual difference of adding the key. To fix the perpetual difference, remove this configuration.
  kmsKeyArn?: string;

  // Amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html).
  timeout?: number;
}
export class Function extends Resource {
  // Function [entrypoint](https://docs.aws.amazon.com/lambda/latest/dg/walkthrough-custom-events-create-test-function.html) in your code.
  public handler?: string;

  // List of security group IDs to assign to orphaned Lambda function network interfaces upon destruction. `replace_security_groups_on_destroy` must be set to `true` to use this attribute.
  public replacementSecurityGroupIds?: Array<string>;

  /*
Latest published version of your Lambda Function.
- `vpc_config.vpc_id` - ID of the VPC.
*/
  public version?: string;

  // Instruction set architecture for your Lambda function. Valid values are `["x86_64"]` and `["arm64"]`. Default is `["x86_64"]`. Removing this attribute, function's architecture stay the same.
  public architectures?: Array<string>;

  // To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
  public codeSigningConfigArn?: string;

  // Configuration block. Detailed below.
  public fileSystemConfig?: lambda_FunctionFileSystemConfig;

  // Unique name for your Lambda Function.
  public name?: string;

  // Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
  public publish?: boolean;

  // --AWS no longer supports this operation. This attribute now has no effect and will be removed in a future major version.-- Whether to replace the security groups on associated lambda network interfaces upon destruction. Removing these security groups from orphaned network interfaces can speed up security group deletion times by avoiding a dependency on AWS's internal cleanup operations. By default, the ENI security groups will be replaced with the `default` security group in the function's VPC. Set the `replacement_security_group_ids` attribute to use a custom list of security groups for replacement.
  public replaceSecurityGroupsOnDestroy?: boolean;

  // Path to the function's deployment package within the local filesystem. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified.
  public code?: string;

  // Date this resource was last modified.
  public lastModified?: string;

  // Lambda deployment package type. Valid values are `Zip` and `Image`. Defaults to `Zip`.
  public packageType?: string;

  // ARN identifying your Lambda Function Version (if versioning is enabled via `publish = true`).
  public qualifiedArn?: string;

  // S3 bucket location containing the function's deployment package. This bucket must reside in the same AWS region where you are creating the Lambda function. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. When `s3_bucket` is set, `s3_key` is required.
  public s3Bucket?: string;

  // Configuration block. Detailed below.
  public deadLetterConfig?: lambda_FunctionDeadLetterConfig;

  // ARN to be used for invoking Lambda Function from API Gateway - to be used in `aws.apigateway.Integration`'s `uri`.
  public invokeArn?: string;

  // Qualified ARN (ARN with lambda version number) to be used for invoking Lambda Function from API Gateway - to be used in `aws.apigateway.Integration`'s `uri`.
  public qualifiedInvokeArn?: string;

  // Configuration block. Detailed below.
  public imageConfig?: lambda_FunctionImageConfig;

  // S3 key of an object containing the function's deployment package. When `s3_bucket` is set, `s3_key` is required.
  public s3Key?: string;

  // ARN of the signing job.
  public signingJobArn?: string;

  // Size in bytes of the function .zip file.
  public sourceCodeSize?: number;

  // Configuration block. Detailed below.
  public vpcConfig?: lambda_FunctionVpcConfig;

  // Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key that is used to encrypt environment variables. If this configuration is not provided when environment variables are in use, AWS Lambda uses a default service key. If this configuration is provided when environment variables are not in use, the AWS Lambda API does not save this configuration and the provider will show a perpetual difference of adding the key. To fix the perpetual difference, remove this configuration.
  public kmsKeyArn?: string;

  // Identifier of the function's runtime. See [Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html#SSS-CreateFunction-request-Runtime) for valid values.
  public runtime?: string;

  // Object version containing the function's deployment package. Conflicts with `filename` and `image_uri`.
  public s3ObjectVersion?: string;

  // Set to true if you do not wish the function to be deleted at destroy time, and instead just remove the function from the Pulumi state.
  public skipDestroy?: boolean;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ECR image URI containing the function's deployment package. Exactly one of `filename`, `image_uri`,  or `s3_bucket` must be specified.
  public imageUri?: string;

  // Configuration block used to specify advanced logging settings. Detailed below.
  public loggingConfig?: lambda_FunctionLoggingConfig;

  // Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html)
  public memorySize?: number;

  // Amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)
  public reservedConcurrentExecutions?: number;

  /*
ARN of the signing profile version.
- `snap_start.optimization_status` - Optimization status of the snap start configuration. Valid values are `On` and `Off`.
*/
  public signingProfileVersionArn?: string;

  // Snap start settings block. Detailed below.
  public snapStart?: lambda_FunctionSnapStart;

  // Amazon Resource Name (ARN) of the Amazon EFS Access Point that provides access to the file system.
  public arn?: string;

  // Description of what your Lambda Function does.
  public description?: string;

  // Configuration block. Detailed below.
  public environment?: lambda_FunctionEnvironment;

  // The amount of Ephemeral storage(`/tmp`) to allocate for the Lambda Function in MB. This parameter is used to expand the total amount of Ephemeral storage available, beyond the default amount of `512`MB. Detailed below.
  public ephemeralStorage?: lambda_FunctionEphemeralStorage;

  // List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
  public layers?: Array<string>;

  /*
Amazon Resource Name (ARN) of the function's execution role. The role provides the function's identity and access to AWS services and resources.

The following arguments are optional:
*/
  public role?: string;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.
  public sourceCodeHash?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html).
  public timeout?: number;

  // Configuration block. Detailed below.
  public tracingConfig?: lambda_FunctionTracingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for your Lambda Function.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3Bucket",
        "S3 bucket location containing the function's deployment package. This bucket must reside in the same AWS region where you are creating the Lambda function. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. When `s3_bucket` is set, `s3_key` is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of what your Lambda Function does.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "architectures",
        'Instruction set architecture for your Lambda function. Valid values are `["x86_64"]` and `["arm64"]`. Default is `["x86_64"]`. Removing this attribute, function\'s architecture stay the same.',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "memorySize",
        "Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "packageType",
        "Lambda deployment package type. Valid values are `Zip` and `Image`. Defaults to `Zip`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "reservedConcurrentExecutions",
        "Amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ephemeralStorage",
        "The amount of Ephemeral storage(`/tmp`) to allocate for the Lambda Function in MB. This parameter is used to expand the total amount of Ephemeral storage available, beyond the default amount of `512`MB. Detailed below.",
        lambda_FunctionEphemeralStorage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration block. Detailed below.",
        lambda_FunctionVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "replaceSecurityGroupsOnDestroy",
        "**AWS no longer supports this operation. This attribute now has no effect and will be removed in a future major version.** Whether to replace the security groups on associated lambda network interfaces upon destruction. Removing these security groups from orphaned network interfaces can speed up security group deletion times by avoiding a dependency on AWS's internal cleanup operations. By default, the ENI security groups will be replaced with the `default` security group in the function's VPC. Set the `replacement_security_group_ids` attribute to use a custom list of security groups for replacement.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfig",
        "Configuration block used to specify advanced logging settings. Detailed below.",
        lambda_FunctionLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publish",
        "Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeout",
        "Amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtime",
        "Identifier of the function's runtime. See [Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html#SSS-CreateFunction-request-Runtime) for valid values.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3Key",
        "S3 key of an object containing the function's deployment package. When `s3_bucket` is set, `s3_key` is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "snapStart",
        "Snap start settings block. Detailed below.",
        lambda_FunctionSnapStart_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceCodeHash",
        "Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "fileSystemConfig",
        "Configuration block. Detailed below.",
        lambda_FunctionFileSystemConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "code",
        "Path to the function's deployment package within the local filesystem. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "environment",
        "Configuration block. Detailed below.",
        lambda_FunctionEnvironment_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "layers",
        "List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageUri",
        "ECR image URI containing the function's deployment package. Exactly one of `filename`, `image_uri`,  or `s3_bucket` must be specified.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3ObjectVersion",
        "Object version containing the function's deployment package. Conflicts with `filename` and `image_uri`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tracingConfig",
        "Configuration block. Detailed below.",
        lambda_FunctionTracingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key that is used to encrypt environment variables. If this configuration is not provided when environment variables are in use, AWS Lambda uses a default service key. If this configuration is provided when environment variables are not in use, the AWS Lambda API does not save this configuration and the provider will show a perpetual difference of adding the key. To fix the perpetual difference, remove this configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "Set to true if you do not wish the function to be deleted at destroy time, and instead just remove the function from the Pulumi state.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "handler",
        "Function [entrypoint](https://docs.aws.amazon.com/lambda/latest/dg/walkthrough-custom-events-create-test-function.html) in your code.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "Amazon Resource Name (ARN) of the function's execution role. The role provides the function's identity and access to AWS services and resources.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "codeSigningConfigArn",
        "To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "imageConfig",
        "Configuration block. Detailed below.",
        lambda_FunctionImageConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "replacementSecurityGroupIds",
        "List of security group IDs to assign to orphaned Lambda function network interfaces upon destruction. `replace_security_groups_on_destroy` must be set to `true` to use this attribute.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deadLetterConfig",
        "Configuration block. Detailed below.",
        lambda_FunctionDeadLetterConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
