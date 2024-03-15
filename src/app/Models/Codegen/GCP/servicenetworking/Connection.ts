import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ConnectionArgs {
  /*
When set to ABANDON, terraform will abandon management of the resource instead of deleting it. Prevents terraform apply
failures with CloudSQL. Note: The resource will still exist.
*/
  DeletionPolicy?: string;

  // Name of VPC network connected with service producers using VPC peering.
  Network?: string;

  /*
Named IP address range(s) of PEERING type reserved for
this service provider. Note that invoking this method with a different range when connection
is already established will not reallocate already provisioned service producer subnetworks.
*/
  ReservedPeeringRanges?: Array<string>;

  /*
Provider peering service that is managing peering connectivity for a
service provider organization. For Google services that support this functionality it is
'servicenetworking.googleapis.com'.
*/
  Service?: string;
}
export class Connection extends Resource {
  // (Computed) The name of the VPC Network Peering connection that was created by the service producer.
  public Peering?: string;

  /*
Named IP address range(s) of PEERING type reserved for
this service provider. Note that invoking this method with a different range when connection
is already established will not reallocate already provisioned service producer subnetworks.
*/
  public ReservedPeeringRanges?: Array<string>;

  /*
Provider peering service that is managing peering connectivity for a
service provider organization. For Google services that support this functionality it is
'servicenetworking.googleapis.com'.
*/
  public Service?: string;

  /*
When set to ABANDON, terraform will abandon management of the resource instead of deleting it. Prevents terraform apply
failures with CloudSQL. Note: The resource will still exist.
*/
  public DeletionPolicy?: string;

  // Name of VPC network connected with service producers using VPC peering.
  public Network?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "When set to ABANDON, terraform will abandon management of the resource instead of deleting it. Prevents terraform apply\nfailures with CloudSQL. Note: The resource will still exist.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "Name of VPC network connected with service producers using VPC peering.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ReservedPeeringRanges",
        "Named IP address range(s) of PEERING type reserved for\nthis service provider. Note that invoking this method with a different range when connection\nis already established will not reallocate already provisioned service producer subnetworks.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "Provider peering service that is managing peering connectivity for a\nservice provider organization. For Google services that support this functionality it is\n'servicenetworking.googleapis.com'.",
      ),
    ];
  }
}
