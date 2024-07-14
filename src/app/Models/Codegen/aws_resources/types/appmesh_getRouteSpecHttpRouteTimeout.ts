import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecHttpRouteTimeoutPerRequest,
  appmesh_getRouteSpecHttpRouteTimeoutPerRequest_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteTimeoutPerRequest";
import {
  appmesh_getRouteSpecHttpRouteTimeoutIdle,
  appmesh_getRouteSpecHttpRouteTimeoutIdle_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteTimeoutIdle";

export interface appmesh_getRouteSpecHttpRouteTimeout {
  //
  perRequests?: Array<appmesh_getRouteSpecHttpRouteTimeoutPerRequest>;

  //
  idles?: Array<appmesh_getRouteSpecHttpRouteTimeoutIdle>;
}

export function appmesh_getRouteSpecHttpRouteTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "perRequests",
      "",
      appmesh_getRouteSpecHttpRouteTimeoutPerRequest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "idles",
      "",
      appmesh_getRouteSpecHttpRouteTimeoutIdle_GetTypes(),
      true,
      false,
    ),
  ];
}
