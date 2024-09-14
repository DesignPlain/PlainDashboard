import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appsync_DataSourceOpensearchserviceConfig {
  // HTTP endpoint of the OpenSearch domain.
  endpoint?: string;

  // AWS region of the OpenSearch domain. Defaults to current region.
  region?: string;
}

export function appsync_DataSourceOpensearchserviceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "AWS region of the OpenSearch domain. Defaults to current region.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "HTTP endpoint of the OpenSearch domain.",
      () => [],
      true,
      false,
    ),
  ];
}
