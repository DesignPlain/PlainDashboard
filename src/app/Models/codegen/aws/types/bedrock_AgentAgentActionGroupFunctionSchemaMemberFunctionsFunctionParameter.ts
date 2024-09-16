import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter {
  // Data type of the parameter. Valid values: `string`, `number`, `integer`, `boolean`, `array`.
  type?: string;

  // Description of the parameter. Helps the foundation model determine how to elicit the parameters from the user.
  description?: string;

  /*
Name of the parameter.

--Note:-- The argument name `map_block_key` may seem out of context, but is necessary for backward compatibility reasons in the provider.
*/
  mapBlockKey?: string;

  // Whether the parameter is required for the agent to complete the function for action group invocation.
  required?: boolean;
}

export function bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Data type of the parameter. Valid values: `string`, `number`, `integer`, `boolean`, `array`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of the parameter. Helps the foundation model determine how to elicit the parameters from the user.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mapBlockKey',
      'Name of the parameter.\n\n**Note:** The argument name `map_block_key` may seem out of context, but is necessary for backward compatibility reasons in the provider.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'required',
      'Whether the parameter is required for the agent to complete the function for action group invocation.',
      () => [],
      false,
      false,
    ),
  ];
}
