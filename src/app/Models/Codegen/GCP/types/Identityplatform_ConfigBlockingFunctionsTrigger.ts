import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ConfigBlockingFunctionsTrigger {
  // The identifier for this object. Format specified above.
  EventType?: string;

  // HTTP URI trigger for the Cloud Function.
  FunctionUri?: string;

  /*
(Output)
When the trigger was changed.
*/
  UpdateTime?: string;
}

export function Identityplatform_ConfigBlockingFunctionsTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EventType",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FunctionUri",
      "HTTP URI trigger for the Cloud Function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "(Output)\nWhen the trigger was changed.",
      [],
      false,
      false,
    ),
  ];
}
