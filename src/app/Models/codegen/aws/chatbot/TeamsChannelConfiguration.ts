import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  chatbot_TeamsChannelConfigurationTimeouts,
  chatbot_TeamsChannelConfigurationTimeouts_GetTypes,
} from '../types/chatbot_TeamsChannelConfigurationTimeouts';

export interface TeamsChannelConfigurationArgs {
  // ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role.
  iamRoleArn?: string;

  // Logging levels include `ERROR`, `INFO`, or `NONE`.
  loggingLevel?: string;

  // ARNs of the SNS topics that deliver notifications to AWS Chatbot.
  snsTopicArns?: Array<string>;

  // ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console.
  teamId?: string;

  /*
ID of the Microsoft Teams tenant.

The following arguments are optional:
*/
  tenantId?: string;

  // Name of the Microsoft Teams team.
  teamName?: string;

  //
  timeouts?: chatbot_TeamsChannelConfigurationTimeouts;

  // Enables use of a user role requirement in your chat configuration.
  userAuthorizationRequired?: boolean;

  // ID of the Microsoft Teams channel.
  channelId?: string;

  // Name of the Microsoft Teams channel.
  channelName?: string;

  // Name of the Microsoft Teams channel configuration.
  configurationName?: string;

  // List of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
  guardrailPolicyArns?: Array<string>;

  // Map of tags assigned to the resource.
  tags?: Map<string, string>;
}
export class TeamsChannelConfiguration extends DS_Resource {
  // ID of the Microsoft Teams channel.
  public channelId?: string;

  // Name of the Microsoft Teams channel configuration.
  public configurationName?: string;

  // Logging levels include `ERROR`, `INFO`, or `NONE`.
  public loggingLevel?: string;

  // List of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
  public guardrailPolicyArns?: Array<string>;

  // ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role.
  public iamRoleArn?: string;

  // ARNs of the SNS topics that deliver notifications to AWS Chatbot.
  public snsTopicArns?: Array<string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Map of tags assigned to the resource.
  public tags?: Map<string, string>;

  // ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console.
  public teamId?: string;

  // Name of the Microsoft Teams team.
  public teamName?: string;

  /*
ID of the Microsoft Teams tenant.

The following arguments are optional:
*/
  public tenantId?: string;

  // Name of the Microsoft Teams channel.
  public channelName?: string;

  // ARN of the Microsoft Teams channel configuration.
  public chatConfigurationArn?: string;

  //
  public timeouts?: chatbot_TeamsChannelConfigurationTimeouts;

  // Enables use of a user role requirement in your chat configuration.
  public userAuthorizationRequired?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'guardrailPolicyArns',
        'List of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'iamRoleArn',
        'ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tenantId',
        'ID of the Microsoft Teams tenant.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'teamId',
        'ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'teamName',
        'Name of the Microsoft Teams team.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => chatbot_TeamsChannelConfigurationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'userAuthorizationRequired',
        'Enables use of a user role requirement in your chat configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'channelId',
        'ID of the Microsoft Teams channel.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'channelName',
        'Name of the Microsoft Teams channel.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'loggingLevel',
        'Logging levels include `ERROR`, `INFO`, or `NONE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'snsTopicArns',
        'ARNs of the SNS topics that deliver notifications to AWS Chatbot.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'configurationName',
        'Name of the Microsoft Teams channel configuration.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags assigned to the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
