import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iot_IndexingConfigurationThingIndexingConfigurationFilter,
  iot_IndexingConfigurationThingIndexingConfigurationFilter_GetTypes,
} from "./iot_IndexingConfigurationThingIndexingConfigurationFilter";
import {
  iot_IndexingConfigurationThingIndexingConfigurationManagedField,
  iot_IndexingConfigurationThingIndexingConfigurationManagedField_GetTypes,
} from "./iot_IndexingConfigurationThingIndexingConfigurationManagedField";
import {
  iot_IndexingConfigurationThingIndexingConfigurationCustomField,
  iot_IndexingConfigurationThingIndexingConfigurationCustomField_GetTypes,
} from "./iot_IndexingConfigurationThingIndexingConfigurationCustomField";

export interface iot_IndexingConfigurationThingIndexingConfiguration {
  // Required if `named_shadow_indexing_mode` is `ON`. Enables to add named shadows filtered by `filter` to fleet indexing configuration.
  filter?: iot_IndexingConfigurationThingIndexingConfigurationFilter;

  // Contains fields that are indexed and whose types are already known by the Fleet Indexing service. See below.
  managedFields?: Array<iot_IndexingConfigurationThingIndexingConfigurationManagedField>;

  // [Named shadow](https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html) indexing mode. Valid values: `ON`, `OFF`. Default: `OFF`.
  namedShadowIndexingMode?: string;

  // Thing connectivity indexing mode. Valid values: `STATUS`, `OFF`. Default: `OFF`.
  thingConnectivityIndexingMode?: string;

  // Thing indexing mode. Valid values: `REGISTRY`, `REGISTRY_AND_SHADOW`, `OFF`.
  thingIndexingMode?: string;

  // Contains custom field names and their data type. See below.
  customFields?: Array<iot_IndexingConfigurationThingIndexingConfigurationCustomField>;

  // Device Defender indexing mode. Valid values: `VIOLATIONS`, `OFF`. Default: `OFF`.
  deviceDefenderIndexingMode?: string;
}

export function iot_IndexingConfigurationThingIndexingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "thingIndexingMode",
      "Thing indexing mode. Valid values: `REGISTRY`, `REGISTRY_AND_SHADOW`, `OFF`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customFields",
      "Contains custom field names and their data type. See below.",
      iot_IndexingConfigurationThingIndexingConfigurationCustomField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceDefenderIndexingMode",
      "Device Defender indexing mode. Valid values: `VIOLATIONS`, `OFF`. Default: `OFF`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filter",
      "Required if `named_shadow_indexing_mode` is `ON`. Enables to add named shadows filtered by `filter` to fleet indexing configuration.",
      iot_IndexingConfigurationThingIndexingConfigurationFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managedFields",
      "Contains fields that are indexed and whose types are already known by the Fleet Indexing service. See below.",
      iot_IndexingConfigurationThingIndexingConfigurationManagedField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namedShadowIndexingMode",
      "[Named shadow](https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html) indexing mode. Valid values: `ON`, `OFF`. Default: `OFF`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "thingConnectivityIndexingMode",
      "Thing connectivity indexing mode. Valid values: `STATUS`, `OFF`. Default: `OFF`.",
      [],
      false,
      false,
    ),
  ];
}
