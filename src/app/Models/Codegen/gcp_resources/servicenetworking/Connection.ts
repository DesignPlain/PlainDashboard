import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ConnectionArgs {
  /*
When set to ABANDON, terraform will abandon management of the resource instead of deleting it. Prevents terraform apply
failures with CloudSQL. Note: The resource will still exist.
*/
  deletionPolicy?: string;

  // Name of VPC network connected with service producers using VPC peering.
  network?: string;

  /*
Named IP address range(s) of PEERING type reserved for
this service provider. Note that invoking this method with a different range when connection
is already established will not reallocate already provisioned service producer subnetworks.
*/
  reservedPeeringRanges?: Array<string>;

  /*
Provider peering service that is managing peering connectivity for a
service provider organization. For Google services that support this functionality it is
'servicenetworking.googleapis.com'.
*/
  service?: string;
}
export class Connection extends Resource {
  /*
Named IP address range(s) of PEERING type reserved for
this service provider. Note that invoking this method with a different range when connection
is already established will not reallocate already provisioned service producer subnetworks.
*/
  public reservedPeeringRanges?: Array<string>;

  /*
Provider peering service that is managing peering connectivity for a
service provider organization. For Google services that support this functionality it is
'servicenetworking.googleapis.com'.
*/
  public service?: string;

  /*
When set to ABANDON, terraform will abandon management of the resource instead of deleting it. Prevents terraform apply
failures with CloudSQL. Note: The resource will still exist.
*/
  public deletionPolicy?: string;

  // Name of VPC network connected with service producers using VPC peering.
  public network?: string;

  // (Computed) The name of the VPC Network Peering connection that was created by the service producer.
  public peering?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        "When set to ABANDON, terraform will abandon management of the resource instead of deleting it. Prevents terraform apply\nfailures with CloudSQL. Note: The resource will still exist.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "Name of VPC network connected with service producers using VPC peering.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "reservedPeeringRanges",
        "Named IP address range(s) of PEERING type reserved for\nthis service provider. Note that invoking this method with a different range when connection\nis already established will not reallocate already provisioned service producer subnetworks.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "Provider peering service that is managing peering connectivity for a\nservice provider organization. For Google services that support this functionality it is\n'servicenetworking.googleapis.com'.",
        [],
        true,
        true,
      ),
    ];
  }
}
