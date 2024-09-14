import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkservices_GrpcRouteRule,
  networkservices_GrpcRouteRule_GetTypes,
} from "../types/networkservices_GrpcRouteRule";

export interface GrpcRouteArgs {
  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  rules?: Array<networkservices_GrpcRouteRule>;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  // List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.
  gateways?: Array<string>;

  // Required. Service hostnames with an optional port for which this route describes traffic.
  hostnames?: Array<string>;

  /*
Set of label tags associated with the GrpcRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.
  meshes?: Array<string>;

  // Name of the GrpcRoute resource.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class GrpcRoute extends DS_Resource {
  // Time the GrpcRoute was created in UTC.
  public createTime?: string;

  // List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.
  public gateways?: Array<string>;

  // Required. Service hostnames with an optional port for which this route describes traffic.
  public hostnames?: Array<string>;

  // List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.
  public meshes?: Array<string>;

  // Server-defined URL of this resource.
  public selfLink?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  public rules?: Array<networkservices_GrpcRouteRule>;

  // Time the GrpcRoute was updated in UTC.
  public updateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the GrpcRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Name of the GrpcRoute resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "gateways",
        "List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "hostnames",
        "Required. Service hostnames with an optional port for which this route describes traffic.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the GrpcRoute resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "meshes",
        "List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the GrpcRoute resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "Rules that define how traffic is routed and handled.\nStructure is documented below.",
        () => networkservices_GrpcRouteRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
