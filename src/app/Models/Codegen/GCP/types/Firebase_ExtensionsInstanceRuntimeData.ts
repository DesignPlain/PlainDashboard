import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  firebase_ExtensionsInstanceRuntimeDataFatalError,
  firebase_ExtensionsInstanceRuntimeDataFatalError_GetTypes,
} from "./firebase_ExtensionsInstanceRuntimeDataFatalError";
import {
  firebase_ExtensionsInstanceRuntimeDataProcessingState,
  firebase_ExtensionsInstanceRuntimeDataProcessingState_GetTypes,
} from "./firebase_ExtensionsInstanceRuntimeDataProcessingState";

export interface firebase_ExtensionsInstanceRuntimeData {
  /*
The fatal error state for the extension instance
Structure is documented below.
*/
  fatalError?: firebase_ExtensionsInstanceRuntimeDataFatalError;

  /*
The processing state for the extension instance
Structure is documented below.
*/
  processingState?: firebase_ExtensionsInstanceRuntimeDataProcessingState;

  // The time of the last state update.
  stateUpdateTime?: string;
}

export function firebase_ExtensionsInstanceRuntimeData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fatalError",
      "The fatal error state for the extension instance\nStructure is documented below.",
      firebase_ExtensionsInstanceRuntimeDataFatalError_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "processingState",
      "The processing state for the extension instance\nStructure is documented below.",
      firebase_ExtensionsInstanceRuntimeDataProcessingState_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stateUpdateTime",
      "The time of the last state update.",
      [],
      false,
      false,
    ),
  ];
}
