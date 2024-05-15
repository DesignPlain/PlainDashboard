import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseTestCaseConversationTurn,
  Diagflow_CxTestCaseTestCaseConversationTurn_GetTypes,
} from "../types/Diagflow_CxTestCaseTestCaseConversationTurn";
import {
  Diagflow_CxTestCaseTestConfig,
  Diagflow_CxTestCaseTestConfig_GetTypes,
} from "../types/Diagflow_CxTestCaseTestConfig";
import {
  Diagflow_CxTestCaseLastTestResult,
  Diagflow_CxTestCaseLastTestResult_GetTypes,
} from "../types/Diagflow_CxTestCaseLastTestResult";

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
  TestCaseConversationTurns?: Array<Diagflow_CxTestCaseTestCaseConversationTurn>;

  /*
Config for the test case.
Structure is documented below.
*/
  TestConfig?: Diagflow_CxTestCaseTestConfig;
}
export class CxTestCase extends Resource {
  /*
The human-readable name of the test case, unique within the agent. Limit of 200 characters.


- - -
*/
  public DisplayName?: string;

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
The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
Structure is documented below.
*/
  public TestCaseConversationTurns?: Array<Diagflow_CxTestCaseTestCaseConversationTurn>;

  /*
Config for the test case.
Structure is documented below.
*/
  public TestConfig?: Diagflow_CxTestCaseTestConfig;

  // When the test was created. A timestamp in RFC3339 text format.
  public CreationTime?: string;

  /*
The latest test result.
Structure is documented below.
*/
  public LastTestResults?: Array<Diagflow_CxTestCaseLastTestResult>;

  // Additional freeform notes about the test case. Limit of 400 characters.
  public Notes?: string;

  /*
Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.
Each tag should start with "#" and has a limit of 30 characters
*/
  public Tags?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "Tags",
        'Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.\nEach tag should start with "#" and has a limit of 30 characters',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "TestCaseConversationTurns",
        "The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.\nStructure is documented below.",
        Diagflow_CxTestCaseTestCaseConversationTurn_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TestConfig",
        "Config for the test case.\nStructure is documented below.",
        Diagflow_CxTestCaseTestConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the test case, unique within the agent. Limit of 200 characters.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Notes",
        "Additional freeform notes about the test case. Limit of 400 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The agent to create the test case for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        [],
        false,
        true,
      ),
    ];
  }
}
