import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_URLMapHostRule {
  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  description?: string;

  /*
The list of host patterns to match. They must be valid hostnames, except - will
match any string of ([a-z0-9-.]-). In that case, - must be the first character
and must be followed in the pattern by either - or ..
*/
  hosts?: Array<string>;

  /*
The name of the PathMatcher to use to match the path portion of the URL if the
hostRule matches the URL's host portion.
*/
  pathMatcher?: string;
}

export function compute_URLMapHostRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of this resource. Provide this property when you create\nthe resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hosts",
      "The list of host patterns to match. They must be valid hostnames, except * will\nmatch any string of ([a-z0-9-.]*). In that case, * must be the first character\nand must be followed in the pattern by either - or ..",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathMatcher",
      "The name of the PathMatcher to use to match the path portion of the URL if the\nhostRule matches the URL's host portion.",
      () => [],
      true,
      false,
    ),
  ];
}
