import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionUrlMapHostRule {
  /*
The list of host patterns to match. They must be valid
hostnames, except - will match any string of ([a-z0-9-.]-). In
that case, - must be the first character and must be followed in
the pattern by either - or ..
*/
  Hosts?: Array<string>;

  /*
The name of the PathMatcher to use to match the path portion of
the URL if the hostRule matches the URL's host portion.
*/
  PathMatcher?: string;

  /*
An optional description of this HostRule. Provide this property
when you create the resource.
*/
  Description?: string;
}

export function Compute_RegionUrlMapHostRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Hosts",
      "The list of host patterns to match. They must be valid\nhostnames, except * will match any string of ([a-z0-9-.]*). In\nthat case, * must be the first character and must be followed in\nthe pattern by either - or ..",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PathMatcher",
      "The name of the PathMatcher to use to match the path portion of\nthe URL if the hostRule matches the URL's host portion.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of this HostRule. Provide this property\nwhen you create the resource.",
      [],
      false,
      false,
    ),
  ];
}
