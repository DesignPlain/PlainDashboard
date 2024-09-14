import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticsearch_DomainClusterConfigColdStorageOptions {
  // Boolean to enable cold storage for an Elasticsearch domain. Defaults to `false`. Master and ultrawarm nodes must be enabled for cold storage.
  enabled?: boolean;
}

export function elasticsearch_DomainClusterConfigColdStorageOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Boolean to enable cold storage for an Elasticsearch domain. Defaults to `false`. Master and ultrawarm nodes must be enabled for cold storage.",
      () => [],
      false,
      false,
    ),
  ];
}
