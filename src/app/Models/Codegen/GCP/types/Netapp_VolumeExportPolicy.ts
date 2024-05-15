import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Netapp_VolumeExportPolicyRule,
  Netapp_VolumeExportPolicyRule_GetTypes,
} from "./Netapp_VolumeExportPolicyRule";

export interface Netapp_VolumeExportPolicy {
  /*
Export rules (up to 5) control NFS volume access.
Structure is documented below.
*/
  Rules?: Array<Netapp_VolumeExportPolicyRule>;
}

export function Netapp_VolumeExportPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Rules",
      "Export rules (up to 5) control NFS volume access.\nStructure is documented below.",
      Netapp_VolumeExportPolicyRule_GetTypes(),
      true,
      false,
    ),
  ];
}
