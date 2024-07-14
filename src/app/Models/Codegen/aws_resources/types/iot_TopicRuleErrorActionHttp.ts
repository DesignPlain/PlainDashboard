import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iot_TopicRuleErrorActionHttpHttpHeader,
  iot_TopicRuleErrorActionHttpHttpHeader_GetTypes,
} from "./iot_TopicRuleErrorActionHttpHttpHeader";

export interface iot_TopicRuleErrorActionHttp {
  // The HTTPS URL used to verify ownership of `url`.
  confirmationUrl?: string;

  // Custom HTTP header IoT Core should send. It is possible to define more than one custom header.
  httpHeaders?: Array<iot_TopicRuleErrorActionHttpHttpHeader>;

  // The HTTPS URL.
  url?: string;
}

export function iot_TopicRuleErrorActionHttp_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom HTTP header IoT Core should send. It is possible to define more than one custom header.",
      iot_TopicRuleErrorActionHttpHttpHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
