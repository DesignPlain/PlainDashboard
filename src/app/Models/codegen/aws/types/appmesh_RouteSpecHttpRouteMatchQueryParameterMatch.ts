import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_RouteSpecHttpRouteMatchQueryParameterMatch {
  // The exact query parameter to match on.
  exact?: string;
}

export function appmesh_RouteSpecHttpRouteMatchQueryParameterMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "exact",
      "The exact query parameter to match on.",
      () => [],
      false,
      false,
    ),
  ];
}
