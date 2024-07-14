import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration {
  // Classification within a configuration.
  classification?: string;

  // Map of properties specified within a configuration classification.
  properties?: Map<string, string>;
}

export function emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "Map of properties specified within a configuration classification.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "classification",
      "Classification within a configuration.",
      [],
      false,
      true,
    ),
  ];
}
