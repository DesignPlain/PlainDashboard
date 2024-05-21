import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface firebase_ExtensionsInstanceRuntimeDataFatalError {
  /*
The error message. This is set by the extension developer to give
more detail on why the extension is unusable and must be re-installed
or reconfigured.
*/
  errorMessage?: string;
}

export function firebase_ExtensionsInstanceRuntimeDataFatalError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "errorMessage",
      "The error message. This is set by the extension developer to give\nmore detail on why the extension is unusable and must be re-installed\nor reconfigured.",
      [],
      false,
      false,
    ),
  ];
}
