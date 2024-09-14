import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getRouteSpecGrpcRouteTimeoutIdle,
  appmesh_getRouteSpecGrpcRouteTimeoutIdle_GetTypes,
} from "./appmesh_getRouteSpecGrpcRouteTimeoutIdle";
import {
  appmesh_getRouteSpecGrpcRouteTimeoutPerRequest,
  appmesh_getRouteSpecGrpcRouteTimeoutPerRequest_GetTypes,
} from "./appmesh_getRouteSpecGrpcRouteTimeoutPerRequest";

export interface appmesh_getRouteSpecGrpcRouteTimeout {
  //
  idles?: Array<appmesh_getRouteSpecGrpcRouteTimeoutIdle>;

  //
  perRequests?: Array<appmesh_getRouteSpecGrpcRouteTimeoutPerRequest>;
}

export function appmesh_getRouteSpecGrpcRouteTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "idles",
      "",
      () => appmesh_getRouteSpecGrpcRouteTimeoutIdle_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "perRequests",
      "",
      () => appmesh_getRouteSpecGrpcRouteTimeoutPerRequest_GetTypes(),
      true,
      false,
    ),
  ];
}
