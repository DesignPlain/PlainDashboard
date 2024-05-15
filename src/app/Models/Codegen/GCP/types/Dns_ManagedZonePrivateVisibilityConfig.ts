import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ManagedZonePrivateVisibilityConfigGkeCluster,
  Dns_ManagedZonePrivateVisibilityConfigGkeCluster_GetTypes,
} from "./Dns_ManagedZonePrivateVisibilityConfigGkeCluster";
import {
  Dns_ManagedZonePrivateVisibilityConfigNetwork,
  Dns_ManagedZonePrivateVisibilityConfigNetwork_GetTypes,
} from "./Dns_ManagedZonePrivateVisibilityConfigNetwork";

export interface Dns_ManagedZonePrivateVisibilityConfig {
  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  GkeClusters?: Array<Dns_ManagedZonePrivateVisibilityConfigGkeCluster>;

  //
  Networks?: Array<Dns_ManagedZonePrivateVisibilityConfigNetwork>;
}

export function Dns_ManagedZonePrivateVisibilityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "GkeClusters",
      "The list of Google Kubernetes Engine clusters that can see this zone.\nStructure is documented below.",
      Dns_ManagedZonePrivateVisibilityConfigGkeCluster_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Networks",
      "",
      Dns_ManagedZonePrivateVisibilityConfigNetwork_GetTypes(),
      false,
      false,
    ),
  ];
}
