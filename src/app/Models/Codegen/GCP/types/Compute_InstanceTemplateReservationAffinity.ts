import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceTemplateReservationAffinitySpecificReservation,
  Compute_InstanceTemplateReservationAffinitySpecificReservation_GetTypes,
} from "./Compute_InstanceTemplateReservationAffinitySpecificReservation";

export interface Compute_InstanceTemplateReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  SpecificReservation?: Compute_InstanceTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}

export function Compute_InstanceTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of reservation from which this instance can consume resources.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SpecificReservation",
      "Specifies the label selector for the reservation to use..\nStructure is documented below.",
      Compute_InstanceTemplateReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
  ];
}
