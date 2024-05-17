import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxTestCaseTestConfig {
  /*
Flow name to start the test case with.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.
*/
  Flow?: string;

  /*
The page to start the test case with.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.
*/
  Page?: string;

  // Session parameters to be compared when calculating differences.
  TrackingParameters?: Array<string>;
}

export function Diagflow_CxTestCaseTestConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TrackingParameters",
      "Session parameters to be compared when calculating differences.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Flow",
      "Flow name to start the test case with.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.\nOnly one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Page",
      "The page to start the test case with.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.\nOnly one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.",
      [],
      false,
      false,
    ),
  ];
}
