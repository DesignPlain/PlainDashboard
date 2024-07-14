import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_RouteSpecGrpcRouteMatchMetadata,
  appmesh_RouteSpecGrpcRouteMatchMetadata_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteMatchMetadata";

export interface appmesh_RouteSpecGrpcRouteMatch {
  // Data to match from the gRPC request.
  metadatas?: Array<appmesh_RouteSpecGrpcRouteMatchMetadata>;

  // Method name to match from the request. If you specify a name, you must also specify a `service_name`.
  methodName?: string;

  // The port number to match from the request.
  port?: number;

  // Header value sent by the client must begin with the specified characters.
  prefix?: string;

  // Fully qualified domain name for the service to match from the request.
  serviceName?: string;
}

export function appmesh_RouteSpecGrpcRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metadatas",
      "Data to match from the gRPC request.",
      appmesh_RouteSpecGrpcRouteMatchMetadata_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "methodName",
      "Method name to match from the request. If you specify a name, you must also specify a `service_name`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number to match from the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Header value sent by the client must begin with the specified characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "Fully qualified domain name for the service to match from the request.",
      [],
      false,
      false,
    ),
  ];
}
