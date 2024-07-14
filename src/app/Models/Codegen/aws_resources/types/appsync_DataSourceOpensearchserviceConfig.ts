import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appsync_DataSourceOpensearchserviceConfig {
  // HTTP endpoint of the Elasticsearch domain.
  endpoint?: string;

  // AWS region of the DynamoDB table. Defaults to current region.
  region?: string;
}

export function appsync_DataSourceOpensearchserviceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "HTTP endpoint of the Elasticsearch domain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "AWS region of the DynamoDB table. Defaults to current region.",
      [],
      false,
      false,
    ),
  ];
}
