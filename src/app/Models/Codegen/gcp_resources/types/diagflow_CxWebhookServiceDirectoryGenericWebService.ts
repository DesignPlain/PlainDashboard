import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_CxWebhookServiceDirectoryGenericWebService {
  // Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
  allowedCaCerts?: Array<string>;

  // The HTTP request headers to send together with webhook requests.
  requestHeaders?: Map<string, string>;

  // Whether to use speech adaptation for speech recognition.
  uri?: string;
}

export function diagflow_CxWebhookServiceDirectoryGenericWebService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedCaCerts",
      "Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "requestHeaders",
      "The HTTP request headers to send together with webhook requests.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "Whether to use speech adaptation for speech recognition.",
      [],
      true,
      false,
    ),
  ];
}
