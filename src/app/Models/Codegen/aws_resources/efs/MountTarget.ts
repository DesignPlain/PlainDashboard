import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface MountTargetArgs {
  // The ID of the file system for which the mount target is intended.
  fileSystemId?: string;

  /*
The address (within the address range of the specified subnet) at
which the file system may be mounted via the mount target.
*/
  ipAddress?: string;

  /*
A list of up to 5 VPC security group IDs (that must
be for the same VPC as subnet specified) in effect for the mount target.
*/
  securityGroups?: Array<string>;

  // The ID of the subnet to add the mount target in.
  subnetId?: string;
}
export class MountTarget extends Resource {
  /*
A list of up to 5 VPC security group IDs (that must
be for the same VPC as subnet specified) in effect for the mount target.
*/
  public securityGroups?: Array<string>;

  // The unique and consistent identifier of the Availability Zone (AZ) that the mount target resides in.
  public availabilityZoneId?: string;

  // The DNS name for the EFS file system.
  public dnsName?: string;

  // Amazon Resource Name of the file system.
  public fileSystemArn?: string;

  // The ID of the file system for which the mount target is intended.
  public fileSystemId?: string;

  /*
The address (within the address range of the specified subnet) at
which the file system may be mounted via the mount target.
*/
  public ipAddress?: string;

  // The DNS name for the given subnet/AZ per [documented convention](http://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-cmd-dns-name.html).
  public mountTargetDnsName?: string;

  // The ID of the network interface that Amazon EFS created when it created the mount target.
  public networkInterfaceId?: string;

  // The name of the Availability Zone (AZ) that the mount target resides in.
  public availabilityZoneName?: string;

  // AWS account ID that owns the resource.
  public ownerId?: string;

  // The ID of the subnet to add the mount target in.
  public subnetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "fileSystemId",
        "The ID of the file system for which the mount target is intended.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddress",
        "The address (within the address range of the specified subnet) at\nwhich the file system may be mounted via the mount target.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroups",
        "A list of up to 5 VPC security group IDs (that must\nbe for the same VPC as subnet specified) in effect for the mount target.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet to add the mount target in.",
        [],
        true,
        true,
      ),
    ];
  }
}
