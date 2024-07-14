import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_RouteSpecHttpRouteMatchPath {
  // Header value sent by the client must match the specified value exactly.
  exact?: string;

  // Header value sent by the client must include the specified characters.
  regex?: string;
}

export function appmesh_RouteSpecHttpRouteMatchPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "exact",
      "Header value sent by the client must match the specified value exactly.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regex",
      "Header value sent by the client must include the specified characters.",
      [],
      false,
      false,
    ),
  ];
}
