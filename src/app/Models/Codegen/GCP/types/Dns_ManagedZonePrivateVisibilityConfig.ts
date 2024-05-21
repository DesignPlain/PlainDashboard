import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dns_ManagedZonePrivateVisibilityConfigGkeCluster,
  dns_ManagedZonePrivateVisibilityConfigGkeCluster_GetTypes,
} from "./dns_ManagedZonePrivateVisibilityConfigGkeCluster";
import {
  dns_ManagedZonePrivateVisibilityConfigNetwork,
  dns_ManagedZonePrivateVisibilityConfigNetwork_GetTypes,
} from "./dns_ManagedZonePrivateVisibilityConfigNetwork";

export interface dns_ManagedZonePrivateVisibilityConfig {
  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  gkeClusters?: Array<dns_ManagedZonePrivateVisibilityConfigGkeCluster>;

  //
  networks?: Array<dns_ManagedZonePrivateVisibilityConfigNetwork>;
}

export function dns_ManagedZonePrivateVisibilityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "networks",
      "",
      dns_ManagedZonePrivateVisibilityConfigNetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gkeClusters",
      "The list of Google Kubernetes Engine clusters that can see this zone.\nStructure is documented below.",
      dns_ManagedZonePrivateVisibilityConfigGkeCluster_GetTypes(),
      false,
      false,
    ),
  ];
}
