import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VpcIpamResourceDiscoveryAssociationArgs {
  // The ID of the IPAM to associate.
  ipamId?: string;

  // The ID of the Resource Discovery to associate.
  ipamResourceDiscoveryId?: string;

  // A map of tags to add to the IPAM resource discovery association resource.
  tags?: Map<string, string>;
}
export class VpcIpamResourceDiscoveryAssociation extends Resource {
  // The Amazon Resource Name (ARN) of IPAM Resource Discovery Association.
  public arn?: string;

  // The home region of the IPAM.
  public ipamRegion?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The lifecycle state of the association when you associate or disassociate a resource discovery.
  public state?: string;

  // A map of tags to add to the IPAM resource discovery association resource.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the IPAM.
  public ipamArn?: string;

  // The ID of the IPAM to associate.
  public ipamId?: string;

  // The ID of the Resource Discovery to associate.
  public ipamResourceDiscoveryId?: string;

  // A boolean to identify if the Resource Discovery is the accounts default resource discovery.
  public isDefault?: boolean;

  // The account ID for the account that manages the Resource Discovery
  public ownerId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ipamId",
        "The ID of the IPAM to associate.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipamResourceDiscoveryId",
        "The ID of the Resource Discovery to associate.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to add to the IPAM resource discovery association resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
