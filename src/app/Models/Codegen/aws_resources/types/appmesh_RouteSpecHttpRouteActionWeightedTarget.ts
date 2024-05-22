import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_RouteSpecHttpRouteActionWeightedTarget {
  // The targeted port of the weighted object.
  port?: number;

  // Virtual node to associate with the weighted target. Must be between 1 and 255 characters in length.
  virtualNode?: string;

  // Relative weight of the weighted target. An integer between 0 and 100.
  weight?: number;
}

export function appmesh_RouteSpecHttpRouteActionWeightedTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "virtualNode",
      "Virtual node to associate with the weighted target. Must be between 1 and 255 characters in length.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Relative weight of the weighted target. An integer between 0 and 100.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The targeted port of the weighted object.",
      [],
      false,
      false,
    ),
  ];
}
