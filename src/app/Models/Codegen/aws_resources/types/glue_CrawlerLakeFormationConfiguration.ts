import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CrawlerLakeFormationConfiguration {
  // Required for cross account crawls. For same account crawls as the target data, this can omitted.
  accountId?: string;

  // Specifies whether to use Lake Formation credentials for the crawler instead of the IAM role credentials.
  useLakeFormationCredentials?: boolean;
}

export function glue_CrawlerLakeFormationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "Required for cross account crawls. For same account crawls as the target data, this can omitted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useLakeFormationCredentials",
      "Specifies whether to use Lake Formation credentials for the crawler instead of the IAM role credentials.",
      [],
      false,
      false,
    ),
  ];
}
