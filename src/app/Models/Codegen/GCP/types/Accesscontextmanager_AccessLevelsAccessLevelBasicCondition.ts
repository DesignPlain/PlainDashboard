import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource,
  Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource_GetTypes,
} from "./Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource";
import {
  Accesscontextmanager_AccessLevelsAccessLevelBasicConditionDevicePolicy,
  Accesscontextmanager_AccessLevelsAccessLevelBasicConditionDevicePolicy_GetTypes,
} from "./Accesscontextmanager_AccessLevelsAccessLevelBasicConditionDevicePolicy";

export interface Accesscontextmanager_AccessLevelsAccessLevelBasicCondition {
  /*
The request must originate from one of the provided VPC networks in Google Cloud. Cannot specify this field together with `ip_subnetworks`.
Structure is documented below.
*/
  VpcNetworkSources?: Array<Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource>;

  /*
Device specific restrictions, all restrictions must hold for
the Condition to be true. If not specified, all devices are
allowed.
Structure is documented below.
*/
  DevicePolicy?: Accesscontextmanager_AccessLevelsAccessLevelBasicConditionDevicePolicy;

  /*
A list of CIDR block IP subnetwork specification. May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.
*/
  IpSubnetworks?: Array<string>;

  /*
An allowed list of members (users, service accounts).
Using groups is not supported yet.
The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: `user:{emailid}`, `serviceAccount:{emailid}`
*/
  Members?: Array<string>;

  /*
Whether to negate the Condition. If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.
*/
  Negate?: boolean;

  /*
The request must originate from one of the provided
countries/regions.
Format: A valid ISO 3166-1 alpha-2 code.
*/
  Regions?: Array<string>;

  /*
A list of other access levels defined in the same Policy,
referenced by resource name. Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}
*/
  RequiredAccessLevels?: Array<string>;
}

export function Accesscontextmanager_AccessLevelsAccessLevelBasicCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Members",
      "An allowed list of members (users, service accounts).\nUsing groups is not supported yet.\nThe signed-in user originating the request must be a part of one\nof the provided members. If not specified, a request may come\nfrom any user (logged in/not logged in, not present in any\ngroups, etc.).\nFormats: `user:{emailid}`, `serviceAccount:{emailid}`",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Negate",
      "Whether to negate the Condition. If true, the Condition becomes\na NAND over its non-empty fields, each field must be false for\nthe Condition overall to be satisfied. Defaults to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Regions",
      "The request must originate from one of the provided\ncountries/regions.\nFormat: A valid ISO 3166-1 alpha-2 code.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequiredAccessLevels",
      "A list of other access levels defined in the same Policy,\nreferenced by resource name. Referencing an AccessLevel which\ndoes not exist is an error. All access levels listed must be\ngranted for the Condition to be true.\nFormat: accessPolicies/{policy_id}/accessLevels/{short_name}",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VpcNetworkSources",
      "The request must originate from one of the provided VPC networks in Google Cloud. Cannot specify this field together with `ip_subnetworks`.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DevicePolicy",
      "Device specific restrictions, all restrictions must hold for\nthe Condition to be true. If not specified, all devices are\nallowed.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelsAccessLevelBasicConditionDevicePolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpSubnetworks",
      'A list of CIDR block IP subnetwork specification. May be IPv4\nor IPv6.\nNote that for a CIDR IP address block, the specified IP address\nportion must be properly truncated (i.e. all the host bits must\nbe zero) or the input is considered malformed. For example,\n"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,\nfor IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"\nis not. The originating IP of a request must be in one of the\nlisted subnets in order for this Condition to be true.\nIf empty, all IP addresses are allowed.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
