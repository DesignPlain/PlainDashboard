import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudformation_CloudFormationTypeLoggingConfig,
  cloudformation_CloudFormationTypeLoggingConfig_GetTypes,
} from '../types/cloudformation_CloudFormationTypeLoggingConfig';

export interface CloudFormationTypeArgs {
  // Configuration block containing logging configuration.
  loggingConfig?: cloudformation_CloudFormationTypeLoggingConfig;

  // URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register. Must begin with `s3://` or `https://`. For example, `s3://example-bucket/example-object`.
  schemaHandlerPackage?: string;

  // CloudFormation Registry Type. For example, `RESOURCE` or `MODULE`.
  type?: string;

  // CloudFormation Type name. For example, `ExampleCompany::ExampleService::ExampleResource`.
  typeName?: string;

  // Amazon Resource Name (ARN) of the IAM Role for CloudFormation to assume when invoking the extension. If your extension calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. When CloudFormation needs to invoke the extension handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the extension handler, thereby supplying your extension with the appropriate credentials.
  executionRoleArn?: string;
}
export class CloudFormationType extends DS_Resource {
  // Deprecation status of the version.
  public deprecatedStatus?: string;

  // Configuration block containing logging configuration.
  public loggingConfig?: cloudformation_CloudFormationTypeLoggingConfig;

  // Provisioning behavior of the CloudFormation Type.
  public provisioningType?: string;

  // (Optional) Amazon Resource Name (ARN) of the CloudFormation Type. See also `arn`.
  public typeArn?: string;

  // Scope of the CloudFormation Type.
  public visibility?: string;

  // (Optional) Amazon Resource Name (ARN) of the CloudFormation Type version. See also `type_arn`.
  public arn?: string;

  // Description of the version.
  public description?: string;

  // URL of the documentation for the CloudFormation Type.
  public documentationUrl?: string;

  // URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register. Must begin with `s3://` or `https://`. For example, `s3://example-bucket/example-object`.
  public schemaHandlerPackage?: string;

  // URL of the source code for the CloudFormation Type.
  public sourceUrl?: string;

  // CloudFormation Type name. For example, `ExampleCompany::ExampleService::ExampleResource`.
  public typeName?: string;

  // Identifier of the CloudFormation Type default version.
  public defaultVersionId?: string;

  // Amazon Resource Name (ARN) of the IAM Role for CloudFormation to assume when invoking the extension. If your extension calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. When CloudFormation needs to invoke the extension handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the extension handler, thereby supplying your extension with the appropriate credentials.
  public executionRoleArn?: string;

  // Whether the CloudFormation Type version is the default version.
  public isDefaultVersion?: boolean;

  // (Optional) Identifier of the CloudFormation Type version.
  public versionId?: string;

  // JSON document of the CloudFormation Type schema.
  public schema?: string;

  // CloudFormation Registry Type. For example, `RESOURCE` or `MODULE`.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'typeName',
        'CloudFormation Type name. For example, `ExampleCompany::ExampleService::ExampleResource`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'executionRoleArn',
        'Amazon Resource Name (ARN) of the IAM Role for CloudFormation to assume when invoking the extension. If your extension calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. When CloudFormation needs to invoke the extension handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the extension handler, thereby supplying your extension with the appropriate credentials.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loggingConfig',
        'Configuration block containing logging configuration.',
        () => cloudformation_CloudFormationTypeLoggingConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'schemaHandlerPackage',
        'URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register. Must begin with `s3://` or `https://`. For example, `s3://example-bucket/example-object`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'CloudFormation Registry Type. For example, `RESOURCE` or `MODULE`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
