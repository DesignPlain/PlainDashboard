import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration {
  // Classification within a configuration.
  classification?: string;

  // Map of properties specified within a configuration classification.
  properties?: Map<string, string>;
}

export function emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "classification",
      "Classification within a configuration.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "Map of properties specified within a configuration classification.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
