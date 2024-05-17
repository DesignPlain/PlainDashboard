import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets,
  Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets_GetTypes,
} from "./Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets";

export interface Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo {
  /*
For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.
Structure is document below.
*/
  HealthCheckedTargets?: Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;

  // The location name defined in Google Cloud.
  Location?: string;

  //
  Rrdatas?: Array<string>;
}

export function Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HealthCheckedTargets",
      "For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The location name defined in Google Cloud.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Rrdatas",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
