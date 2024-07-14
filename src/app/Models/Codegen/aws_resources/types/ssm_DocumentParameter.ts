import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssm_DocumentParameter {
  //
  defaultValue?: string;

  // The description of the document.
  description?: string;

  // The name of the document.
  name?: string;

  //
  type?: string;
}

export function ssm_DocumentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "defaultValue", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the document.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the document.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "type", "", [], false, false),
  ];
}
