import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_RouteSpecHttp2RouteMatchHeaderMatchRange {
  // End of the range.
  end?: number;

  // Start of the range.
  start?: number;
}

export function appmesh_RouteSpecHttp2RouteMatchHeaderMatchRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "end",
      "End of the range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "start",
      "Start of the range.",
      [],
      true,
      false,
    ),
  ];
}
