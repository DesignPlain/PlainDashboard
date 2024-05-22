import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity {
  // Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION
  consumeReservationType?: string;

  // Corresponds to the label key of reservation resource.
  key?: string;

  // Corresponds to the label values of reservation resource.
  values?: Array<string>;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "consumeReservationType",
      "Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Corresponds to the label key of reservation resource.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Corresponds to the label values of reservation resource.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
