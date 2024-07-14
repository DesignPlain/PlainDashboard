import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  databasemigrationservice_PrivateConnectionVpcPeeringConfig,
  databasemigrationservice_PrivateConnectionVpcPeeringConfig_GetTypes,
} from "../types/databasemigrationservice_PrivateConnectionVpcPeeringConfig";
import {
  databasemigrationservice_PrivateConnectionError,
  databasemigrationservice_PrivateConnectionError_GetTypes,
} from "../types/databasemigrationservice_PrivateConnectionError";

export interface PrivateConnectionArgs {
  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name of the location this private connection is located in.
  location?: string;

  // The private connectivity identifier.
  privateConnectionId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The VPC Peering configuration is used to create VPC peering
between databasemigrationservice and the consumer's VPC.
Structure is documented below.
*/
  vpcPeeringConfig?: databasemigrationservice_PrivateConnectionVpcPeeringConfig;

  // Display name.
  displayName?: string;
}
export class PrivateConnection extends Resource {
  // The resource's name.
  public name?: string;

  // The private connectivity identifier.
  public privateConnectionId?: string;

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

  // State of the PrivateConnection.
  public state?: string;

  // Display name.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The name of the location this private connection is located in.
  public location?: string;

  /*
The VPC Peering configuration is used to create VPC peering
between databasemigrationservice and the consumer's VPC.
Structure is documented below.
*/
  public vpcPeeringConfig?: databasemigrationservice_PrivateConnectionVpcPeeringConfig;

  /*
The PrivateConnection error in case of failure.
Structure is documented below.
*/
  public errors?: Array<databasemigrationservice_PrivateConnectionError>;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The name of the location this private connection is located in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateConnectionId",
        "The private connectivity identifier.",
        [],
        true,
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
        InputType.Object,
        "vpcPeeringConfig",
        "The VPC Peering configuration is used to create VPC peering\nbetween databasemigrationservice and the consumer's VPC.\nStructure is documented below.",
        databasemigrationservice_PrivateConnectionVpcPeeringConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Display name.",
        [],
        false,
        true,
      ),
    ];
  }
}
