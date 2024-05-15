import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Beyondcorp_AppConnectionApplicationEndpoint,
  Beyondcorp_AppConnectionApplicationEndpoint_GetTypes,
} from "../types/Beyondcorp_AppConnectionApplicationEndpoint";
import {
  Beyondcorp_AppConnectionGateway,
  Beyondcorp_AppConnectionGateway_GetTypes,
} from "../types/Beyondcorp_AppConnectionGateway";

export interface AppConnectionArgs {
  /*
Address of the remote application endpoint for the BeyondCorp AppConnection.
Structure is documented below.
*/
  ApplicationEndpoint?: Beyondcorp_AppConnectionApplicationEndpoint;

  // The region of the AppConnection.
  Region?: string;

  /*
The type of network connectivity used by the AppConnection. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
for a list of possible values.
*/
  Type?: string;

  // List of AppConnectors that are authorised to be associated with this AppConnection
  Connectors?: Array<string>;

  // An arbitrary user-provided name for the AppConnection.
  DisplayName?: string;

  /*
Gateway used by the AppConnection.
Structure is documented below.
*/
  Gateway?: Beyondcorp_AppConnectionGateway;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // ID of the AppConnection.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class AppConnection extends Resource {
  // An arbitrary user-provided name for the AppConnection.
  public DisplayName?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The region of the AppConnection.
  public Region?: string;

  /*
The type of network connectivity used by the AppConnection. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
for a list of possible values.
*/
  public Type?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Address of the remote application endpoint for the BeyondCorp AppConnection.
Structure is documented below.
*/
  public ApplicationEndpoint?: Beyondcorp_AppConnectionApplicationEndpoint;

  // List of AppConnectors that are authorised to be associated with this AppConnection
  public Connectors?: Array<string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Gateway used by the AppConnection.
Structure is documented below.
*/
  public Gateway?: Beyondcorp_AppConnectionGateway;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // ID of the AppConnection.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ApplicationEndpoint",
        "Address of the remote application endpoint for the BeyondCorp AppConnection.\nStructure is documented below.",
        Beyondcorp_AppConnectionApplicationEndpoint_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the AppConnection.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of network connectivity used by the AppConnection. Refer to\nhttps://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type\nfor a list of possible values.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "ID of the AppConnection.",
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
        "Connectors",
        "List of AppConnectors that are authorised to be associated with this AppConnection",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "An arbitrary user-provided name for the AppConnection.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Gateway",
        "Gateway used by the AppConnection.\nStructure is documented below.",
        Beyondcorp_AppConnectionGateway_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
