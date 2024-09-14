import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssm_DocumentParameter {
  // If specified, the default values for the parameters. Parameters without a default value are required. Parameters with a default value are optional.
  defaultValue?: string;

  // A description of what the parameter does, how to use it, the default value, and whether or not the parameter is optional.
  description?: string;

  // The name of the document.
  name?: string;

  // The type of parameter. Valid values: `String`, `StringList`.
  type?: string;
}

export function ssm_DocumentParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "A description of what the parameter does, how to use it, the default value, and whether or not the parameter is optional.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the document.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of parameter. Valid values: `String`, `StringList`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultValue",
      "If specified, the default values for the parameters. Parameters without a default value are required. Parameters with a default value are optional.",
      () => [],
      false,
      false,
    ),
  ];
}
