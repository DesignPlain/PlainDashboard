import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  beyondcorp_AppConnectorPrincipalInfo,
  beyondcorp_AppConnectorPrincipalInfo_GetTypes,
} from "../types/beyondcorp_AppConnectorPrincipalInfo";

export interface AppConnectorArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the AppConnector.
  region?: string;

  // An arbitrary user-provided name for the AppConnector.
  displayName?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // ID of the AppConnector.
  name?: string;

  /*
Principal information about the Identity of the AppConnector.
Structure is documented below.
*/
  principalInfo?: beyondcorp_AppConnectorPrincipalInfo;
}
export class AppConnector extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // ID of the AppConnector.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Represents the different states of a AppConnector.
  public state?: string;

  // An arbitrary user-provided name for the AppConnector.
  public displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of the AppConnector.
  public region?: string;

  /*
Principal information about the Identity of the AppConnector.
Structure is documented below.
*/
  public principalInfo?: beyondcorp_AppConnectorPrincipalInfo;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "The region of the AppConnector.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "An arbitrary user-provided name for the AppConnector.",
        [],
        false,
        false,
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
        "ID of the AppConnector.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "principalInfo",
        "Principal information about the Identity of the AppConnector.\nStructure is documented below.",
        beyondcorp_AppConnectorPrincipalInfo_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
