import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
      [],
      false,
      false,
    ),
  ];
}
