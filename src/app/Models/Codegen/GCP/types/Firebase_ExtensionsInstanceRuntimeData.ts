import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_ExtensionsInstanceRuntimeDataFatalError,
  Firebase_ExtensionsInstanceRuntimeDataFatalError_GetTypes,
} from "./Firebase_ExtensionsInstanceRuntimeDataFatalError";
import {
  Firebase_ExtensionsInstanceRuntimeDataProcessingState,
  Firebase_ExtensionsInstanceRuntimeDataProcessingState_GetTypes,
} from "./Firebase_ExtensionsInstanceRuntimeDataProcessingState";

export interface Firebase_ExtensionsInstanceRuntimeData {
  /*
The fatal error state for the extension instance
Structure is documented below.
*/
  FatalError?: Firebase_ExtensionsInstanceRuntimeDataFatalError;

  /*
The processing state for the extension instance
Structure is documented below.
*/
  ProcessingState?: Firebase_ExtensionsInstanceRuntimeDataProcessingState;

  // The time of the last state update.
  StateUpdateTime?: string;
}

export function Firebase_ExtensionsInstanceRuntimeData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ProcessingState",
      "The processing state for the extension instance\nStructure is documented below.",
      Firebase_ExtensionsInstanceRuntimeDataProcessingState_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StateUpdateTime",
      "The time of the last state update.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FatalError",
      "The fatal error state for the extension instance\nStructure is documented below.",
      Firebase_ExtensionsInstanceRuntimeDataFatalError_GetTypes(),
      false,
      false,
    ),
  ];
}
