import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxEntityTypeExcludedPhrase {
  // The word or phrase to be excluded.
  Value?: string;
}

export function Diagflow_CxEntityTypeExcludedPhrase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The word or phrase to be excluded.",
      [],
      false,
      false,
    ),
  ];
}
