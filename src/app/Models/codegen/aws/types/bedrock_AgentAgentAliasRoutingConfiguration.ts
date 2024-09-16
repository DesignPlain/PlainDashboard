import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_AgentAgentAliasRoutingConfiguration {
  // Version of the agent with which the alias is associated.
  agentVersion?: string;

  // ARN of the Provisioned Throughput assigned to the agent alias.
  provisionedThroughput?: string;
}

export function bedrock_AgentAgentAliasRoutingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'agentVersion',
      'Version of the agent with which the alias is associated.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'provisionedThroughput',
      'ARN of the Provisioned Throughput assigned to the agent alias.',
      () => [],
      true,
      false,
    ),
  ];
}
