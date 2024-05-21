import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface firebase_ExtensionsInstanceRuntimeDataProcessingState {
  /*
Details about the processing. e.g. This could include the type of
processing in progress or it could list errors or failures.
This information will be shown in the console on the detail page
for the extension instance.
*/
  detailMessage?: string;

  // The processing state of the extension instance.
  state?: string;
}

export function firebase_ExtensionsInstanceRuntimeDataProcessingState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "detailMessage",
      "Details about the processing. e.g. This could include the type of\nprocessing in progress or it could list errors or failures.\nThis information will be shown in the console on the detail page\nfor the extension instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The processing state of the extension instance.",
      [],
      false,
      false,
    ),
  ];
}
