import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dns_RecordSetRoutingPolicyGeo,
  dns_RecordSetRoutingPolicyGeo_GetTypes,
} from "./dns_RecordSetRoutingPolicyGeo";
import {
  dns_RecordSetRoutingPolicyPrimaryBackup,
  dns_RecordSetRoutingPolicyPrimaryBackup_GetTypes,
} from "./dns_RecordSetRoutingPolicyPrimaryBackup";
import {
  dns_RecordSetRoutingPolicyWrr,
  dns_RecordSetRoutingPolicyWrr_GetTypes,
} from "./dns_RecordSetRoutingPolicyWrr";

export interface dns_RecordSetRoutingPolicy {
  // Specifies whether to enable fencing for geo queries.
  enableGeoFencing?: boolean;

  /*
The configuration for Geolocation based routing policy.
Structure is document below.
*/
  geos?: Array<dns_RecordSetRoutingPolicyGeo>;

  /*
The configuration for a primary-backup policy with global to regional failover. Queries are responded to with the global primary targets, but if none of the primary targets are healthy, then we fallback to a regional failover policy.
Structure is document below.
*/
  primaryBackup?: dns_RecordSetRoutingPolicyPrimaryBackup;

  /*
The configuration for Weighted Round Robin based routing policy.
Structure is document below.
*/
  wrrs?: Array<dns_RecordSetRoutingPolicyWrr>;
}

export function dns_RecordSetRoutingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableGeoFencing",
      "Specifies whether to enable fencing for geo queries.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "geos",
      "The configuration for Geolocation based routing policy.\nStructure is document below.",
      dns_RecordSetRoutingPolicyGeo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "primaryBackup",
      "The configuration for a primary-backup policy with global to regional failover. Queries are responded to with the global primary targets, but if none of the primary targets are healthy, then we fallback to a regional failover policy.\nStructure is document below.",
      dns_RecordSetRoutingPolicyPrimaryBackup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "wrrs",
      "The configuration for Weighted Round Robin based routing policy.\nStructure is document below.",
      dns_RecordSetRoutingPolicyWrr_GetTypes(),
      false,
      false,
    ),
  ];
}
