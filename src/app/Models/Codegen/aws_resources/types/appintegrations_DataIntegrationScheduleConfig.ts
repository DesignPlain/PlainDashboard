import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appintegrations_DataIntegrationScheduleConfig {
  // The start date for objects to import in the first flow run as an Unix/epoch timestamp in milliseconds or in ISO-8601 format. This needs to be a time in the past, meaning that the data created or updated before this given date will not be downloaded.
  firstExecutionFrom?: string;

  // The name of the object to pull from the data source. Examples of objects in Salesforce include `Case`, `Account`, or `Lead`.
  object?: string;

  // How often the data should be pulled from data source. Examples include `rate(1 hour)`, `rate(3 hours)`, `rate(1 day)`.
  scheduleExpression?: string;
}

export function appintegrations_DataIntegrationScheduleConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "firstExecutionFrom",
      "The start date for objects to import in the first flow run as an Unix/epoch timestamp in milliseconds or in ISO-8601 format. This needs to be a time in the past, meaning that the data created or updated before this given date will not be downloaded.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "object",
      "The name of the object to pull from the data source. Examples of objects in Salesforce include `Case`, `Account`, or `Lead`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduleExpression",
      "How often the data should be pulled from data source. Examples include `rate(1 hour)`, `rate(3 hours)`, `rate(1 day)`.",
      [],
      true,
      true,
    ),
  ];
}
