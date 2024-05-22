import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  beyondcorp_AppGatewayAllocatedConnection,
  beyondcorp_AppGatewayAllocatedConnection_GetTypes,
} from "../types/beyondcorp_AppGatewayAllocatedConnection";

export interface AppGatewayArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the AppGateway.
  region?: string;

  /*
The type of network connectivity used by the AppGateway.
Default value is `TYPE_UNSPECIFIED`.
Possible values are: `TYPE_UNSPECIFIED`, `TCP_PROXY`.
*/
  type?: string;

  // An arbitrary user-provided name for the AppGateway.
  displayName?: string;

  /*
The type of hosting used by the AppGateway.
Default value is `HOST_TYPE_UNSPECIFIED`.
Possible values are: `HOST_TYPE_UNSPECIFIED`, `GCP_REGIONAL_MIG`.
*/
  hostType?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
ID of the AppGateway.


- - -
*/
  name?: string;
}
export class AppGateway extends Resource {
  // Server-defined URI for this resource.
  public uri?: string;

  /*
A list of connections allocated for the Gateway.
Structure is documented below.
*/
  public allocatedConnections?: Array<beyondcorp_AppGatewayAllocatedConnection>;

  // An arbitrary user-provided name for the AppGateway.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
ID of the AppGateway.


- - -
*/
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Represents the different states of a AppGateway.
  public state?: string;

  /*
The type of network connectivity used by the AppGateway.
Default value is `TYPE_UNSPECIFIED`.
Possible values are: `TYPE_UNSPECIFIED`, `TCP_PROXY`.
*/
  public type?: string;

  /*
The type of hosting used by the AppGateway.
Default value is `HOST_TYPE_UNSPECIFIED`.
Possible values are: `HOST_TYPE_UNSPECIFIED`, `GCP_REGIONAL_MIG`.
*/
  public hostType?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of the AppGateway.
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of network connectivity used by the AppGateway.\nDefault value is `TYPE_UNSPECIFIED`.\nPossible values are: `TYPE_UNSPECIFIED`, `TCP_PROXY`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "An arbitrary user-provided name for the AppGateway.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostType",
        "The type of hosting used by the AppGateway.\nDefault value is `HOST_TYPE_UNSPECIFIED`.\nPossible values are: `HOST_TYPE_UNSPECIFIED`, `GCP_REGIONAL_MIG`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "ID of the AppGateway.\n\n\n- - -",
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
        InputType.String,
        "region",
        "The region of the AppGateway.",
        [],
        false,
        true,
      ),
    ];
  }
}
