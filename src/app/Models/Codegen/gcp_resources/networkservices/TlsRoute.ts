import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_TlsRouteRule,
  networkservices_TlsRouteRule_GetTypes,
} from "../types/networkservices_TlsRouteRule";

export interface TlsRouteArgs {
  /*
Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  gateways?: Array<string>;

  /*
Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR
*/
  meshes?: Array<string>;

  // Name of the TlsRoute resource.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  rules?: Array<networkservices_TlsRouteRule>;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;
}
export class TlsRoute extends Resource {
  // Time the TlsRoute was created in UTC.
  public createTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  /*
Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR
*/
  public meshes?: Array<string>;

  // Server-defined URL of this resource.
  public selfLink?: string;

  // Time the TlsRoute was updated in UTC.
  public updateTime?: string;

  /*
Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  public gateways?: Array<string>;

  // Name of the TlsRoute resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  public rules?: Array<networkservices_TlsRouteRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the TlsRoute resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "Rules that define how traffic is routed and handled.\nStructure is documented below.",
        networkservices_TlsRouteRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "gateways",
        "Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.\nEach gateway reference should match the pattern: projects/*/locations/global/gateways/<gateway_name>",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "meshes",
        "Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.\nEach mesh reference should match the pattern: projects/*/locations/global/meshes/<mesh_name>\nThe attached Mesh should be of a type SIDECAR",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
