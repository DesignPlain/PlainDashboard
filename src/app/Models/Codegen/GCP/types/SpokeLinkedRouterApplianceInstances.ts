import { SpokeLinkedRouterApplianceInstancesInstance } from "./SpokeLinkedRouterApplianceInstancesInstance";

export interface SpokeLinkedRouterApplianceInstances {
  // The list of router appliance instances
  Instances?: Array<SpokeLinkedRouterApplianceInstancesInstance>;

  // A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  SiteToSiteDataTransfer?: boolean;
}
