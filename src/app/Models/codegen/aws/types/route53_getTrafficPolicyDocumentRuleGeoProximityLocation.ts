import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface route53_getTrafficPolicyDocumentRuleGeoProximityLocation {
  // If your endpoint is an AWS resource, specify the AWS Region that you created the resource in.
  region?: string;

  // References to a rule.
  ruleReference?: string;

  // Specify a value for `bias` if you want to route more traffic to an endpoint from nearby endpoints (positive values) or route less traffic to an endpoint (negative values).
  bias?: string;

  // References to an endpoint.
  endpointReference?: string;

  // Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints.
  evaluateTargetHealth?: boolean;

  // If you want to associate a health check with the endpoint or rule.
  healthCheck?: string;

  // Represents the location south (negative) or north (positive) of the equator. Valid values are -90 degrees to 90 degrees.
  latitude?: string;

  // Represents the location west (negative) or east (positive) of the prime meridian. Valid values are -180 degrees to 180 degrees.
  longitude?: string;
}

export function route53_getTrafficPolicyDocumentRuleGeoProximityLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "If your endpoint is an AWS resource, specify the AWS Region that you created the resource in.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleReference",
      "References to a rule.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bias",
      "Specify a value for `bias` if you want to route more traffic to an endpoint from nearby endpoints (positive values) or route less traffic to an endpoint (negative values).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointReference",
      "References to an endpoint.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "evaluateTargetHealth",
      "Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "healthCheck",
      "If you want to associate a health check with the endpoint or rule.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "latitude",
      "Represents the location south (negative) or north (positive) of the equator. Valid values are -90 degrees to 90 degrees.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "longitude",
      "Represents the location west (negative) or east (positive) of the prime meridian. Valid values are -180 degrees to 180 degrees.",
      () => [],
      false,
      false,
    ),
  ];
}
