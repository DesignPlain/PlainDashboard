import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance,
  Networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance_GetTypes,
} from "./Networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance";

export interface Networkconnectivity_SpokeLinkedRouterApplianceInstances {
  // The list of router appliance instances
  Instances?: Array<Networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance>;

  // A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  SiteToSiteDataTransfer?: boolean;
}

export function Networkconnectivity_SpokeLinkedRouterApplianceInstances_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Instances",
      "The list of router appliance instances",
      Networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "SiteToSiteDataTransfer",
      "A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.",
      [],
      true,
      true,
    ),
  ];
}
