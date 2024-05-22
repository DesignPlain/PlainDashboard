import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface rbin_RuleResourceTag {
  /*
The tag key.

The following argument is optional:
*/
  resourceTagKey?: string;

  // The tag value.
  resourceTagValue?: string;
}

export function rbin_RuleResourceTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceTagKey",
      "The tag key.\n\nThe following argument is optional:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceTagValue",
      "The tag value.",
      [],
      false,
      false,
    ),
  ];
}
