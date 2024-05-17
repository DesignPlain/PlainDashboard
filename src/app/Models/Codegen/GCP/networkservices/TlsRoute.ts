import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_TlsRouteRule,
  Networkservices_TlsRouteRule_GetTypes,
} from "../types/Networkservices_TlsRouteRule";

export interface TlsRouteArgs {
  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  Rules?: Array<Networkservices_TlsRouteRule>;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  /*
Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  Gateways?: Array<string>;

  /*
Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR
*/
  Meshes?: Array<string>;

  // Name of the TlsRoute resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class TlsRoute extends Resource {
  // Server-defined URL of this resource.
  public SelfLink?: string;

  // Time the TlsRoute was created in UTC.
  public CreateTime?: string;

  /*
Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  public Gateways?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  public Rules?: Array<Networkservices_TlsRouteRule>;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR
*/
  public Meshes?: Array<string>;

  // Name of the TlsRoute resource.
  public Name?: string;

  // Time the TlsRoute was updated in UTC.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the TlsRoute resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Rules",
        "Rules that define how traffic is routed and handled.\nStructure is documented below.",
        Networkservices_TlsRouteRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Gateways",
        "Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.\nEach gateway reference should match the pattern: projects/*/locations/global/gateways/<gateway_name>",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Meshes",
        "Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.\nEach mesh reference should match the pattern: projects/*/locations/global/meshes/<mesh_name>\nThe attached Mesh should be of a type SIDECAR",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
