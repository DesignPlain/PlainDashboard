import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface containeranalysis_NoteRelatedUrl {
  // Label to describe usage of the URL
  label?: string;

  // Specific URL associated with the resource.
  url?: string;
}

export function containeranalysis_NoteRelatedUrl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "label",
      "Label to describe usage of the URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "Specific URL associated with the resource.",
      [],
      true,
      false,
    ),
  ];
}
