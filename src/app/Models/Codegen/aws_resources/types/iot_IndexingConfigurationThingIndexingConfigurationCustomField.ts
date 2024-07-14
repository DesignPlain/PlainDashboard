import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_IndexingConfigurationThingIndexingConfigurationCustomField {
  // The name of the field.
  name?: string;

  // The data type of the field. Valid values: `Number`, `String`, `Boolean`.
  type?: string;
}

export function iot_IndexingConfigurationThingIndexingConfigurationCustomField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The data type of the field. Valid values: `Number`, `String`, `Boolean`.",
      [],
      false,
      false,
    ),
  ];
}
