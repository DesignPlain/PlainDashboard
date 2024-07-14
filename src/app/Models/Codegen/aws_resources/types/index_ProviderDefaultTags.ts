import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface index_ProviderDefaultTags {
  // Resource tags to default across all resources
  tags?: Map<string, string>;
}

export function index_ProviderDefaultTags_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Resource tags to default across all resources",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
