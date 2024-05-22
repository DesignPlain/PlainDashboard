import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface resourcegroupstaggingapi_getResourcesTagFilter {
  // One part of a key-value pair that makes up a tag.
  key?: string;

  // Optional part of a key-value pair that make up a tag.
  values?: Array<string>;
}

export function resourcegroupstaggingapi_getResourcesTagFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Optional part of a key-value pair that make up a tag.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "One part of a key-value pair that makes up a tag.",
      [],
      true,
      false,
    ),
  ];
}
