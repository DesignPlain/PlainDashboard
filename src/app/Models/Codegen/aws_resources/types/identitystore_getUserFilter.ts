import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface identitystore_getUserFilter {
  // Attribute path that is used to specify which attribute name to search. Currently, `UserName` is the only valid attribute path.
  attributePath?: string;

  // Value for an attribute.
  attributeValue?: string;
}

export function identitystore_getUserFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "attributePath",
      "Attribute path that is used to specify which attribute name to search. Currently, `UserName` is the only valid attribute path.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "attributeValue",
      "Value for an attribute.",
      [],
      true,
      false,
    ),
  ];
}
