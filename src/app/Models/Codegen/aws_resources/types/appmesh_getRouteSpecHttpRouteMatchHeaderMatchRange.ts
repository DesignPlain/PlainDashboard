import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange {
  //
  end?: number;

  //
  start?: number;
}

export function appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "end", "", [], true, false),
    new DynamicUIProps(InputType.Number, "start", "", [], true, false),
  ];
}
