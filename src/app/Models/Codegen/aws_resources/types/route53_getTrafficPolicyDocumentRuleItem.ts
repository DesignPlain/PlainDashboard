import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53_getTrafficPolicyDocumentRuleItem {
  // References to an endpoint.
  endpointReference?: string;

  // If you want to associate a health check with the endpoint or rule.
  healthCheck?: string;
}

export function route53_getTrafficPolicyDocumentRuleItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpointReference",
      "References to an endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "healthCheck",
      "If you want to associate a health check with the endpoint or rule.",
      [],
      false,
      false,
    ),
  ];
}
