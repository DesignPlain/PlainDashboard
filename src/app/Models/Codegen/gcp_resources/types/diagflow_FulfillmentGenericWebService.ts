import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_FulfillmentGenericWebService {
  // The password for HTTP Basic authentication.
  password?: string;

  // The HTTP request headers to send together with fulfillment requests.
  requestHeaders?: Map<string, string>;

  // The fulfillment URI for receiving POST requests. It must use https protocol.
  uri?: string;

  // The user name for HTTP Basic authentication.
  username?: string;
}

export function diagflow_FulfillmentGenericWebService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "password",
      "The password for HTTP Basic authentication.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "requestHeaders",
      "The HTTP request headers to send together with fulfillment requests.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "The fulfillment URI for receiving POST requests. It must use https protocol.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "The user name for HTTP Basic authentication.",
      [],
      false,
      false,
    ),
  ];
}
