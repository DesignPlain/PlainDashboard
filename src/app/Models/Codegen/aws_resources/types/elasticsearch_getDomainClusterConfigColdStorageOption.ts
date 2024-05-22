import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticsearch_getDomainClusterConfigColdStorageOption {
  // Whether node to node encryption is enabled.
  enabled?: boolean;
}

export function elasticsearch_getDomainClusterConfigColdStorageOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether node to node encryption is enabled.",
      [],
      true,
      false,
    ),
  ];
}
