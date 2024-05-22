import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterBinaryAuthorization {
  // Enable Binary Authorization for this cluster.
  enabled?: boolean;

  // Mode of operation for Binary Authorization policy evaluation.
  evaluationMode?: string;
}

export function container_getClusterBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable Binary Authorization for this cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "evaluationMode",
      "Mode of operation for Binary Authorization policy evaluation.",
      [],
      true,
      false,
    ),
  ];
}
