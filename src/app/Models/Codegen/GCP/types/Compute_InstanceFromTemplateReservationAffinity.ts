import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceFromTemplateReservationAffinitySpecificReservation,
  Compute_InstanceFromTemplateReservationAffinitySpecificReservation_GetTypes,
} from "./Compute_InstanceFromTemplateReservationAffinitySpecificReservation";

export interface Compute_InstanceFromTemplateReservationAffinity {
  // Specifies the label selector for the reservation to use.
  SpecificReservation?: Compute_InstanceFromTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}

export function Compute_InstanceFromTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SpecificReservation",
      "Specifies the label selector for the reservation to use.",
      Compute_InstanceFromTemplateReservationAffinitySpecificReservation_GetTypes(),
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
