import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration,
  bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration_GetTypes,
} from './bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration';

export interface bedrock_getAgentAgentVersionsAgentVersionSummary {
  // Version of the agent.
  agentVersion?: string;

  // Time at which the version was created.
  createdAt?: string;

  /*
Description of the version of the agent.
- `GuardrailConfiguration` - Details aout the guardrail associated with the agent. See Guardrail Configuration
*/
  description?: string;

  //
  guardrailConfigurations?: Array<bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration>;

  // Time at which the version was last updated.
  updatedAt?: string;

  // Name of agent to which the version belongs.
  agentName?: string;

  // Status of the agent to which the version belongs.
  agentStatus?: string;
}

export function bedrock_getAgentAgentVersionsAgentVersionSummary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of the version of the agent.\n* `GuardrailConfiguration` - Details aout the guardrail associated with the agent. See Guardrail Configuration',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'guardrailConfigurations',
      '',
      () =>
        bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'updatedAt',
      'Time at which the version was last updated.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'agentName',
      'Name of agent to which the version belongs.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'agentStatus',
      'Status of the agent to which the version belongs.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'agentVersion',
      'Version of the agent.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'createdAt',
      'Time at which the version was created.',
      () => [],
      true,
      false,
    ),
  ];
}
