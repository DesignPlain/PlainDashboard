import { ManagedZonePrivateVisibilityConfigGkeCluster } from "./ManagedZonePrivateVisibilityConfigGkeCluster";
import { ManagedZonePrivateVisibilityConfigNetwork } from "./ManagedZonePrivateVisibilityConfigNetwork";

export interface ManagedZonePrivateVisibilityConfig {
  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  GkeClusters?: Array<ManagedZonePrivateVisibilityConfigGkeCluster>;

  //
  Networks?: Array<ManagedZonePrivateVisibilityConfigNetwork>;
}
