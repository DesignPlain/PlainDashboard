import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssoadmin_getApplicationProvidersApplicationProviderDisplayData,
  ssoadmin_getApplicationProvidersApplicationProviderDisplayData_GetTypes,
} from "./ssoadmin_getApplicationProvidersApplicationProviderDisplayData";

export interface ssoadmin_getApplicationProvidersApplicationProvider {
  // ARN of the application provider.
  applicationProviderArn?: string;

  // An object describing how IAM Identity Center represents the application provider in the portal. See `display_data` below.
  displayDatas?: Array<ssoadmin_getApplicationProvidersApplicationProviderDisplayData>;

  // Protocol that the application provider uses to perform federation. Valid values are `SAML` and `OAUTH`.
  federationProtocol?: string;
}

export function ssoadmin_getApplicationProvidersApplicationProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applicationProviderArn",
      "ARN of the application provider.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "displayDatas",
      "An object describing how IAM Identity Center represents the application provider in the portal. See `display_data` below.",
      () =>
        ssoadmin_getApplicationProvidersApplicationProviderDisplayData_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "federationProtocol",
      "Protocol that the application provider uses to perform federation. Valid values are `SAML` and `OAUTH`.",
      () => [],
      true,
      false,
    ),
  ];
}
