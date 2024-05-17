import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_FulfillmentGenericWebService {
  // The fulfillment URI for receiving POST requests. It must use https protocol.
  Uri?: string;

  // The user name for HTTP Basic authentication.
  Username?: string;

  // The password for HTTP Basic authentication.
  Password?: string;

  // The HTTP request headers to send together with fulfillment requests.
  RequestHeaders?: Map<string, string>;
}

export function Diagflow_FulfillmentGenericWebService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "The fulfillment URI for receiving POST requests. It must use https protocol.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "The user name for HTTP Basic authentication.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "The password for HTTP Basic authentication.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "RequestHeaders",
      "The HTTP request headers to send together with fulfillment requests.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
