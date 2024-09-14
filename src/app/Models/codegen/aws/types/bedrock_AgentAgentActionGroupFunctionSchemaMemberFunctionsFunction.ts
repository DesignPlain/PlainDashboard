import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter,
  bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter_GetTypes,
} from "./bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter";

export interface bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction {
  // Description of the function and its purpose.
  description?: string;

  // Name for the function.
  name?: string;

  // Parameters that the agent elicits from the user to fulfill the function. See `parameters` Block for details.
  parameters?: Array<bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter>;
}

export function bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the function and its purpose.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name for the function.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "Parameters that the agent elicits from the user to fulfill the function. See `parameters` Block for details.",
      () =>
        bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
