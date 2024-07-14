import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VpcIpamPreviewNextCidrArgs {
  // Exclude a particular CIDR range from being returned by the pool.
  disallowedCidrs?: Array<string>;

  // The ID of the pool to which you want to assign a CIDR.
  ipamPoolId?: string;

  // The netmask length of the CIDR you would like to preview from the IPAM pool.
  netmaskLength?: number;
}
export class VpcIpamPreviewNextCidr extends Resource {
  // Exclude a particular CIDR range from being returned by the pool.
  public disallowedCidrs?: Array<string>;

  // The ID of the pool to which you want to assign a CIDR.
  public ipamPoolId?: string;

  // The netmask length of the CIDR you would like to preview from the IPAM pool.
  public netmaskLength?: number;

  // The previewed CIDR from the pool.
  public cidr?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
      new DynamicUIProps(
        InputType.Number,
        "netmaskLength",
        "The netmask length of the CIDR you would like to preview from the IPAM pool.",
        [],
        false,
        true,
      ),
    ];
  }
}
