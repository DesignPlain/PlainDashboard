import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceReservationAffinitySpecificReservation,
  Compute_InstanceReservationAffinitySpecificReservation_GetTypes,
} from "./Compute_InstanceReservationAffinitySpecificReservation";

export interface Compute_InstanceReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  SpecificReservation?: Compute_InstanceReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}

export function Compute_InstanceReservationAffinity_GetTypes(): DynamicUIProps[] {
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
      Compute_InstanceReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
  ];
}
