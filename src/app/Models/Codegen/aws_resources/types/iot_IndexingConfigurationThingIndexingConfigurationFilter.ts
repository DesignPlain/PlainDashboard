import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_IndexingConfigurationThingIndexingConfigurationFilter {
  // List of shadow names that you select to index.
  namedShadowNames?: Array<string>;
}

export function iot_IndexingConfigurationThingIndexingConfigurationFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "namedShadowNames",
      "List of shadow names that you select to index.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
