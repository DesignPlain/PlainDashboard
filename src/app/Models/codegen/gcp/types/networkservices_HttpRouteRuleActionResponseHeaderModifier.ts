import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_HttpRouteRuleActionResponseHeaderModifier {
  // Add the headers with given map where key is the name of the header, value is the value of the header.
  add?: Map<string, string>;

  // Remove headers (matching by header names) specified in the list.
  removes?: Array<string>;

  // Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.
  set?: Map<string, string>;
}

export function networkservices_HttpRouteRuleActionResponseHeaderModifier_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "add",
      "Add the headers with given map where key is the name of the header, value is the value of the header.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "removes",
      "Remove headers (matching by header names) specified in the list.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "set",
      "Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
