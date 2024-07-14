import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  netapp_VolumeExportPolicyRule,
  netapp_VolumeExportPolicyRule_GetTypes,
} from "./netapp_VolumeExportPolicyRule";

export interface netapp_VolumeExportPolicy {
  /*
Export rules (up to 5) control NFS volume access.
Structure is documented below.
*/
  rules?: Array<netapp_VolumeExportPolicyRule>;
}

export function netapp_VolumeExportPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "Export rules (up to 5) control NFS volume access.\nStructure is documented below.",
      netapp_VolumeExportPolicyRule_GetTypes(),
      true,
      false,
    ),
  ];
}
