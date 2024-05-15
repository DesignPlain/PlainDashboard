import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_ClusterMaintenancePolicyWindow,
  Edgecontainer_ClusterMaintenancePolicyWindow_GetTypes,
} from "./Edgecontainer_ClusterMaintenancePolicyWindow";

export interface Edgecontainer_ClusterMaintenancePolicy {
  /*
Specifies the maintenance window in which maintenance may be performed.
Structure is documented below.
*/
  Window?: Edgecontainer_ClusterMaintenancePolicyWindow;
}

export function Edgecontainer_ClusterMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Window",
      "Specifies the maintenance window in which maintenance may be performed.\nStructure is documented below.",
      Edgecontainer_ClusterMaintenancePolicyWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
