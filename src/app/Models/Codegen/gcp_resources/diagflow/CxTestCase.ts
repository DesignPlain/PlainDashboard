import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_CxTestCaseTestConfig,
  diagflow_CxTestCaseTestConfig_GetTypes,
} from "../types/diagflow_CxTestCaseTestConfig";
import {
  diagflow_CxTestCaseLastTestResult,
  diagflow_CxTestCaseLastTestResult_GetTypes,
} from "../types/diagflow_CxTestCaseLastTestResult";
import {
  diagflow_CxTestCaseTestCaseConversationTurn,
  diagflow_CxTestCaseTestCaseConversationTurn_GetTypes,
} from "../types/diagflow_CxTestCaseTestCaseConversationTurn";

export interface CxTestCaseArgs {
  /*
The agent to create the test case for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  parent?: string;

  /*
Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.
Each tag should start with "#" and has a limit of 30 characters
*/
  tags?: Array<string>;

  /*
The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
Structure is documented below.
*/
  testCaseConversationTurns?: Array<diagflow_CxTestCaseTestCaseConversationTurn>;

  /*
Config for the test case.
Structure is documented below.
*/
  testConfig?: diagflow_CxTestCaseTestConfig;

  /*
The human-readable name of the test case, unique within the agent. Limit of 200 characters.


- - -
*/
  displayName?: string;

  // Additional freeform notes about the test case. Limit of 400 characters.
  notes?: string;
}
export class CxTestCase extends Resource {
  /*
The latest test result.
Structure is documented below.
*/
  public lastTestResults?: Array<diagflow_CxTestCaseLastTestResult>;

  /*
The unique identifier of the page.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  public name?: string;

  // Additional freeform notes about the test case. Limit of 400 characters.
  public notes?: string;

  /*
The agent to create the test case for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public parent?: string;

  /*
The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
Structure is documented below.
*/
  public testCaseConversationTurns?: Array<diagflow_CxTestCaseTestCaseConversationTurn>;

  /*
Config for the test case.
Structure is documented below.
*/
  public testConfig?: diagflow_CxTestCaseTestConfig;

  // When the test was created. A timestamp in RFC3339 text format.
  public creationTime?: string;

  /*
The human-readable name of the test case, unique within the agent. Limit of 200 characters.


- - -
*/
  public displayName?: string;

  /*
Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.
Each tag should start with "#" and has a limit of 30 characters
*/
  public tags?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "testCaseConversationTurns",
        "The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.\nStructure is documented below.",
        diagflow_CxTestCaseTestCaseConversationTurn_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "testConfig",
        "Config for the test case.\nStructure is documented below.",
        diagflow_CxTestCaseTestConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The human-readable name of the test case, unique within the agent. Limit of 200 characters.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "notes",
        "Additional freeform notes about the test case. Limit of 400 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The agent to create the test case for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tags",
        'Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.\nEach tag should start with "#" and has a limit of 30 characters',
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
