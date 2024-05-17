import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination {
  // Host
  Host?: string;

  // port number
  Port?: number;

  // Service Attachment
  ServiceAttachment?: string;
}

export function Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Host", "Host", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "port number",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAttachment",
      "Service Attachment",
      [],
      false,
      false,
    ),
  ];
}
