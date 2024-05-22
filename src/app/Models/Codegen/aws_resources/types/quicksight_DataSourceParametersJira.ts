import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSourceParametersJira {
  // The base URL of the Jira instance's site to which to connect.
  siteBaseUrl?: string;
}

export function quicksight_DataSourceParametersJira_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "siteBaseUrl",
      "The base URL of the Jira instance's site to which to connect.",
      [],
      true,
      false,
    ),
  ];
}
