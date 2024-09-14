import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_RouteSpecHttp2RouteMatchPath {
  // The exact path to match on.
  exact?: string;

  // The regex used to match the path.
  regex?: string;
}

export function appmesh_RouteSpecHttp2RouteMatchPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "exact",
      "The exact path to match on.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regex",
      "The regex used to match the path.",
      () => [],
      false,
      false,
    ),
  ];
}
