import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_GrpcRouteRule,
  Networkservices_GrpcRouteRule_GetTypes,
} from "../types/Networkservices_GrpcRouteRule";

export interface GrpcRouteArgs {
  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  Rules?: Array<Networkservices_GrpcRouteRule>;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  // List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.
  Gateways?: Array<string>;

  // Required. Service hostnames with an optional port for which this route describes traffic.
  Hostnames?: Array<string>;

  /*
Set of label tags associated with the GrpcRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.
  Meshes?: Array<string>;

  // Name of the GrpcRoute resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class GrpcRoute extends Resource {
  // Server-defined URL of this resource.
  public SelfLink?: string;

  // Time the GrpcRoute was updated in UTC.
  public UpdateTime?: string;

  // List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.
  public Gateways?: Array<string>;

  /*
Set of label tags associated with the GrpcRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.
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
  public Rules?: Array<Networkservices_GrpcRouteRule>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Time the GrpcRoute was created in UTC.
  public CreateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Required. Service hostnames with an optional port for which this route describes traffic.
  public Hostnames?: Array<string>;

  // Name of the GrpcRoute resource.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Hostnames",
        "Required. Service hostnames with an optional port for which this route describes traffic.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Set of label tags associated with the GrpcRoute resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Meshes",
        "List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the GrpcRoute resource.",
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
        Networkservices_GrpcRouteRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
