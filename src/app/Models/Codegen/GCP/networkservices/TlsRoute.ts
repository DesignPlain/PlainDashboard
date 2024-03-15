import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TlsRouteRule } from "../types/TlsRouteRule";

export interface TlsRouteArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  Rules?: Array<TlsRouteRule>;

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
}
export class TlsRoute extends Resource {
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
  public Rules?: Array<TlsRouteRule>;

  // Time the TlsRoute was updated in UTC.
  public UpdateTime?: string;

  // Time the TlsRoute was created in UTC.
  public CreateTime?: string;

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

  // Server-defined URL of this resource.
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "Gateways",
        "Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.\nEach gateway reference should match the pattern: projects/*/locations/global/gateways/<gateway_name>",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Meshes",
        "Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.\nEach mesh reference should match the pattern: projects/*/locations/global/meshes/<mesh_name>\nThe attached Mesh should be of a type SIDECAR",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the TlsRoute resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Rules",
        "Rules that define how traffic is routed and handled.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
      ),
    ];
  }
}
