import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentAgentAliasRoutingConfiguration,
  bedrock_AgentAgentAliasRoutingConfiguration_GetTypes,
} from '../types/bedrock_AgentAgentAliasRoutingConfiguration';
import {
  bedrock_AgentAgentAliasTimeouts,
  bedrock_AgentAgentAliasTimeouts_GetTypes,
} from '../types/bedrock_AgentAgentAliasTimeouts';

export interface AgentAgentAliasArgs {
  // Name of the alias.
  agentAliasName?: string;

  /*
Identifier of the agent to create an alias for.

The following arguments are optional:
*/
  agentId?: string;

  // Description of the alias.
  description?: string;

  // Details about the routing configuration of the alias. See `routing_configuration` Block for details.
  routingConfigurations?: Array<bedrock_AgentAgentAliasRoutingConfiguration>;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: bedrock_AgentAgentAliasTimeouts;
}
export class AgentAgentAlias extends DS_Resource {
  // Unique identifier of the alias.
  public agentAliasId?: string;

  // Name of the alias.
  public agentAliasName?: string;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: bedrock_AgentAgentAliasTimeouts;

  // ARN of the alias.
  public agentAliasArn?: string;

  /*
Identifier of the agent to create an alias for.

The following arguments are optional:
*/
  public agentId?: string;

  // Description of the alias.
  public description?: string;

  // Details about the routing configuration of the alias. See `routing_configuration` Block for details.
  public routingConfigurations?: Array<bedrock_AgentAgentAliasRoutingConfiguration>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the alias.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'routingConfigurations',
        'Details about the routing configuration of the alias. See `routing_configuration` Block for details.',
        () => bedrock_AgentAgentAliasRoutingConfiguration_GetTypes(),
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
        InputType.Object,
        'timeouts',
        '',
        () => bedrock_AgentAgentAliasTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'agentAliasName',
        'Name of the alias.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'agentId',
        'Identifier of the agent to create an alias for.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
    ];
  }
}
