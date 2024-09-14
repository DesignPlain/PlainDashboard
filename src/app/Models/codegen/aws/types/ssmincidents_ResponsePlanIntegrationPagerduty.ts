import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssmincidents_ResponsePlanIntegrationPagerduty {
  // The name of the response plan.
  name?: string;

  /*
The ID of the AWS Secrets Manager secret that stores your PagerDuty key &mdash; either a General Access REST API Key or User Token REST API Key &mdash; and other user credentials.

For more information about the constraints for each field, see [CreateResponsePlan](https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateResponsePlan.html) in the -AWS Systems Manager Incident Manager API Reference-.
*/
  secretId?: string;

  // The ID of the PagerDuty service that the response plan associated with the incident at launch.
  serviceId?: string;
}

export function ssmincidents_ResponsePlanIntegrationPagerduty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceId",
      "The ID of the PagerDuty service that the response plan associated with the incident at launch.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the response plan.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretId",
      "The ID of the AWS Secrets Manager secret that stores your PagerDuty key &mdash; either a General Access REST API Key or User Token REST API Key &mdash; and other user credentials.\n\nFor more information about the constraints for each field, see [CreateResponsePlan](https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateResponsePlan.html) in the *AWS Systems Manager Incident Manager API Reference*.",
      () => [],
      true,
      false,
    ),
  ];
}
