import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VpcIpamPoolCidrAllocationArgs {
  // The CIDR you want to assign to the pool.
  cidr?: string;

  // The description for the allocation.
  description?: string;

  // Exclude a particular CIDR range from being returned by the pool.
  disallowedCidrs?: Array<string>;

  // The ID of the pool to which you want to assign a CIDR.
  ipamPoolId?: string;

  // The netmask length of the CIDR you would like to allocate to the IPAM pool. Valid Values: `0-128`.
  netmaskLength?: number;
}
export class VpcIpamPoolCidrAllocation extends Resource {
  // The netmask length of the CIDR you would like to allocate to the IPAM pool. Valid Values: `0-128`.
  public netmaskLength?: number;

  // The ID of the resource.
  public resourceId?: string;

  // The owner of the resource.
  public resourceOwner?: string;

  // The description for the allocation.
  public description?: string;

  // Exclude a particular CIDR range from being returned by the pool.
  public disallowedCidrs?: Array<string>;

  //
  public ipamPoolAllocationId?: string;

  // The ID of the pool to which you want to assign a CIDR.
  public ipamPoolId?: string;

  // The CIDR you want to assign to the pool.
  public cidr?: string;

  // The type of the resource.
  public resourceType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "netmaskLength",
        "The netmask length of the CIDR you would like to allocate to the IPAM pool. Valid Values: `0-128`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidr",
        "The CIDR you want to assign to the pool.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description for the allocation.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "disallowedCidrs",
        "Exclude a particular CIDR range from being returned by the pool.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipamPoolId",
        "The ID of the pool to which you want to assign a CIDR.",
        [],
        true,
        true,
      ),
    ];
  }
}
