import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolManagement {
  // Whether the nodes will be automatically repaired. Enabled by default.
  AutoRepair?: boolean;

  // Whether the nodes will be automatically upgraded. Enabled by default.
  AutoUpgrade?: boolean;
}

export function Container_NodePoolManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AutoRepair",
      "Whether the nodes will be automatically repaired. Enabled by default.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutoUpgrade",
      "Whether the nodes will be automatically upgraded. Enabled by default.",
      [],
      false,
      false,
    ),
  ];
}
