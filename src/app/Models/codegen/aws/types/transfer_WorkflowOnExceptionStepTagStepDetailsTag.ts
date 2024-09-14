import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface transfer_WorkflowOnExceptionStepTagStepDetailsTag {
  //
  key?: string;

  // The value that corresponds to the key.
  value?: string;
}

export function transfer_WorkflowOnExceptionStepTagStepDetailsTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "key", "", () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value that corresponds to the key.",
      () => [],
      true,
      true,
    ),
  ];
}
