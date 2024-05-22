import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface route53_getTrafficPolicyDocumentRuleLocation {
  // References to a rule.
  ruleReference?: string;

  // Value of a subdivision.
  subdivision?: string;

  // Value of a continent.
  continent?: string;

  // Value of a country.
  country?: string;

  // References to an endpoint.
  endpointReference?: string;

  // Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints.
  evaluateTargetHealth?: boolean;

  // If you want to associate a health check with the endpoint or rule.
  healthCheck?: string;

  // Indicates whether this set of values represents the default location.
  isDefault?: boolean;
}

export function route53_getTrafficPolicyDocumentRuleLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "isDefault",
      "Indicates whether this set of values represents the default location.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleReference",
      "References to a rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subdivision",
      "Value of a subdivision.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "continent",
      "Value of a continent.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "country",
      "Value of a country.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointReference",
      "References to an endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "evaluateTargetHealth",
      "Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints.",
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
