import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction,
  bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction_GetTypes,
} from "./bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction";

export interface bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions {
  // Functions that each define an action in the action group. See `functions` Block for details.
  functions?: Array<bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction>;
}

export function bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "functions",
      "Functions that each define an action in the action group. See `functions` Block for details.",
      () =>
        bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction_GetTypes(),
      false,
      false,
    ),
  ];
}
