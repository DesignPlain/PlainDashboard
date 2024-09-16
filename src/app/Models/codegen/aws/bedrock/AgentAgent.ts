import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentAgentPromptOverrideConfiguration,
  bedrock_AgentAgentPromptOverrideConfiguration_GetTypes,
} from '../types/bedrock_AgentAgentPromptOverrideConfiguration';
import {
  bedrock_AgentAgentTimeouts,
  bedrock_AgentAgentTimeouts_GetTypes,
} from '../types/bedrock_AgentAgentTimeouts';

export interface AgentAgentArgs {
  /*
Foundation model used for orchestration by the agent.

The following arguments are optional:
*/
  foundationModel?: string;

  // Number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
  idleSessionTtlInSeconds?: number;

  //
  timeouts?: bedrock_AgentAgentTimeouts;

  // ARN of the AWS KMS key that encrypts the agent.
  customerEncryptionKeyArn?: string;

  // Description of the agent.
  description?: string;

  // Instructions that tell the agent what it should do and how it should interact with users.
  instruction?: string;

  // Whether to prepare the agent after creation or modification. Defaults to `true`.
  prepareAgent?: boolean;

  // Configurations to override prompt templates in different parts of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html). See `prompt_override_configuration` Block for details.
  promptOverrideConfigurations?: Array<bedrock_AgentAgentPromptOverrideConfiguration>;

  // Whether the in-use check is skipped when deleting the agent.
  skipResourceInUseCheck?: boolean;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the agent.
  agentName?: string;

  // ARN of the IAM role with permissions to invoke API operations on the agent.
  agentResourceRoleArn?: string;
}
export class AgentAgent extends DS_Resource {
  // ARN of the agent.
  public agentArn?: string;

  // Name of the agent.
  public agentName?: string;

  // Instructions that tell the agent what it should do and how it should interact with users.
  public instruction?: string;

  // Whether the in-use check is skipped when deleting the agent.
  public skipResourceInUseCheck?: boolean;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: bedrock_AgentAgentTimeouts;

  /*
Foundation model used for orchestration by the agent.

The following arguments are optional:
*/
  public foundationModel?: string;

  // Number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
  public idleSessionTtlInSeconds?: number;

  // Whether to prepare the agent after creation or modification. Defaults to `true`.
  public prepareAgent?: boolean;

  // Unique identifier of the agent.
  public agentId?: string;

  // ARN of the AWS KMS key that encrypts the agent.
  public customerEncryptionKeyArn?: string;

  // Description of the agent.
  public description?: string;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the IAM role with permissions to invoke API operations on the agent.
  public agentResourceRoleArn?: string;

  // Version of the agent.
  public agentVersion?: string;

  // Configurations to override prompt templates in different parts of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html). See `prompt_override_configuration` Block for details.
  public promptOverrideConfigurations?: Array<bedrock_AgentAgentPromptOverrideConfiguration>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'customerEncryptionKeyArn',
        'ARN of the AWS KMS key that encrypts the agent.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'skipResourceInUseCheck',
        'Whether the in-use check is skipped when deleting the agent.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'agentName',
        'Name of the agent.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'agentResourceRoleArn',
        'ARN of the IAM role with permissions to invoke API operations on the agent.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'foundationModel',
        'Foundation model used for orchestration by the agent.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'idleSessionTtlInSeconds',
        "Number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => bedrock_AgentAgentTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the agent.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'instruction',
        'Instructions that tell the agent what it should do and how it should interact with users.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'prepareAgent',
        'Whether to prepare the agent after creation or modification. Defaults to `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'promptOverrideConfigurations',
        'Configurations to override prompt templates in different parts of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html). See `prompt_override_configuration` Block for details.',
        () => bedrock_AgentAgentPromptOverrideConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
