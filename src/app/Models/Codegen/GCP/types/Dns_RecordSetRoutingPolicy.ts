import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyGeo,
  Dns_RecordSetRoutingPolicyGeo_GetTypes,
} from "./Dns_RecordSetRoutingPolicyGeo";
import {
  Dns_RecordSetRoutingPolicyPrimaryBackup,
  Dns_RecordSetRoutingPolicyPrimaryBackup_GetTypes,
} from "./Dns_RecordSetRoutingPolicyPrimaryBackup";
import {
  Dns_RecordSetRoutingPolicyWrr,
  Dns_RecordSetRoutingPolicyWrr_GetTypes,
} from "./Dns_RecordSetRoutingPolicyWrr";

export interface Dns_RecordSetRoutingPolicy {
  // Specifies whether to enable fencing for geo queries.
  EnableGeoFencing?: boolean;

  /*
The configuration for Geolocation based routing policy.
Structure is document below.
*/
  Geos?: Array<Dns_RecordSetRoutingPolicyGeo>;

  /*
The configuration for a primary-backup policy with global to regional failover. Queries are responded to with the global primary targets, but if none of the primary targets are healthy, then we fallback to a regional failover policy.
Structure is document below.
*/
  PrimaryBackup?: Dns_RecordSetRoutingPolicyPrimaryBackup;

  /*
The configuration for Weighted Round Robin based routing policy.
Structure is document below.
*/
  Wrrs?: Array<Dns_RecordSetRoutingPolicyWrr>;
}

export function Dns_RecordSetRoutingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableGeoFencing",
      "Specifies whether to enable fencing for geo queries.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Geos",
      "The configuration for Geolocation based routing policy.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyGeo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrimaryBackup",
      "The configuration for a primary-backup policy with global to regional failover. Queries are responded to with the global primary targets, but if none of the primary targets are healthy, then we fallback to a regional failover policy.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyPrimaryBackup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Wrrs",
      "The configuration for Weighted Round Robin based routing policy.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyWrr_GetTypes(),
      false,
      false,
    ),
  ];
}
