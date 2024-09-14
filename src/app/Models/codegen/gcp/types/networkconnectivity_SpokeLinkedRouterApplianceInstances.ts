import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance,
  networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance_GetTypes,
} from "./networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance";

export interface networkconnectivity_SpokeLinkedRouterApplianceInstances {
  // The list of router appliance instances
  instances?: Array<networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance>;

  // A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  siteToSiteDataTransfer?: boolean;
}

export function networkconnectivity_SpokeLinkedRouterApplianceInstances_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "instances",
      "The list of router appliance instances",
      () =>
        networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "siteToSiteDataTransfer",
      "A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.",
      () => [],
      true,
      true,
    ),
  ];
}
