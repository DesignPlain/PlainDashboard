import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iot_IndexingConfigurationThingGroupIndexingConfigurationCustomField,
  iot_IndexingConfigurationThingGroupIndexingConfigurationCustomField_GetTypes,
} from "./iot_IndexingConfigurationThingGroupIndexingConfigurationCustomField";
import {
  iot_IndexingConfigurationThingGroupIndexingConfigurationManagedField,
  iot_IndexingConfigurationThingGroupIndexingConfigurationManagedField_GetTypes,
} from "./iot_IndexingConfigurationThingGroupIndexingConfigurationManagedField";

export interface iot_IndexingConfigurationThingGroupIndexingConfiguration {
  // A list of thing group fields to index. This list cannot contain any managed fields. See below.
  customFields?: Array<iot_IndexingConfigurationThingGroupIndexingConfigurationCustomField>;

  // Contains fields that are indexed and whose types are already known by the Fleet Indexing service. See below.
  managedFields?: Array<iot_IndexingConfigurationThingGroupIndexingConfigurationManagedField>;

  // Thing group indexing mode. Valid values: `OFF`, `ON`.
  thingGroupIndexingMode?: string;
}

export function iot_IndexingConfigurationThingGroupIndexingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customFields",
      "A list of thing group fields to index. This list cannot contain any managed fields. See below.",
      iot_IndexingConfigurationThingGroupIndexingConfigurationCustomField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managedFields",
      "Contains fields that are indexed and whose types are already known by the Fleet Indexing service. See below.",
      iot_IndexingConfigurationThingGroupIndexingConfigurationManagedField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "thingGroupIndexingMode",
      "Thing group indexing mode. Valid values: `OFF`, `ON`.",
      [],
      true,
      false,
    ),
  ];
}
