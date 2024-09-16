import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface NetworkAclAssociationArgs {
  // The ID of the network ACL.
  networkAclId?: string;

  // The ID of the associated Subnet.
  subnetId?: string;
}
export class NetworkAclAssociation extends DS_Resource {
  // The ID of the network ACL.
  public networkAclId?: string;

  // The ID of the associated Subnet.
  public subnetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'networkAclId',
        'The ID of the network ACL.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'The ID of the associated Subnet.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
