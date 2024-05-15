import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType {
  // Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes
  NodeName?: string;
}

export function Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodeName",
      "Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
      [],
      false,
      false,
    ),
  ];
}
