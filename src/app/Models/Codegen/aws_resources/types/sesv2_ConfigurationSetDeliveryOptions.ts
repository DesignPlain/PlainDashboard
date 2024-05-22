import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sesv2_ConfigurationSetDeliveryOptions {
  // The name of the dedicated IP pool to associate with the configuration set.
  sendingPoolName?: string;

  // Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). Valid values: `REQUIRE`, `OPTIONAL`.
  tlsPolicy?: string;
}

export function sesv2_ConfigurationSetDeliveryOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tlsPolicy",
      "Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). Valid values: `REQUIRE`, `OPTIONAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sendingPoolName",
      "The name of the dedicated IP pool to associate with the configuration set.",
      [],
      false,
      false,
    ),
  ];
}
