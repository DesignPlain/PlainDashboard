import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_RouteSpecHttpRouteMatchHeaderMatchRange {
  // End of the range.
  end?: number;

  // Start of the range.
  start?: number;
}

export function appmesh_RouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "end",
      "End of the range.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "start",
      "Start of the range.",
      () => [],
      true,
      false,
    ),
  ];
}
