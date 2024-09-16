import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lambda_AliasRoutingConfig,
  lambda_AliasRoutingConfig_GetTypes,
} from '../types/lambda_AliasRoutingConfig';

export interface AliasArgs {
  // The Lambda alias' route configuration settings. Fields documented below
  routingConfig?: lambda_AliasRoutingConfig;

  // Description of the alias.
  description?: string;

  // Lambda Function name or ARN.
  functionName?: string;

  // Lambda function version for which you are creating the alias. Pattern: `(\$LATEST|[0-9]+)`.
  functionVersion?: string;

  // Name for the alias you are creating. Pattern: `(?!^[0-9]+$)([a-zA-Z0-9-_]+)`
  name?: string;
}
export class Alias extends DS_Resource {
  // The ARN to be used for invoking Lambda Function from API Gateway - to be used in `aws.apigateway.Integration`'s `uri`
  public invokeArn?: string;

  // Name for the alias you are creating. Pattern: `(?!^[0-9]+$)([a-zA-Z0-9-_]+)`
  public name?: string;

  // The Lambda alias' route configuration settings. Fields documented below
  public routingConfig?: lambda_AliasRoutingConfig;

  // The Amazon Resource Name (ARN) identifying your Lambda function alias.
  public arn?: string;

  // Description of the alias.
  public description?: string;

  // Lambda Function name or ARN.
  public functionName?: string;

  // Lambda function version for which you are creating the alias. Pattern: `(\$LATEST|[0-9]+)`.
  public functionVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'routingConfig',
        "The Lambda alias' route configuration settings. Fields documented below",
        () => lambda_AliasRoutingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the alias.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'functionName',
        'Lambda Function name or ARN.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'functionVersion',
        'Lambda function version for which you are creating the alias. Pattern: `(\\$LATEST|[0-9]+)`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name for the alias you are creating. Pattern: `(?!^[0-9]+$)([a-zA-Z0-9-_]+)`',
        () => [],
        false,
        true,
      ),
    ];
  }
}
