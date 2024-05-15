import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference {
  // A human readable description of the diff, showing the actual output vs expected output.
  Description?: string;

  /*
The type of diff.
- INTENT: The intent.
- PAGE: The page.
- PARAMETERS: The parameters.
- UTTERANCE: The message utterance.
- FLOW: The flow.
Possible values are: `INTENT`, `PAGE`, `PARAMETERS`, `UTTERANCE`, `FLOW`.
*/
  Type?: string;
}

export function Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputDifference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A human readable description of the diff, showing the actual output vs expected output.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of diff.\n* INTENT: The intent.\n* PAGE: The page.\n* PARAMETERS: The parameters.\n* UTTERANCE: The message utterance.\n* FLOW: The flow.\nPossible values are: `INTENT`, `PAGE`, `PARAMETERS`, `UTTERANCE`, `FLOW`.",
      [],
      false,
      false,
    ),
  ];
}
