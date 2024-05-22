import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iot_TopicRuleHttpHttpHeader,
  iot_TopicRuleHttpHttpHeader_GetTypes,
} from "./iot_TopicRuleHttpHttpHeader";

export interface iot_TopicRuleHttp {
  // Custom HTTP header IoT Core should send. It is possible to define more than one custom header.
  httpHeaders?: Array<iot_TopicRuleHttpHttpHeader>;

  // The HTTPS URL.
  url?: string;

  // The HTTPS URL used to verify ownership of `url`.
  confirmationUrl?: string;
}

export function iot_TopicRuleHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom HTTP header IoT Core should send. It is possible to define more than one custom header.",
      iot_TopicRuleHttpHttpHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "The HTTPS URL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "confirmationUrl",
      "The HTTPS URL used to verify ownership of `url`.",
      [],
      false,
      false,
    ),
  ];
}
