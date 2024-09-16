import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lambda_Runtime,
  lambda_Runtime_GetTypes,
} from '../types/lambda_Runtime';
import {
  lambda_FunctionLoggingConfig,
  lambda_FunctionLoggingConfig_GetTypes,
} from '../types/lambda_FunctionLoggingConfig';
import {
  lambda_FunctionEnvironment,
  lambda_FunctionEnvironment_GetTypes,
} from '../types/lambda_FunctionEnvironment';
import {
  lambda_FunctionTracingConfig,
  lambda_FunctionTracingConfig_GetTypes,
} from '../types/lambda_FunctionTracingConfig';
import {
  lambda_FunctionFileSystemConfig,
  lambda_FunctionFileSystemConfig_GetTypes,
} from '../types/lambda_FunctionFileSystemConfig';
import {
  lambda_FunctionSnapStart,
  lambda_FunctionSnapStart_GetTypes,
} from '../types/lambda_FunctionSnapStart';
import {
  lambda_FunctionDeadLetterConfig,
  lambda_FunctionDeadLetterConfig_GetTypes,
} from '../types/lambda_FunctionDeadLetterConfig';
import {
  lambda_CodePathOptions,
  lambda_CodePathOptions_GetTypes,
} from '../types/lambda_CodePathOptions';
import {
  lambda_FunctionEphemeralStorage,
  lambda_FunctionEphemeralStorage_GetTypes,
} from '../types/lambda_FunctionEphemeralStorage';
import {
  lambda_FunctionVpcConfig,
  lambda_FunctionVpcConfig_GetTypes,
} from '../types/lambda_FunctionVpcConfig';
import {
  lambda_FunctionImageConfig,
  lambda_FunctionImageConfig_GetTypes,
} from '../types/lambda_FunctionImageConfig';

export interface CallbackFunctionArgs {
  // The Lambda runtime to use. If not provided, will default to `NodeJS20dX`.
  runtime?: lambda_Runtime;

  // S3 key of an object containing the function's deployment package. When `s3_bucket` is set, `s3_key` is required.
  s3Key?: string;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Javascript function that will be called to produce the callback function that is the entrypoint for the AWS Lambda. Either callback or callbackFactory must be provided.
  callbackFactory?: string;

  // Configuration block. Detailed below.
  deadLetterConfig?: lambda_FunctionDeadLetterConfig;

  // Configuration block used to specify advanced logging settings. Detailed below.
  loggingConfig?: lambda_FunctionLoggingConfig;

  // ECR image URI containing the function's deployment package. Exactly one of `filename`, `image_uri`,  or `s3_bucket` must be specified.
  imageUri?: string;

  // List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
  layers?: Array<string>;

  // S3 bucket location containing the function's deployment package. This bucket must reside in the same AWS region where you are creating the Lambda function. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. When `s3_bucket` is set, `s3_key` is required.
  s3Bucket?: string;

  // The Javascript function to use as the entrypoint for the AWS Lambda out of. Either callback or callbackFactory must be provided.
  callback?: string;

  // Options to control which paths/packages should be included or excluded in the zip file containing the code for the AWS lambda.
  codePathOptions?: lambda_CodePathOptions;

  // Configuration block. Detailed below.
  environment?: lambda_FunctionEnvironment;

  // Virtual attribute used to trigger replacement when source code changes. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.
  sourceCodeHash?: string;

  // Configuration block. Detailed below.
  tracingConfig?: lambda_FunctionTracingConfig;

  // The amount of Ephemeral storage(`/tmp`) to allocate for the Lambda Function in MB. This parameter is used to expand the total amount of Ephemeral storage available, beyond the default amount of `512`MB. Detailed below.
  ephemeralStorage?: lambda_FunctionEphemeralStorage;

  /*
List of security group IDs to assign to the function's VPC configuration prior to destruction.
`replace_security_groups_on_destroy` must be set to `true` to use this attribute.
*/
  replacementSecurityGroupIds?: Array<string>;

  // Configuration block. Detailed below.
  vpcConfig?: lambda_FunctionVpcConfig;

  // Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html)
  memorySize?: number;

  // A list of IAM policy ARNs to attach to the Function. Only one of `role` or `policies` can be provided. If neither is provided, the default policies will be used instead.
  policies?: Array<string>;

  // Object version containing the function's deployment package. Conflicts with `filename` and `image_uri`.
  s3ObjectVersion?: string;

  // Amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html).
  timeout?: number;

  // To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
  codeSigningConfigArn?: string;

  // Configuration block. Detailed below.
  fileSystemConfig?: lambda_FunctionFileSystemConfig;

  // Unique name for your Lambda Function.
  name?: string;

  // Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
  publish?: boolean;

  // Amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)
  reservedConcurrentExecutions?: number;

  // Snap start settings block. Detailed below.
  snapStart?: lambda_FunctionSnapStart;

  // Instruction set architecture for your Lambda function. Valid values are `["x86_64"]` and `["arm64"]`. Default is `["x86_64"]`. Removing this attribute, function's architecture stay the same.
  architectures?: Array<string>;

  // Description of what your Lambda Function does.
  description?: string;

  // Lambda deployment package type. Valid values are `Zip` and `Image`. Defaults to `Zip`.
  packageType?: string;

  // The execution role for the Lambda Function. The role provides the function's identity and access to AWS services and resources. Only one of `role` or `policies` can be provided. If neither is provided, the default policies will be used instead.
  role?: string;

  // Set to true if you do not wish the function to be deleted at destroy time, and instead just remove the function from the Pulumi state.
  skipDestroy?: boolean;

  // Configuration block. Detailed below.
  imageConfig?: lambda_FunctionImageConfig;

  // Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key that is used to encrypt environment variables. If this configuration is not provided when environment variables are in use, AWS Lambda uses a default service key. If this configuration is provided when environment variables are not in use, the AWS Lambda API does not save this configuration and the provider will show a perpetual difference of adding the key. To fix the perpetual difference, remove this configuration.
  kmsKeyArn?: string;

  /*
Whether to replace the security groups on the function's VPC configuration prior to destruction.
Removing these security group associations prior to function destruction can speed up security group deletion times of AWS's internal cleanup operations.
By default, the security groups will be replaced with the `default` security group in the function's configured VPC.
Set the `replacement_security_group_ids` attribute to use a custom list of security groups for replacement.
*/
  replaceSecurityGroupsOnDestroy?: boolean;
}
export class CallbackFunction extends DS_Resource {
  // Configuration block. Detailed below.
  public deadLetterConfig?: lambda_FunctionDeadLetterConfig;

  // Configuration block. Detailed below.
  public environment?: lambda_FunctionEnvironment;

  // ECR image URI containing the function's deployment package. Exactly one of `filename`, `image_uri`,  or `s3_bucket` must be specified.
  public imageUri?: string;

