import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurn,
  Diagflow_CxTestCaseLastTestResultConversationTurn_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurn";

export interface Diagflow_CxTestCaseLastTestResult {
  /*
The conversation turns uttered during the test case replay in chronological order.
Structure is documented below.
*/
  ConversationTurns?: Array<Diagflow_CxTestCaseLastTestResultConversationTurn>;

  // Environment where the test was run. If not set, it indicates the draft environment.
  Environment?: string;

  /*
The unique identifier of the page.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  Name?: string;

  /*
Whether the test case passed in the agent environment.
- PASSED: The test passed.
- FAILED: The test did not pass.
Possible values are: `PASSED`, `FAILED`.
*/
  TestResult?: string;

  // The time that the test was run. A timestamp in RFC3339 text format.
  TestTime?: string;
}

export function Diagflow_CxTestCaseLastTestResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ConversationTurns",
      "The conversation turns uttered during the test case replay in chronological order.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Environment",
      "Environment where the test was run. If not set, it indicates the draft environment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The unique identifier of the page.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TestResult",
      "Whether the test case passed in the agent environment.\n* PASSED: The test passed.\n* FAILED: The test did not pass.\nPossible values are: `PASSED`, `FAILED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TestTime",
      "The time that the test was run. A timestamp in RFC3339 text format.",
      [],
      false,
      false,
    ),
  ];
}
