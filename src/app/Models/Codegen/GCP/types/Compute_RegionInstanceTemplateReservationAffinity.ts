import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionInstanceTemplateReservationAffinitySpecificReservation,
  Compute_RegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes,
} from "./Compute_RegionInstanceTemplateReservationAffinitySpecificReservation";

export interface Compute_RegionInstanceTemplateReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  SpecificReservation?: Compute_RegionInstanceTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}

export function Compute_RegionInstanceTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SpecificReservation",
      "Specifies the label selector for the reservation to use..\nStructure is documented below.",
      Compute_RegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of reservation from which this instance can consume resources.",
      [],
      true,
      true,
    ),
  ];
}
