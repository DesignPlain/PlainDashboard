import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpcIpamPoolCidrAllocationArgs {
  // Exclude a particular CIDR range from being returned by the pool.
  disallowedCidrs?: Array<string>;

  // The ID of the pool to which you want to assign a CIDR.
  ipamPoolId?: string;

  // The netmask length of the CIDR you would like to allocate to the IPAM pool. Valid Values: `0-128`.
  netmaskLength?: number;

  // The CIDR you want to assign to the pool.
  cidr?: string;

  // The description for the allocation.
  description?: string;
}
export class VpcIpamPoolCidrAllocation extends DS_Resource {
  // The description for the allocation.
  public description?: string;

  // The ID of the pool to which you want to assign a CIDR.
  public ipamPoolId?: string;

  // The type of the resource.
  public resourceType?: string;

  // The CIDR you want to assign to the pool.
  public cidr?: string;

  //
  public ipamPoolAllocationId?: string;

  // The netmask length of the CIDR you would like to allocate to the IPAM pool. Valid Values: `0-128`.
  public netmaskLength?: number;

  // The ID of the resource.
  public resourceId?: string;

  // The owner of the resource.
  public resourceOwner?: string;

  // Exclude a particular CIDR range from being returned by the pool.
  public disallowedCidrs?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'netmaskLength',
        'The netmask length of the CIDR you would like to allocate to the IPAM pool. Valid Values: `0-128`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'cidr',
        'The CIDR you want to assign to the pool.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description for the allocation.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'disallowedCidrs',
        'Exclude a particular CIDR range from being returned by the pool.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipamPoolId',
        'The ID of the pool to which you want to assign a CIDR.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
