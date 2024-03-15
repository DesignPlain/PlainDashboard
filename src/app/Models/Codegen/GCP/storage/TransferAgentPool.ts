import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TransferAgentPoolBandwidthLimit } from "../types/TransferAgentPoolBandwidthLimit";

export interface TransferAgentPoolArgs {
  /*
Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.
Structure is documented below.
*/
  BandwidthLimit?: TransferAgentPoolBandwidthLimit;

  // Specifies the client-specified AgentPool description.
  DisplayName?: string;

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
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class TransferAgentPool extends Resource {
  // Specifies the state of the AgentPool.
  public State?: string;

  /*
Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.
Structure is documented below.
*/
  public BandwidthLimit?: TransferAgentPoolBandwidthLimit;

  // Specifies the client-specified AgentPool description.
  public DisplayName?: string;

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
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BandwidthLimit",
        "Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Specifies the client-specified AgentPool description.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the agent pool to create.\nThe agentPoolId must meet the following requirements:\n* Length of 128 characters or less.\n* Not start with the string goog.\n* Start with a lowercase ASCII character, followed by:\n* Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).\n* One or more numerals or lowercase ASCII characters.\nAs expressed by the regular expression: ^(?!goog)a-z?$.\n\n\n- - -",
      ),
    ];
  }
}
