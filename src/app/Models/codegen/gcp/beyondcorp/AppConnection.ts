import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  beyondcorp_AppConnectionApplicationEndpoint,
  beyondcorp_AppConnectionApplicationEndpoint_GetTypes,
} from "../types/beyondcorp_AppConnectionApplicationEndpoint";
import {
  beyondcorp_AppConnectionGateway,
  beyondcorp_AppConnectionGateway_GetTypes,
} from "../types/beyondcorp_AppConnectionGateway";

export interface AppConnectionArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Address of the remote application endpoint for the BeyondCorp AppConnection.
Structure is documented below.
*/
  applicationEndpoint?: beyondcorp_AppConnectionApplicationEndpoint;

  // ID of the AppConnection.
  name?: string;

  /*
Gateway used by the AppConnection.
Structure is documented below.
*/
  gateway?: beyondcorp_AppConnectionGateway;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The region of the AppConnection.
  region?: string;

  /*
The type of network connectivity used by the AppConnection. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
for a list of possible values.
*/
  type?: string;

  // List of AppConnectors that are authorised to be associated with this AppConnection
  connectors?: Array<string>;

  // An arbitrary user-provided name for the AppConnection.
  displayName?: string;
}
export class AppConnection extends DS_Resource {
  // ID of the AppConnection.
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

  /*
The type of network connectivity used by the AppConnection. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
for a list of possible values.
*/
  public type?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Gateway used by the AppConnection.
Structure is documented below.
*/
  public gateway?: beyondcorp_AppConnectionGateway;

  // An arbitrary user-provided name for the AppConnection.
  public displayName?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The region of the AppConnection.
  public region?: string;

  /*
Address of the remote application endpoint for the BeyondCorp AppConnection.
Structure is documented below.
*/
  public applicationEndpoint?: beyondcorp_AppConnectionApplicationEndpoint;

  // List of AppConnectors that are authorised to be associated with this AppConnection
  public connectors?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "connectors",
        "List of AppConnectors that are authorised to be associated with this AppConnection",
        () => InputType_String_GetTypes(),
        false,
        false,
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
        InputType.Object,
        "applicationEndpoint",
        "Address of the remote application endpoint for the BeyondCorp AppConnection.\nStructure is documented below.",
        () => beyondcorp_AppConnectionApplicationEndpoint_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region of the AppConnection.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of network connectivity used by the AppConnection. Refer to\nhttps://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type\nfor a list of possible values.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "An arbitrary user-provided name for the AppConnection.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "ID of the AppConnection.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gateway",
        "Gateway used by the AppConnection.\nStructure is documented below.",
        () => beyondcorp_AppConnectionGateway_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
