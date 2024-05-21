import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxTestCaseLastTestResultConversationTurn,
  diagflow_CxTestCaseLastTestResultConversationTurn_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurn";

export interface diagflow_CxTestCaseLastTestResult {
  /*
The conversation turns uttered during the test case replay in chronological order.
Structure is documented below.
*/
  conversationTurns?: Array<diagflow_CxTestCaseLastTestResultConversationTurn>;

  // Environment where the test was run. If not set, it indicates the draft environment.
  environment?: string;

  /*
The unique identifier of the page.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  name?: string;

  /*
Whether the test case passed in the agent environment.
- PASSED: The test passed.
- FAILED: The test did not pass.
Possible values are: `PASSED`, `FAILED`.
*/
  testResult?: string;

  // The time that the test was run. A timestamp in RFC3339 text format.
  testTime?: string;
}

export function diagflow_CxTestCaseLastTestResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "testResult",
      "Whether the test case passed in the agent environment.\n* PASSED: The test passed.\n* FAILED: The test did not pass.\nPossible values are: `PASSED`, `FAILED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "testTime",
      "The time that the test was run. A timestamp in RFC3339 text format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "conversationTurns",
      "The conversation turns uttered during the test case replay in chronological order.\nStructure is documented below.",
      diagflow_CxTestCaseLastTestResultConversationTurn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "environment",
      "Environment where the test was run. If not set, it indicates the draft environment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The unique identifier of the page.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.",
      [],
      false,
      false,
    ),
  ];
}
