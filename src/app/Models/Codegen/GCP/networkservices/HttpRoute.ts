import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { HttpRouteRule } from "../types/HttpRouteRule";

export interface HttpRouteArgs {
  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  /*
Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  Gateways?: Array<string>;

  // Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.
  Hostnames?: Array<string>;

  /*
Set of label tags associated with the HttpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.
*/
  Meshes?: Array<string>;

  // Name of the HttpRoute resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  Rules?: Array<HttpRouteRule>;
}
export class HttpRoute extends Resource {
  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  public Gateways?: Array<string>;

  /*
Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.
*/
  public Meshes?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  public Rules?: Array<HttpRouteRule>;

  // Time the HttpRoute was updated in UTC.
  public UpdateTime?: string;

  // Time the HttpRoute was created in UTC.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.
  public Hostnames?: Array<string>;

  /*
Set of label tags associated with the HttpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the HttpRoute resource.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Server-defined URL of this resource.
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the HttpRoute resource.",
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
      new DynamicUIProps(
        InputType.DropDown,
        "Gateways",
        "Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.\nEach gateway reference should match the pattern: projects/*/locations/global/gateways/<gateway_name>",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Hostnames",
        "Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Set of label tags associated with the HttpRoute resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Meshes",
        "Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.\nEach mesh reference should match the pattern: projects/*/locations/global/meshes/<mesh_name>.\nThe attached Mesh should be of a type SIDECAR.",
      ),
    ];
  }
}
