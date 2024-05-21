import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_NodePoolManagement {
  // Whether the nodes will be automatically upgraded. Enabled by default.
  autoUpgrade?: boolean;

  // Whether the nodes will be automatically repaired. Enabled by default.
  autoRepair?: boolean;
}

export function container_NodePoolManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoUpgrade",
      "Whether the nodes will be automatically upgraded. Enabled by default.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoRepair",
      "Whether the nodes will be automatically repaired. Enabled by default.",
      [],
      false,
      false,
    ),
  ];
}
