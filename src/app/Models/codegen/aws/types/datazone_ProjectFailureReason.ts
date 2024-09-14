import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datazone_ProjectFailureReason {
  //
  code?: string;

  //
  message?: string;
}

export function datazone_ProjectFailureReason_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "code", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "message", "", () => [], true, false),
  ];
}
