import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterBinaryAuthorization {
  // Enable Binary Authorization for this cluster.
  Enabled?: boolean;

  // Mode of operation for Binary Authorization policy evaluation.
  EvaluationMode?: string;
}

export function Container_getClusterBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable Binary Authorization for this cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EvaluationMode",
      "Mode of operation for Binary Authorization policy evaluation.",
      [],
      true,
      false,
    ),
  ];
}
