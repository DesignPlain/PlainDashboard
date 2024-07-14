import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout,
  appmesh_getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout_GetTypes,
} from "./appmesh_getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout";

export interface appmesh_getRouteSpecGrpcRouteRetryPolicy {
  //
  tcpRetryEvents?: Array<string>;

  //
  grpcRetryEvents?: Array<string>;

  //
  httpRetryEvents?: Array<string>;

  //
  maxRetries?: number;

  //
  perRetryTimeouts?: Array<appmesh_getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout>;
}

export function appmesh_getRouteSpecGrpcRouteRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpRetryEvents",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "maxRetries", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "perRetryTimeouts",
      "",
      appmesh_getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tcpRetryEvents",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "grpcRetryEvents",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
