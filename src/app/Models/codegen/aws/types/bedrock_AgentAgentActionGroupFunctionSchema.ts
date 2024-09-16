import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions,
  bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions_GetTypes,
} from './bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions';

export interface bedrock_AgentAgentActionGroupFunctionSchema {
  /*
Contains a list of functions.
Each function describes and action in the action group.
See `member_functions` Block for details.
*/
  memberFunctions?: bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions;
}

export function bedrock_AgentAgentActionGroupFunctionSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'memberFunctions',
      'Contains a list of functions.\nEach function describes and action in the action group.\nSee `member_functions` Block for details.',
      () =>
        bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions_GetTypes(),
      false,
      false,
    ),
  ];
}
