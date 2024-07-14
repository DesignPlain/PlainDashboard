import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getVpcIamPoolsIpamPool {
  // Tags that are required to create resources in using this pool.
  allocationResourceTags?: Map<string, string>;

  // If enabled, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM.
  autoImport?: boolean;

  // ID of the IPAM pool.
  id?: string;

  // ID of the source IPAM pool.
  sourceIpamPoolId?: string;

  // Map of tags to assigned to the resource.
  tags?: Map<string, string>;

  // A default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is `10.0.0.0/8` and you enter 16 here, new allocations will default to `10.0.0.0/16`.
  allocationDefaultNetmaskLength?: number;

  // ID of the scope the pool belongs to.
  ipamScopeId?: string;

  //
  state?: string;

  // IP protocol assigned to this pool.
  addressFamily?: string;

  // Limits which service in AWS that the pool can be used in. `ec2` for example, allows users to use space for Elastic IP addresses and VPCs.
  awsService?: string;

  //
  ipamScopeType?: string;

  // Defines whether or not IPv6 pool space is publicly advertisable over the internet.
  publiclyAdvertisable?: boolean;

  // The minimum netmask length that will be required for CIDR allocations in this pool.
  allocationMinNetmaskLength?: number;

  // ARN of the pool
  arn?: string;

  // Description for the IPAM pool.
  description?: string;

  // Locale is the Region where your pool is available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region.
  locale?: string;

  //
  poolDepth?: number;

  // The maximum netmask length that will be required for CIDR allocations in this pool.
  allocationMaxNetmaskLength?: number;
}

export function ec2_getVpcIamPoolsIpamPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "allocationResourceTags",
      "Tags that are required to create resources in using this pool.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoImport",
      "If enabled, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the IPAM pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "state", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "awsService",
      "Limits which service in AWS that the pool can be used in. `ec2` for example, allows users to use space for Elastic IP addresses and VPCs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "ipamScopeType", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description for the IPAM pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "locale",
      "Locale is the Region where your pool is available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "allocationMaxNetmaskLength",
      "The maximum netmask length that will be required for CIDR allocations in this pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceIpamPoolId",
      "ID of the source IPAM pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Map of tags to assigned to the resource.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipamScopeId",
      "ID of the scope the pool belongs to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "allocationMinNetmaskLength",
      "The minimum netmask length that will be required for CIDR allocations in this pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "allocationDefaultNetmaskLength",
      "A default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is `10.0.0.0/8` and you enter 16 here, new allocations will default to `10.0.0.0/16`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "publiclyAdvertisable",
      "Defines whether or not IPv6 pool space is publicly advertisable over the internet.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the pool",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "addressFamily",
      "IP protocol assigned to this pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "poolDepth", "", [], true, false),
  ];
}
