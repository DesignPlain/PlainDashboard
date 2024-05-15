import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_PrivateConnectionVpcPeeringConfig,
  Datastream_PrivateConnectionVpcPeeringConfig_GetTypes,
} from "../types/Datastream_PrivateConnectionVpcPeeringConfig";
import {
  Datastream_PrivateConnectionError,
  Datastream_PrivateConnectionError_GetTypes,
} from "../types/Datastream_PrivateConnectionError";

export interface PrivateConnectionArgs {
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
  VpcPeeringConfig?: Datastream_PrivateConnectionVpcPeeringConfig;

  // Display name.
  DisplayName?: string;
}
export class PrivateConnection extends Resource {
  // State of the PrivateConnection.
  public State?: string;

  // Display name.
  public DisplayName?: string;

  /*
The PrivateConnection error in case of failure.
Structure is documented below.
*/
  public Errors?: Array<Datastream_PrivateConnectionError>;

  // The resource's name.
  public Name?: string;

  // The private connectivity identifier.
  public PrivateConnectionId?: string;

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

  /*
The VPC Peering configuration is used to create VPC peering
between Datastream and the consumer's VPC.
Structure is documented below.
*/
  public VpcPeeringConfig?: Datastream_PrivateConnectionVpcPeeringConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name of the location this private connection is located in.
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "VpcPeeringConfig",
        "The VPC Peering configuration is used to create VPC peering\nbetween Datastream and the consumer's VPC.\nStructure is documented below.",
        Datastream_PrivateConnectionVpcPeeringConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this private connection is located in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateConnectionId",
        "The private connectivity identifier.",
        [],
        true,
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
    ];
  }
}