  // List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
  public layers?: Array<string>;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) identifying your Lambda Function.
  public arn?: string;

  // Path to the function's deployment package within the local filesystem. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified.
  public code?: string;

  // To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
  public codeSigningConfigArn?: string;

  // Configuration block. Detailed below.
  public tracingConfig?: lambda_FunctionTracingConfig;

  // Latest published version of your Lambda Function.
  public version?: string;

  /*
List of security group IDs to assign to the function's VPC configuration prior to destruction.
`replace_security_groups_on_destroy` must be set to `true` to use this attribute.
*/
  public replacementSecurityGroupIds?: Array<string>;

  // ARN of the signing job.
  public signingJobArn?: string;

  // Set to true if you do not wish the function to be deleted at destroy time, and instead just remove the function from the Pulumi state.
  public skipDestroy?: boolean;

  // Description of what your Lambda Function does.
  public description?: string;

  // Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
  public publish?: boolean;

  // ARN identifying your Lambda Function Version (if versioning is enabled via `publish = true`).
  public qualifiedArn?: string;

  // Object version containing the function's deployment package. Conflicts with `filename` and `image_uri`.
  public s3ObjectVersion?: string;

  // Virtual attribute used to trigger replacement when source code changes. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.
  public sourceCodeHash?: string;

  // Base64-encoded representation of raw SHA-256 sum of the zip file.
  public codeSha256?: string;

  // Date this resource was last modified.
  public lastModified?: string;

  // Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html)
  public memorySize?: number;

  // S3 bucket location containing the function's deployment package. This bucket must reside in the same AWS region where you are creating the Lambda function. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. When `s3_bucket` is set, `s3_key` is required.
  public s3Bucket?: string;

  // Amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html).
  public timeout?: number;

  // ARN to be used for invoking Lambda Function from API Gateway - to be used in `aws.apigateway.Integration`'s `uri`.
  public invokeArn?: string;

  // Qualified ARN (ARN with lambda version number) to be used for invoking Lambda Function from API Gateway - to be used in `aws.apigateway.Integration`'s `uri`.
  public qualifiedInvokeArn?: string;

  // Amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)
  public reservedConcurrentExecutions?: number;

  // Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key that is used to encrypt environment variables. If this configuration is not provided when environment variables are in use, AWS Lambda uses a default service key. If this configuration is provided when environment variables are not in use, the AWS Lambda API does not save this configuration and the provider will show a perpetual difference of adding the key. To fix the perpetual difference, remove this configuration.
  public kmsKeyArn?: string;

  // ARN of the signing profile version.
  public signingProfileVersionArn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration block. Detailed below.
  public vpcConfig?: lambda_FunctionVpcConfig;

  // The amount of Ephemeral storage(`/tmp`) to allocate for the Lambda Function in MB. This parameter is used to expand the total amount of Ephemeral storage available, beyond the default amount of `512`MB. Detailed below.
  public ephemeralStorage?: lambda_FunctionEphemeralStorage;

  // Unique name for your Lambda Function.
  public name?: string;

  /*
Amazon Resource Name (ARN) of the function's execution role. The role provides the function's identity and access to AWS services and resources.

The following arguments are optional:
*/
  public role?: string;

  // The IAM role assigned to this Lambda function. Will be undefined if an ARN was provided for the role input property.
  public roleInstance?: string;

  // Identifier of the function's runtime. See [Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html#SSS-CreateFunction-request-Runtime) for valid values.
  public runtime?: string;

  // S3 key of an object containing the function's deployment package. When `s3_bucket` is set, `s3_key` is required.
  public s3Key?: string;

  // Size in bytes of the function .zip file.
  public sourceCodeSize?: number;

  // Configuration block. Detailed below.
  public fileSystemConfig?: lambda_FunctionFileSystemConfig;

  // Function [entrypoint](https://docs.aws.amazon.com/lambda/latest/dg/walkthrough-custom-events-create-test-function.html) in your code.
  public handler?: string;

  // Configuration block. Detailed below.
  public imageConfig?: lambda_FunctionImageConfig;

  /*
Whether to replace the security groups on the function's VPC configuration prior to destruction.
Removing these security group associations prior to function destruction can speed up security group deletion times of AWS's internal cleanup operations.
By default, the security groups will be replaced with the `default` security group in the function's configured VPC.
Set the `replacement_security_group_ids` attribute to use a custom list of security groups for replacement.
*/
  public replaceSecurityGroupsOnDestroy?: boolean;

  // Snap start settings block. Detailed below.
  public snapStart?: lambda_FunctionSnapStart;

  // Instruction set architecture for your Lambda function. Valid values are `["x86_64"]` and `["arm64"]`. Default is `["x86_64"]`. Removing this attribute, function's architecture stay the same.
  public architectures?: Array<string>;

  // Configuration block used to specify advanced logging settings. Detailed below.
  public loggingConfig?: lambda_FunctionLoggingConfig;

  // Lambda deployment package type. Valid values are `Zip` and `Image`. Defaults to `Zip`.
  public packageType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'skipDestroy',
        'Set to true if you do not wish the function to be deleted at destroy time, and instead just remove the function from the Pulumi state.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyArn',
        'Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key that is used to encrypt environment variables. If this configuration is not provided when environment variables are in use, AWS Lambda uses a default service key. If this configuration is provided when environment variables are not in use, the AWS Lambda API does not save this configuration and the provider will show a perpetual difference of adding the key. To fix the perpetual difference, remove this configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'timeout',
        'Amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'imageConfig',
        'Configuration block. Detailed below.',
        () => lambda_FunctionImageConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'callback',
        'The Javascript function to use as the entrypoint for the AWS Lambda out of. Either callback or callbackFactory must be provided.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3ObjectVersion',
        "Object version containing the function's deployment package. Conflicts with `filename` and `image_uri`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of what your Lambda Function does.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loggingConfig',
        'Configuration block used to specify advanced logging settings. Detailed below.',
        () => lambda_FunctionLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'ephemeralStorage',
        'The amount of Ephemeral storage(`/tmp`) to allocate for the Lambda Function in MB. This parameter is used to expand the total amount of Ephemeral storage available, beyond the default amount of `512`MB. Detailed below.',
        () => lambda_FunctionEphemeralStorage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'replacementSecurityGroupIds',
        "List of security group IDs to assign to the function's VPC configuration prior to destruction.\n`replace_security_groups_on_destroy` must be set to `true` to use this attribute.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'policies',
        'A list of IAM policy ARNs to attach to the Function. Only one of `role` or `policies` can be provided. If neither is provided, the default policies will be used instead.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'reservedConcurrentExecutions',
        'Amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'runtime',
        'The Lambda runtime to use. If not provided, will default to `NodeJS20dX`.',
        () => lambda_Runtime_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3Key',
        "S3 key of an object containing the function's deployment package. When `s3_bucket` is set, `s3_key` is required.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'sourceCodeHash',
        'Virtual attribute used to trigger replacement when source code changes. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        "The execution role for the Lambda Function. The role provides the function's identity and access to AWS services and resources. Only one of `role` or `policies` can be provided. If neither is provided, the default policies will be used instead.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'layers',
        'List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'fileSystemConfig',
        'Configuration block. Detailed below.',
        () => lambda_FunctionFileSystemConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'snapStart',
        'Snap start settings block. Detailed below.',
        () => lambda_FunctionSnapStart_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'architectures',
        'Instruction set architecture for your Lambda function. Valid values are `["x86_64"]` and `["arm64"]`. Default is `["x86_64"]`. Removing this attribute, function\'s architecture stay the same.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'packageType',
        'Lambda deployment package type. Valid values are `Zip` and `Image`. Defaults to `Zip`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'callbackFactory',
        'The Javascript function that will be called to produce the callback function that is the entrypoint for the AWS Lambda. Either callback or callbackFactory must be provided.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'deadLetterConfig',
        'Configuration block. Detailed below.',
        () => lambda_FunctionDeadLetterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'tracingConfig',
        'Configuration block. Detailed below.',
        () => lambda_FunctionTracingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'memorySize',
        'Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'codeSigningConfigArn',
        'To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'imageUri',
        "ECR image URI containing the function's deployment package. Exactly one of `filename`, `image_uri`,  or `s3_bucket` must be specified.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'environment',
        'Configuration block. Detailed below.',
        () => lambda_FunctionEnvironment_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'vpcConfig',
        'Configuration block. Detailed below.',
        () => lambda_FunctionVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name for your Lambda Function.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'publish',
        'Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'replaceSecurityGroupsOnDestroy',
        "Whether to replace the security groups on the function's VPC configuration prior to destruction.\nRemoving these security group associations prior to function destruction can speed up security group deletion times of AWS's internal cleanup operations.\nBy default, the security groups will be replaced with the `default` security group in the function's configured VPC.\nSet the `replacement_security_group_ids` attribute to use a custom list of security groups for replacement.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3Bucket',
        "S3 bucket location containing the function's deployment package. This bucket must reside in the same AWS region where you are creating the Lambda function. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. When `s3_bucket` is set, `s3_key` is required.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'codePathOptions',
        'Options to control which paths/packages should be included or excluded in the zip file containing the code for the AWS lambda.',
        () => lambda_CodePathOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
