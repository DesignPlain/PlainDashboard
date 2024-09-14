import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datazone_FormTypeImport {
  // Name of the form type. Must be the name of the structure in smithy document.
  name?: string;

  // Revision of the Form Type.
  revision?: string;
}

export function datazone_FormTypeImport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the form type. Must be the name of the structure in smithy document.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "Revision of the Form Type.",
      () => [],
      true,
      false,
    ),
  ];
}
