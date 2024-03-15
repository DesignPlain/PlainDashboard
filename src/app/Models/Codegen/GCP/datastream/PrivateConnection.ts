import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PrivateConnectionError } from "../types/PrivateConnectionError";
import { PrivateConnectionVpcPeeringConfig } from "../types/PrivateConnectionVpcPeeringConfig";

export interface PrivateConnectionArgs {
  // Display name.
  DisplayName?: string;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of the location this private connection is located in.
  Location?: string;

  // The private connectivity identifier.
  PrivateConnectionId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The VPC Peering configuration is used to create VPC peering
between Datastream and the consumer's VPC.
Structure is documented below.
*/
  VpcPeeringConfig?: PrivateConnectionVpcPeeringConfig;
}
export class PrivateConnection extends Resource {
  /*
The VPC Peering configuration is used to create VPC peering
between Datastream and the consumer's VPC.
Structure is documented below.
*/
  public VpcPeeringConfig?: PrivateConnectionVpcPeeringConfig;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The private connectivity identifier.
  public PrivateConnectionId?: string;

  /*
The PrivateConnection error in case of failure.
Structure is documented below.
*/
  public Errors?: Array<PrivateConnectionError>;

  // The name of the location this private connection is located in.
  public Location?: string;

  // The resource's name.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // State of the PrivateConnection.
  public State?: string;

  // Display name.
  public DisplayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "VpcPeeringConfig",
        "The VPC Peering configuration is used to create VPC peering\nbetween Datastream and the consumer's VPC.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "DisplayName", "Display name."),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this private connection is located in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateConnectionId",
        "The private connectivity identifier.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
