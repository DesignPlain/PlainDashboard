import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_VpcIpamResourceDiscoveryOperatingRegion,
  ec2_VpcIpamResourceDiscoveryOperatingRegion_GetTypes,
} from '../types/ec2_VpcIpamResourceDiscoveryOperatingRegion';

export interface VpcIpamResourceDiscoveryArgs {
  // A description for the IPAM Resource Discovery.
  description?: string;

  // Determines which regions the Resource Discovery will enable IPAM features for usage and monitoring. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM Resource Discovery. You can only create VPCs from a pool whose locale matches the VPC's Region. You specify a region using the region_name parameter. --You must set your provider block region as an operating_region.--
  operatingRegions?: Array<ec2_VpcIpamResourceDiscoveryOperatingRegion>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VpcIpamResourceDiscovery extends DS_Resource {
  // A description for the IPAM Resource Discovery.
  public description?: string;

  // The home region of the Resource Discovery
  public ipamResourceDiscoveryRegion?: string;

  // A boolean to identify if the Resource Discovery is the accounts default resource discovery
  public isDefault?: boolean;

  // Determines which regions the Resource Discovery will enable IPAM features for usage and monitoring. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM Resource Discovery. You can only create VPCs from a pool whose locale matches the VPC's Region. You specify a region using the region_name parameter. --You must set your provider block region as an operating_region.--
  public operatingRegions?: Array<ec2_VpcIpamResourceDiscoveryOperatingRegion>;

  // The account ID for the account that manages the Resource Discovery
  public ownerId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of IPAM Resource Discovery
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description for the IPAM Resource Discovery.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'operatingRegions',
        "Determines which regions the Resource Discovery will enable IPAM features for usage and monitoring. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM Resource Discovery. You can only create VPCs from a pool whose locale matches the VPC's Region. You specify a region using the region_name parameter. **You must set your provider block region as an operating_region.**",
        () => ec2_VpcIpamResourceDiscoveryOperatingRegion_GetTypes(),
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
    ];
  }
}
