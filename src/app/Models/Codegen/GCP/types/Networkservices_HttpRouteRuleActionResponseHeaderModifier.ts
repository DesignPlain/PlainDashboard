import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_HttpRouteRuleActionResponseHeaderModifier {
  // Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.
  Set?: Map<string, string>;

  // Add the headers with given map where key is the name of the header, value is the value of the header.
  Add?: Map<string, string>;

  // Remove headers (matching by header names) specified in the list.
  Removes?: Array<string>;
}

export function Networkservices_HttpRouteRuleActionResponseHeaderModifier_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Set",
      "Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Add",
      "Add the headers with given map where key is the name of the header, value is the value of the header.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Removes",
      "Remove headers (matching by header names) specified in the list.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
