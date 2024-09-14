import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface diagflow_CxEntityTypeExcludedPhrase {
  // The word or phrase to be excluded.
  value?: string;
}

export function diagflow_CxEntityTypeExcludedPhrase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The word or phrase to be excluded.",
      () => [],
      false,
      false,
    ),
  ];
}
