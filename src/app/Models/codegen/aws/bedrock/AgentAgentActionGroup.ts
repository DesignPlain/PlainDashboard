import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentAgentActionGroupApiSchema,
  bedrock_AgentAgentActionGroupApiSchema_GetTypes,
} from '../types/bedrock_AgentAgentActionGroupApiSchema';
import {
  bedrock_AgentAgentActionGroupFunctionSchema,
  bedrock_AgentAgentActionGroupFunctionSchema_GetTypes,
} from '../types/bedrock_AgentAgentActionGroupFunctionSchema';
import {
  bedrock_AgentAgentActionGroupActionGroupExecutor,
  bedrock_AgentAgentActionGroupActionGroupExecutor_GetTypes,
} from '../types/bedrock_AgentAgentActionGroupActionGroupExecutor';

export interface AgentAgentActionGroupArgs {
  // To allow your agent to request the user for additional information when trying to complete a task, set this argument to `AMAZON.UserInput`. You must leave the `description`, `api_schema`, and `action_group_executor` arguments blank for this action group. Valid values: `AMAZON.UserInput`.
  parentActionGroupSignature?: string;

  // Whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request. Valid values: `ENABLED`, `DISABLED`.
  actionGroupState?: string;

  // Version of the agent for which to create the action group. Valid values: `DRAFT`.
  agentVersion?: string;

  // Either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html). See `api_schema` Block for details.
  apiSchema?: bedrock_AgentAgentActionGroupApiSchema;

  // Description of the action group.
  description?: string;

  /*
Describes the function schema for the action group.
Each function represents an action in an action group.
See `function_schema` Block for details.
*/
  functionSchema?: bedrock_AgentAgentActionGroupFunctionSchema;

  /*
ARN of the Lambda function containing the business logic that is carried out upon invoking the action or custom control method for handling the information elicited from the user. See `action_group_executor` Block for details.

The following arguments are optional:
*/
  actionGroupExecutor?: bedrock_AgentAgentActionGroupActionGroupExecutor;

  // Name of the action group.
  actionGroupName?: string;

  // The unique identifier of the agent for which to create the action group.
  agentId?: string;

  // Whether the in-use check is skipped when deleting the action group.
  skipResourceInUseCheck?: boolean;
}
export class AgentAgentActionGroup extends DS_Resource {
  // The unique identifier of the agent for which to create the action group.
  public agentId?: string;

  // Either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html). See `api_schema` Block for details.
  public apiSchema?: bedrock_AgentAgentActionGroupApiSchema;

  // To allow your agent to request the user for additional information when trying to complete a task, set this argument to `AMAZON.UserInput`. You must leave the `description`, `api_schema`, and `action_group_executor` arguments blank for this action group. Valid values: `AMAZON.UserInput`.
  public parentActionGroupSignature?: string;

  // Whether the in-use check is skipped when deleting the action group.
  public skipResourceInUseCheck?: boolean;

  /*
ARN of the Lambda function containing the business logic that is carried out upon invoking the action or custom control method for handling the information elicited from the user. See `action_group_executor` Block for details.

The following arguments are optional:
*/
  public actionGroupExecutor?: bedrock_AgentAgentActionGroupActionGroupExecutor;

  // Unique identifier of the action group.
  public actionGroupId?: string;

  // Name of the action group.
  public actionGroupName?: string;

  // Whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request. Valid values: `ENABLED`, `DISABLED`.
  public actionGroupState?: string;

  // Version of the agent for which to create the action group. Valid values: `DRAFT`.
  public agentVersion?: string;

  // Description of the action group.
  public description?: string;

  /*
Describes the function schema for the action group.
Each function represents an action in an action group.
See `function_schema` Block for details.
*/
  public functionSchema?: bedrock_AgentAgentActionGroupFunctionSchema;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'skipResourceInUseCheck',
        'Whether the in-use check is skipped when deleting the action group.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'actionGroupState',
        'Whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request. Valid values: `ENABLED`, `DISABLED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'agentVersion',
        'Version of the agent for which to create the action group. Valid values: `DRAFT`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the action group.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'functionSchema',
        'Describes the function schema for the action group.\nEach function represents an action in an action group.\nSee `function_schema` Block for details.',
        () => bedrock_AgentAgentActionGroupFunctionSchema_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'agentId',
        'The unique identifier of the agent for which to create the action group.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'parentActionGroupSignature',
        'To allow your agent to request the user for additional information when trying to complete a task, set this argument to `AMAZON.UserInput`. You must leave the `description`, `api_schema`, and `action_group_executor` arguments blank for this action group. Valid values: `AMAZON.UserInput`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'apiSchema',
        'Either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html). See `api_schema` Block for details.',
        () => bedrock_AgentAgentActionGroupApiSchema_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'actionGroupExecutor',
        'ARN of the Lambda function containing the business logic that is carried out upon invoking the action or custom control method for handling the information elicited from the user. See `action_group_executor` Block for details.\n\nThe following arguments are optional:',
        () => bedrock_AgentAgentActionGroupActionGroupExecutor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'actionGroupName',
        'Name of the action group.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
