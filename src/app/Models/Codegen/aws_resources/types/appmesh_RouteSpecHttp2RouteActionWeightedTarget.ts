import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_RouteSpecHttp2RouteActionWeightedTarget {
  // Relative weight of the weighted target. An integer between 0 and 100.
  weight?: number;

  // The targeted port of the weighted object.
  port?: number;

  // Virtual node to associate with the weighted target. Must be between 1 and 255 characters in length.
  virtualNode?: string;
}

export function appmesh_RouteSpecHttp2RouteActionWeightedTarget_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.String,
      "virtualNode",
      "Virtual node to associate with the weighted target. Must be between 1 and 255 characters in length.",
      [],
      true,
      false,
    ),
  ];
}
