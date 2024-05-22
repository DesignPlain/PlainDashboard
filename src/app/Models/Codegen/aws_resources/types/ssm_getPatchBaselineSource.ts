import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssm_getPatchBaselineSource {
  // Specific operating system versions a patch repository applies to.
  products?: Array<string>;

  // Value of the yum repo configuration.
  configuration?: string;

  // Name specified to identify the patch source.
  name?: string;
}

export function ssm_getPatchBaselineSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "products",
      "Specific operating system versions a patch repository applies to.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "configuration",
      "Value of the yum repo configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name specified to identify the patch source.",
      [],
      true,
      false,
    ),
  ];
}
