import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_VpcIpamOperatingRegion,
  ec2_VpcIpamOperatingRegion_GetTypes,
} from '../types/ec2_VpcIpamOperatingRegion';

export interface VpcIpamArgs {
  // Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and any allocations in the pools in private scopes.
  cascade?: boolean;

  // A description for the IPAM.
  description?: string;

  // Determines which locales can be chosen when you create pools. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region. You specify a region using the region_name parameter. You --must-- set your provider block region as an operating_region.
  operatingRegions?: Array<ec2_VpcIpamOperatingRegion>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // specifies the IPAM tier. Valid options include `free` and `advanced`. Default is `advanced`.
  tier?: string;
}
export class VpcIpam extends DS_Resource {
  // Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and any allocations in the pools in private scopes.
  public cascade?: boolean;

  // The IPAM's default resource discovery association ID.
  public defaultResourceDiscoveryAssociationId?: string;

  // The number of scopes in the IPAM.
  public scopeCount?: number;

  // specifies the IPAM tier. Valid options include `free` and `advanced`. Default is `advanced`.
  public tier?: string;

  // The ID of the IPAM's private scope. A scope is a top-level container in IPAM. Each scope represents an IP-independent network. Scopes enable you to represent networks where you have overlapping IP space. When you create an IPAM, IPAM automatically creates two scopes: public and private. The private scope is intended for private IP space. The public scope is intended for all internet-routable IP space.
  public privateDefaultScopeId?: string;

  /*
The ID of the IPAM's public scope. A scope is a top-level container in IPAM. Each scope represents an IP-independent network. Scopes enable you to represent networks where you have overlapping IP space. When you create an IPAM, IPAM automatically creates two scopes: public and private. The private scope is intended for private
IP space. The public scope is intended for all internet-routable IP space.
*/
  public publicDefaultScopeId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of IPAM
  public arn?: string;

  // The IPAM's default resource discovery ID.
  public defaultResourceDiscoveryId?: string;

  // A description for the IPAM.
  public description?: string;

  // Determines which locales can be chosen when you create pools. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region. You specify a region using the region_name parameter. You --must-- set your provider block region as an operating_region.
  public operatingRegions?: Array<ec2_VpcIpamOperatingRegion>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'cascade',
        'Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and any allocations in the pools in private scopes.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description for the IPAM.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'operatingRegions',
        "Determines which locales can be chosen when you create pools. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region. You specify a region using the region_name parameter. You **must** set your provider block region as an operating_region.",
        () => ec2_VpcIpamOperatingRegion_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tier',
        'specifies the IPAM tier. Valid options include `free` and `advanced`. Default is `advanced`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
