import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  edgecontainer_ClusterMaintenancePolicyWindow,
  edgecontainer_ClusterMaintenancePolicyWindow_GetTypes,
} from "./edgecontainer_ClusterMaintenancePolicyWindow";

export interface edgecontainer_ClusterMaintenancePolicy {
  /*
Specifies the maintenance window in which maintenance may be performed.
Structure is documented below.
*/
  window?: edgecontainer_ClusterMaintenancePolicyWindow;
}

export function edgecontainer_ClusterMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "window",
      "Specifies the maintenance window in which maintenance may be performed.\nStructure is documented below.",
      edgecontainer_ClusterMaintenancePolicyWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
