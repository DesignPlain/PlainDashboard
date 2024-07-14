import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getRouteSpecHttpRouteMatchPath {
  //
  exact?: string;

  //
  regex?: string;
}

export function appmesh_getRouteSpecHttpRouteMatchPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "exact", "", [], true, false),
    new DynamicUIProps(InputType.String, "regex", "", [], true, false),
  ];
}
