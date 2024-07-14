import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkeonprem_VMwareClusterAutoRepairConfig {
  // Whether auto repair is enabled.
  enabled?: boolean;
}

export function gkeonprem_VMwareClusterAutoRepairConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether auto repair is enabled.",
      [],
      true,
      false,
    ),
  ];
}
