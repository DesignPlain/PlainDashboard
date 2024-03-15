import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AppConnectorPrincipalInfo } from "../types/AppConnectorPrincipalInfo";

export interface AppConnectorArgs {
  // An arbitrary user-provided name for the AppConnector.
  DisplayName?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // ID of the AppConnector.
  Name?: string;

  /*
Principal information about the Identity of the AppConnector.
Structure is documented below.
*/
  PrincipalInfo?: AppConnectorPrincipalInfo;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the AppConnector.
  Region?: string;
}
export class AppConnector extends Resource {
  // ID of the AppConnector.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The region of the AppConnector.
  public Region?: string;

  // An arbitrary user-provided name for the AppConnector.
  public DisplayName?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Represents the different states of a AppConnector.
  public State?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Principal information about the Identity of the AppConnector.
Structure is documented below.
*/
  public PrincipalInfo?: AppConnectorPrincipalInfo;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PrincipalInfo",
        "Principal information about the Identity of the AppConnector.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the AppConnector.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "An arbitrary user-provided name for the AppConnector.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(InputType.String, "Name", "ID of the AppConnector."),
    ];
  }
}
