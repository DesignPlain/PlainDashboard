import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  storage_TransferAgentPoolBandwidthLimit,
  storage_TransferAgentPoolBandwidthLimit_GetTypes,
} from "../types/storage_TransferAgentPoolBandwidthLimit";

export interface TransferAgentPoolArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.
Structure is documented below.
*/
  bandwidthLimit?: storage_TransferAgentPoolBandwidthLimit;

  // Specifies the client-specified AgentPool description.
  displayName?: string;

  /*
The ID of the agent pool to create.
The agentPoolId must meet the following requirements:
- Length of 128 characters or less.
- Not start with the string goog.
- Start with a lowercase ASCII character, followed by:
- Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
- One or more numerals or lowercase ASCII characters.
As expressed by the regular expression: ^(?!goog)a-z?$.


- - -
*/
  name?: string;
}
export class TransferAgentPool extends DS_Resource {
  /*
The ID of the agent pool to create.
The agentPoolId must meet the following requirements:
- Length of 128 characters or less.
- Not start with the string goog.
- Start with a lowercase ASCII character, followed by:
- Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
- One or more numerals or lowercase ASCII characters.
As expressed by the regular expression: ^(?!goog)a-z?$.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Specifies the state of the AgentPool.
  public state?: string;

  /*
Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.
Structure is documented below.
*/
  public bandwidthLimit?: storage_TransferAgentPoolBandwidthLimit;

  // Specifies the client-specified AgentPool description.
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bandwidthLimit",
        "Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.\nStructure is documented below.",
        () => storage_TransferAgentPoolBandwidthLimit_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Specifies the client-specified AgentPool description.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the agent pool to create.\nThe agentPoolId must meet the following requirements:\n* Length of 128 characters or less.\n* Not start with the string goog.\n* Start with a lowercase ASCII character, followed by:\n* Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).\n* One or more numerals or lowercase ASCII characters.\nAs expressed by the regular expression: ^(?!goog)a-z?$.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
    ];
  }
}
