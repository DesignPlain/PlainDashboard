import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getLaunchTemplateNetworkInterface {
  //
  associateCarrierIpAddress?: string;

  //
  ipv6AddressCount?: number;

  //
  networkInterfaceId?: string;

  //
  subnetId?: string;

  //
  ipv6Prefixes?: Array<string>;

  //
  securityGroups?: Array<string>;

  //
  associatePublicIpAddress?: boolean;

  //
  deviceIndex?: number;

  //
  interfaceType?: string;

  //
  ipv4Addresses?: Array<string>;

  //
  ipv4PrefixCount?: number;

  //
  ipv4AddressCount?: number;

  //
  ipv6Addresses?: Array<string>;

  //
  ipv6PrefixCount?: number;

  //
  privateIpAddress?: string;

  //
  deleteOnTermination?: boolean;

  //
  description?: string;

  //
  ipv4Prefixes?: Array<string>;

  //
  networkCardIndex?: number;
}

export function ec2_getLaunchTemplateNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ipv6AddressCount",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv4Addresses",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "associateCarrierIpAddress",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ipv4AddressCount",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv6Addresses",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ipv6PrefixCount",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "associatePublicIpAddress",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIpAddress",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "description", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ipv4Prefixes",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "networkCardIndex",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "subnetId", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ipv6Prefixes",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "deviceIndex", "", [], true, false),
    new DynamicUIProps(InputType.String, "interfaceType", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "ipv4PrefixCount",
      "",
      [],
      true,
      false,
    ),
  ];
}
