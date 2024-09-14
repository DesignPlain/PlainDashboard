import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets,
  dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets_GetTypes,
} from "./dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets";

export interface dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo {
  /*
For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.
Structure is document below.
*/
  healthCheckedTargets?: dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;

  // The location name defined in Google Cloud.
  location?: string;

  //
  rrdatas?: Array<string>;
}

export function dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "rrdatas",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "healthCheckedTargets",
      "For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.\nStructure is document below.",
      () =>
        dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "The location name defined in Google Cloud.",
      () => [],
      true,
      false,
    ),
  ];
}
