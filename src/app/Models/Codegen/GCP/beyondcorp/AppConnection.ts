import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AppConnectionApplicationEndpoint } from "../types/AppConnectionApplicationEndpoint";
import { AppConnectionGateway } from "../types/AppConnectionGateway";

export interface AppConnectionArgs {
  // List of AppConnectors that are authorised to be associated with this AppConnection
  Connectors?: Array<string>;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The type of network connectivity used by the AppConnection. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
for a list of possible values.
*/
  Type?: string;

  /*
Address of the remote application endpoint for the BeyondCorp AppConnection.
Structure is documented below.
*/
  ApplicationEndpoint?: AppConnectionApplicationEndpoint;

  // An arbitrary user-provided name for the AppConnection.
  DisplayName?: string;

  /*
Gateway used by the AppConnection.
Structure is documented below.
*/
  Gateway?: AppConnectionGateway;

  // ID of the AppConnection.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the AppConnection.
  Region?: string;
}
export class AppConnection extends Resource {
  // An arbitrary user-provided name for the AppConnection.
  public DisplayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // ID of the AppConnection.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Address of the remote application endpoint for the BeyondCorp AppConnection.
Structure is documented below.
*/
  public ApplicationEndpoint?: AppConnectionApplicationEndpoint;

  // List of AppConnectors that are authorised to be associated with this AppConnection
  public Connectors?: Array<string>;

  // The region of the AppConnection.
  public Region?: string;

  /*
The type of network connectivity used by the AppConnection. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
for a list of possible values.
*/
  public Type?: string;

  /*
Gateway used by the AppConnection.
Structure is documented below.
*/
  public Gateway?: AppConnectionGateway;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Gateway",
        "Gateway used by the AppConnection.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Name", "ID of the AppConnection."),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the AppConnection.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Connectors",
        "List of AppConnectors that are authorised to be associated with this AppConnection",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of network connectivity used by the AppConnection. Refer to\nhttps://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type\nfor a list of possible values.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApplicationEndpoint",
        "Address of the remote application endpoint for the BeyondCorp AppConnection.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "An arbitrary user-provided name for the AppConnection.",
      ),
    ];
  }
}
