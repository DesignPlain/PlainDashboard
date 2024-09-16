import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  chatbot_SlackChannelConfigurationTimeouts,
  chatbot_SlackChannelConfigurationTimeouts_GetTypes,
} from '../types/chatbot_SlackChannelConfigurationTimeouts';

export interface SlackChannelConfigurationArgs {
  // List of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
  guardrailPolicyArns?: Array<string>;

  // Logging levels include `ERROR`, `INFO`, or `NONE`.
  loggingLevel?: string;

  // ARNs of the SNS topics that deliver notifications to AWS Chatbot.
  snsTopicArns?: Array<string>;

  // Map of tags assigned to the resource.
  tags?: Map<string, string>;

  //
  timeouts?: chatbot_SlackChannelConfigurationTimeouts;

  // Enables use of a user role requirement in your chat configuration.
  userAuthorizationRequired?: boolean;

  // Name of the Slack channel configuration.
  configurationName?: string;

  // User-defined role that AWS Chatbot assumes. This is not the service-linked role.
  iamRoleArn?: string;

  // ID of the Slack channel. For example, `C07EZ1ABC23`.
  slackChannelId?: string;

  /*
ID of the Slack workspace authorized with AWS Chatbot. For example, `T07EA123LEP`.

The following arguments are optional:
*/
  slackTeamId?: string;
}
export class SlackChannelConfiguration extends DS_Resource {
  // Enables use of a user role requirement in your chat configuration.
  public userAuthorizationRequired?: boolean;

  // User-defined role that AWS Chatbot assumes. This is not the service-linked role.
  public iamRoleArn?: string;

  // ID of the Slack channel. For example, `C07EZ1ABC23`.
  public slackChannelId?: string;

  // Map of tags assigned to the resource.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: chatbot_SlackChannelConfigurationTimeouts;

  // Name of the Slack channel configuration.
  public configurationName?: string;

  /*
ID of the Slack workspace authorized with AWS Chatbot. For example, `T07EA123LEP`.

The following arguments are optional:
*/
  public slackTeamId?: string;

  // Name of the Slack team.
  public slackTeamName?: string;

  // Name of the Slack channel.
  public slackChannelName?: string;

  // ARNs of the SNS topics that deliver notifications to AWS Chatbot.
  public snsTopicArns?: Array<string>;

  // ARN of the Slack channel configuration.
  public chatConfigurationArn?: string;

  // List of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
  public guardrailPolicyArns?: Array<string>;

  // Logging levels include `ERROR`, `INFO`, or `NONE`.
  public loggingLevel?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        'iamRoleArn',
        'User-defined role that AWS Chatbot assumes. This is not the service-linked role.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'slackChannelId',
        'ID of the Slack channel. For example, `C07EZ1ABC23`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'slackTeamId',
        'ID of the Slack workspace authorized with AWS Chatbot. For example, `T07EA123LEP`.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
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
        InputType.Map,
        'tags',
        'Map of tags assigned to the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => chatbot_SlackChannelConfigurationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'configurationName',
        'Name of the Slack channel configuration.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
