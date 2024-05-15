import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxWebhookGenericWebService {
  // Whether to use speech adaptation for speech recognition.
  Uri?: string;

  // Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
  AllowedCaCerts?: Array<string>;

  // The HTTP request headers to send together with webhook requests.
  RequestHeaders?: Map<string, string>;
}

export function Diagflow_CxWebhookGenericWebService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "Whether to use speech adaptation for speech recognition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowedCaCerts",
      "Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "RequestHeaders",
      "The HTTP request headers to send together with webhook requests.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
