import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Beyondcorp_AppGatewayAllocatedConnection,
  Beyondcorp_AppGatewayAllocatedConnection_GetTypes,
} from "../types/Beyondcorp_AppGatewayAllocatedConnection";

export interface AppGatewayArgs {
  // An arbitrary user-provided name for the AppGateway.
  DisplayName?: string;

  /*
The type of hosting used by the AppGateway.
Default value is `HOST_TYPE_UNSPECIFIED`.
Possible values are: `HOST_TYPE_UNSPECIFIED`, `GCP_REGIONAL_MIG`.
*/
  HostType?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
ID of the AppGateway.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the AppGateway.
  Region?: string;

  /*
The type of network connectivity used by the AppGateway.
Default value is `TYPE_UNSPECIFIED`.
Possible values are: `TYPE_UNSPECIFIED`, `TCP_PROXY`.
*/
  Type?: string;
}
export class AppGateway extends Resource {
  /*
A list of connections allocated for the Gateway.
Structure is documented below.
*/
  public AllocatedConnections?: Array<Beyondcorp_AppGatewayAllocatedConnection>;

  /*
The type of hosting used by the AppGateway.
Default value is `HOST_TYPE_UNSPECIFIED`.
Possible values are: `HOST_TYPE_UNSPECIFIED`, `GCP_REGIONAL_MIG`.
*/
  public HostType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region of the AppGateway.
  public Region?: string;

  // Represents the different states of a AppGateway.
  public State?: string;

  /*
The type of network connectivity used by the AppGateway.
Default value is `TYPE_UNSPECIFIED`.
Possible values are: `TYPE_UNSPECIFIED`, `TCP_PROXY`.
*/
  public Type?: string;

  // An arbitrary user-provided name for the AppGateway.
  public DisplayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
ID of the AppGateway.


- - -
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Server-defined URI for this resource.
  public Uri?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "ID of the AppGateway.\n\n\n- - -",
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
        InputType.String,
        "Region",
        "The region of the AppGateway.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of network connectivity used by the AppGateway.\nDefault value is `TYPE_UNSPECIFIED`.\nPossible values are: `TYPE_UNSPECIFIED`, `TCP_PROXY`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "An arbitrary user-provided name for the AppGateway.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "HostType",
        "The type of hosting used by the AppGateway.\nDefault value is `HOST_TYPE_UNSPECIFIED`.\nPossible values are: `HOST_TYPE_UNSPECIFIED`, `GCP_REGIONAL_MIG`.",
        [],
        false,
        true,
      ),
    ];
  }
}
