import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_PrivateConnectionVpcPeeringConfig,
  Databasemigrationservice_PrivateConnectionVpcPeeringConfig_GetTypes,
} from "../types/Databasemigrationservice_PrivateConnectionVpcPeeringConfig";
import {
  Databasemigrationservice_PrivateConnectionError,
  Databasemigrationservice_PrivateConnectionError_GetTypes,
} from "../types/Databasemigrationservice_PrivateConnectionError";

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
between databasemigrationservice and the consumer's VPC.
Structure is documented below.
*/
  VpcPeeringConfig?: Databasemigrationservice_PrivateConnectionVpcPeeringConfig;
}
export class PrivateConnection extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // State of the PrivateConnection.
  public State?: string;

  // Display name.
  public DisplayName?: string;

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

  // The resource's name.
  public Name?: string;

  // The private connectivity identifier.
  public PrivateConnectionId?: string;

  /*
The VPC Peering configuration is used to create VPC peering
between databasemigrationservice and the consumer's VPC.
Structure is documented below.
*/
  public VpcPeeringConfig?: Databasemigrationservice_PrivateConnectionVpcPeeringConfig;

  /*
The PrivateConnection error in case of failure.
Structure is documented below.
*/
  public Errors?: Array<Databasemigrationservice_PrivateConnectionError>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
      new DynamicUIProps(
        InputType.Object,
        "VpcPeeringConfig",
        "The VPC Peering configuration is used to create VPC peering\nbetween databasemigrationservice and the consumer's VPC.\nStructure is documented below.",
        Databasemigrationservice_PrivateConnectionVpcPeeringConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name.",
        [],
        false,
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
    ];
  }
}
