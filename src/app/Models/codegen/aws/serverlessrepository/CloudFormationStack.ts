import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface CloudFormationStackArgs {
  // A list of capabilities. Valid values are `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_RESOURCE_POLICY`, or `CAPABILITY_AUTO_EXPAND`
  capabilities?: Array<string>;

  // The name of the stack to create. The resource deployed in AWS will be prefixed with `serverlessrepo-`
  name?: string;

  // A map of Parameter structures that specify input parameters for the stack.
  parameters?: Map<string, string>;

  // The version of the application to deploy. If not supplied, deploys the latest version.
  semanticVersion?: string;

  // A list of tags to associate with this stack. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ARN of the application from the Serverless Application Repository.
  applicationId?: string;
}
export class CloudFormationStack extends DS_Resource {
  // A list of tags to associate with this stack. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the application from the Serverless Application Repository.
  public applicationId?: string;

  // A list of capabilities. Valid values are `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_RESOURCE_POLICY`, or `CAPABILITY_AUTO_EXPAND`
  public capabilities?: Array<string>;

  // The name of the stack to create. The resource deployed in AWS will be prefixed with `serverlessrepo-`
  public name?: string;

  // A map of outputs from the stack.
  public outputs?: Map<string, string>;

  // A map of Parameter structures that specify input parameters for the stack.
  public parameters?: Map<string, string>;

  // The version of the application to deploy. If not supplied, deploys the latest version.
  public semanticVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A list of tags to associate with this stack. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'applicationId',
        'The ARN of the application from the Serverless Application Repository.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'capabilities',
        'A list of capabilities. Valid values are `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_RESOURCE_POLICY`, or `CAPABILITY_AUTO_EXPAND`',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the stack to create. The resource deployed in AWS will be prefixed with `serverlessrepo-`',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'parameters',
        'A map of Parameter structures that specify input parameters for the stack.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'semanticVersion',
        'The version of the application to deploy. If not supplied, deploys the latest version.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
