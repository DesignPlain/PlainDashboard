import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssmincidents_getResponsePlanIntegrationPagerduty {
  // The ID of the PagerDuty service that the response plan associates with an incident when it launches.
  serviceId?: string;

  // The name of the PagerDuty configuration.
  name?: string;

  // The ID of the AWS Secrets Manager secret that stores your PagerDuty key &mdash; either a General Access REST API Key or User Token REST API Key &mdash; and other user credentials.
  secretId?: string;
}

export function ssmincidents_getResponsePlanIntegrationPagerduty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceId",
      "The ID of the PagerDuty service that the response plan associates with an incident when it launches.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the PagerDuty configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretId",
      "The ID of the AWS Secrets Manager secret that stores your PagerDuty key &mdash; either a General Access REST API Key or User Token REST API Key &mdash; and other user credentials.",
      [],
      true,
      false,
    ),
  ];
}
