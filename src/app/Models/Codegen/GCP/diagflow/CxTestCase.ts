import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CxTestCaseTestCaseConversationTurn } from "../types/CxTestCaseTestCaseConversationTurn";
import { CxTestCaseTestConfig } from "../types/CxTestCaseTestConfig";
import { CxTestCaseLastTestResult } from "../types/CxTestCaseLastTestResult";

export interface CxTestCaseArgs {
  /*
The human-readable name of the test case, unique within the agent. Limit of 200 characters.


- - -
*/
  DisplayName?: string;

  // Additional freeform notes about the test case. Limit of 400 characters.
  Notes?: string;

  /*
The agent to create the test case for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  Parent?: string;

  /*
Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.
Each tag should start with "#" and has a limit of 30 characters
*/
  Tags?: Array<string>;

  /*
The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
Structure is documented below.
*/
  TestCaseConversationTurns?: Array<CxTestCaseTestCaseConversationTurn>;

  /*
Config for the test case.
Structure is documented below.
*/
  TestConfig?: CxTestCaseTestConfig;
}
export class CxTestCase extends Resource {
  // When the test was created. A timestamp in RFC3339 text format.
  public CreationTime?: string;

  // Additional freeform notes about the test case. Limit of 400 characters.
  public Notes?: string;

  /*
The human-readable name of the test case, unique within the agent. Limit of 200 characters.


- - -
*/
  public DisplayName?: string;

  /*
The latest test result.
Structure is documented below.
*/
  public LastTestResults?: Array<CxTestCaseLastTestResult>;

  /*
The unique identifier of the page.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  public Name?: string;

  /*
The agent to create the test case for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public Parent?: string;

  /*
Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.
Each tag should start with "#" and has a limit of 30 characters
*/
  public Tags?: Array<string>;

  /*
The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
Structure is documented below.
*/
  public TestCaseConversationTurns?: Array<CxTestCaseTestCaseConversationTurn>;

  /*
Config for the test case.
Structure is documented below.
*/
  public TestConfig?: CxTestCaseTestConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the test case, unique within the agent. Limit of 200 characters.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Notes",
        "Additional freeform notes about the test case. Limit of 400 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The agent to create the test case for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tags",
        'Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.\nEach tag should start with "#" and has a limit of 30 characters',
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TestCaseConversationTurns",
        "The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TestConfig",
        "Config for the test case.\nStructure is documented below.",
      ),
    ];
  }
}
