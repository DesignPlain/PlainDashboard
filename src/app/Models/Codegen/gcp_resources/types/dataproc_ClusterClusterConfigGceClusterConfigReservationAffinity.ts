import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity {
  // Corresponds to the type of reservation consumption.
  consumeReservationType?: string;

  // Corresponds to the label key of reservation resource.
  key?: string;

  // Corresponds to the label values of reservation resource.
  values?: Array<string>;
}

export function dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "consumeReservationType",
      "Corresponds to the type of reservation consumption.",
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
