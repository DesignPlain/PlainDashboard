import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcIpamPoolArgs {
  // The minimum netmask length that will be required for CIDR allocations in this pool.
  allocationMinNetmaskLength?: number;

  // Limits which AWS service the pool can be used in. Only useable on public scopes. Valid Values: `ec2`.
  awsService?: string;

  // The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Valid values are `byoip` or `amazon`. Default is `byoip`.
  publicIpSource?: string;

  // Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.
  allocationResourceTags?: Map<string, string>;

  // The ID of the scope in which you would like to create the IPAM pool.
  ipamScopeId?: string;

  // The locale in which you would like to create the IPAM pool. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region. Possible values: Any AWS region, such as `us-east-1`.
  locale?: string;

  // The ID of the source IPAM pool. Use this argument to create a child pool within an existing pool.
  sourceIpamPoolId?: string;

  // A default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16 (unless you provide a different netmask value when you create the new allocation).
  allocationDefaultNetmaskLength?: number;

  // Defines whether or not IPv6 pool space is publicly advertisable over the internet. This argument is required if `address_family = "ipv6"` and `public_ip_source = "byoip"`, default is `false`. This option is not available for IPv4 pool space or if `public_ip_source = "amazon"`.
  publiclyAdvertisable?: boolean;

  // The IP protocol assigned to this pool. You must choose either IPv4 or IPv6 protocol for a pool.
  addressFamily?: string;

  // The maximum netmask length that will be required for CIDR allocations in this pool.
  allocationMaxNetmaskLength?: number;

  /*
If you include this argument, IPAM automatically imports any VPCs you have in your scope that fall
within the CIDR range in the pool.
*/
  autoImport?: boolean;

  // A description for the IPAM pool.
  description?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VpcIpamPool extends Resource {
  // Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.
  public allocationResourceTags?: Map<string, string>;

  // Amazon Resource Name (ARN) of IPAM
  public arn?: string;

  // Limits which AWS service the pool can be used in. Only useable on public scopes. Valid Values: `ec2`.
  public awsService?: string;

  // The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Valid values are `byoip` or `amazon`. Default is `byoip`.
  public publicIpSource?: string;

  // The minimum netmask length that will be required for CIDR allocations in this pool.
  public allocationMinNetmaskLength?: number;

  // The locale in which you would like to create the IPAM pool. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region. Possible values: Any AWS region, such as `us-east-1`.
  public locale?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16 (unless you provide a different netmask value when you create the new allocation).
  public allocationDefaultNetmaskLength?: number;

  //
  public ipamScopeType?: string;

  //
  public poolDepth?: number;

  // The ID of the IPAM
  public state?: string;

  // A description for the IPAM pool.
  public description?: string;

  // The maximum netmask length that will be required for CIDR allocations in this pool.
  public allocationMaxNetmaskLength?: number;

  /*
If you include this argument, IPAM automatically imports any VPCs you have in your scope that fall
within the CIDR range in the pool.
*/
  public autoImport?: boolean;

  // The ID of the scope in which you would like to create the IPAM pool.
  public ipamScopeId?: string;

  // Defines whether or not IPv6 pool space is publicly advertisable over the internet. This argument is required if `address_family = "ipv6"` and `public_ip_source = "byoip"`, default is `false`. This option is not available for IPv4 pool space or if `public_ip_source = "amazon"`.
  public publiclyAdvertisable?: boolean;

  // The ID of the source IPAM pool. Use this argument to create a child pool within an existing pool.
  public sourceIpamPoolId?: string;

  // The IP protocol assigned to this pool. You must choose either IPv4 or IPv6 protocol for a pool.
  public addressFamily?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "sourceIpamPoolId",
        "The ID of the source IPAM pool. Use this argument to create a child pool within an existing pool.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAdvertisable",
        'Defines whether or not IPv6 pool space is publicly advertisable over the internet. This argument is required if `address_family = "ipv6"` and `public_ip_source = "byoip"`, default is `false`. This option is not available for IPv4 pool space or if `public_ip_source = "amazon"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for the IPAM pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "allocationResourceTags",
        "Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipamScopeId",
        "The ID of the scope in which you would like to create the IPAM pool.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "locale",
        "The locale in which you would like to create the IPAM pool. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region. Possible values: Any AWS region, such as `us-east-1`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "allocationDefaultNetmaskLength",
        "A default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16 (unless you provide a different netmask value when you create the new allocation).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "addressFamily",
        "The IP protocol assigned to this pool. You must choose either IPv4 or IPv6 protocol for a pool.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "allocationMaxNetmaskLength",
        "The maximum netmask length that will be required for CIDR allocations in this pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsService",
        "Limits which AWS service the pool can be used in. Only useable on public scopes. Valid Values: `ec2`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "allocationMinNetmaskLength",
        "The minimum netmask length that will be required for CIDR allocations in this pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "publicIpSource",
        "The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Valid values are `byoip` or `amazon`. Default is `byoip`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoImport",
        "If you include this argument, IPAM automatically imports any VPCs you have in your scope that fall\nwithin the CIDR range in the pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
