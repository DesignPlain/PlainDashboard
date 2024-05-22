import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from 'src/app/enum/InputType';
import { Resource as BaseResource } from 'src/app/Models/CloudResource';
import { DynamicUIProps } from 'src/app/components/resource-config/resource-config.component';

export interface ResourceArgs {
  // JSON string matching the CloudFormation resource type schema with desired configuration.
  desiredState?: string;

  // Amazon Resource Name (ARN) of the IAM Role to assume for operations.
  roleArn?: string;

  // JSON string of the CloudFormation resource type schema which is used for plan time validation where possible. Automatically fetched if not provided. In large scale environments with multiple resources using the same `type_name`, it is recommended to fetch the schema once via the `aws.cloudformation.CloudFormationType` data source and use this argument to reduce `DescribeType` API operation throttling. This value is marked sensitive only to prevent large plan differences from showing.
  schema?: string;

  /*
CloudFormation resource type name. For example, `AWS::EC2::VPC`.

The following arguments are optional:
*/
  typeName?: string;

  // Identifier of the CloudFormation resource type version.
  typeVersionId?: string;
}
export class Resource extends BaseResource {
  // JSON string matching the CloudFormation resource type schema with desired configuration.
  public desiredState?: string;

  // JSON string matching the CloudFormation resource type schema with current configuration. Underlying attributes can be referenced via the `jsondecode()` function, for example, `jsondecode(data.aws_cloudcontrolapi_resource.example.properties)["example"]`.
  public properties?: string;

  // Amazon Resource Name (ARN) of the IAM Role to assume for operations.
  public roleArn?: string;

  // JSON string of the CloudFormation resource type schema which is used for plan time validation where possible. Automatically fetched if not provided. In large scale environments with multiple resources using the same `type_name`, it is recommended to fetch the schema once via the `aws.cloudformation.CloudFormationType` data source and use this argument to reduce `DescribeType` API operation throttling. This value is marked sensitive only to prevent large plan differences from showing.
  public schema?: string;

  /*
CloudFormation resource type name. For example, `AWS::EC2::VPC`.

The following arguments are optional:
*/
  public typeName?: string;

  // Identifier of the CloudFormation resource type version.
  public typeVersionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'schema',
        'JSON string of the CloudFormation resource type schema which is used for plan time validation where possible. Automatically fetched if not provided. In large scale environments with multiple resources using the same `type_name`, it is recommended to fetch the schema once via the `aws.cloudformation.CloudFormationType` data source and use this argument to reduce `DescribeType` API operation throttling. This value is marked sensitive only to prevent large plan differences from showing.',
        [],
        false,
        false
      ),
      new DynamicUIProps(
        InputType.String,
        'typeName',
        'CloudFormation resource type name. For example, `AWS::EC2::VPC`.\n\nThe following arguments are optional:',
        [],
        true,
        true
      ),
      new DynamicUIProps(
        InputType.String,
        'typeVersionId',
        'Identifier of the CloudFormation resource type version.',
        [],
        false,
        false
      ),
      new DynamicUIProps(
        InputType.String,
        'desiredState',
        'JSON string matching the CloudFormation resource type schema with desired configuration.',
        [],
        true,
        false
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'Amazon Resource Name (ARN) of the IAM Role to assume for operations.',
        [],
        false,
        false
      ),
    ];
  }
}
