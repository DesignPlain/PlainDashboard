import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface pinpoint_AppCampaignHook {
  // What mode Lambda should be invoked in. Valid values for this parameter are `DELIVERY`, `FILTER`.
  mode?: string;

  // Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request. Conflicts with `lambda_function_name`
  webUrl?: string;

  // Lambda function name or ARN to be called for delivery. Conflicts with `web_url`
  lambdaFunctionName?: string;
}

export function pinpoint_AppCampaignHook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "What mode Lambda should be invoked in. Valid values for this parameter are `DELIVERY`, `FILTER`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "webUrl",
      "Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request. Conflicts with `lambda_function_name`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambdaFunctionName",
      "Lambda function name or ARN to be called for delivery. Conflicts with `web_url`",
      [],
      false,
      false,
    ),
  ];
}
