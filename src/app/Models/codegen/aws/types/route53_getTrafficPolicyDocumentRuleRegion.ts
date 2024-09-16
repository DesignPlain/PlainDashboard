import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface route53_getTrafficPolicyDocumentRuleRegion {
  // Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints.
  evaluateTargetHealth?: boolean;

  // If you want to associate a health check with the endpoint or rule.
  healthCheck?: string;

  // Region code for the AWS Region that you created the resource in.
  region?: string;

  // References to a rule.
  ruleReference?: string;

  // References to an endpoint.
  endpointReference?: string;
}

export function route53_getTrafficPolicyDocumentRuleRegion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ruleReference',
      'References to a rule.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'endpointReference',
      'References to an endpoint.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'evaluateTargetHealth',
      'Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'healthCheck',
      'If you want to associate a health check with the endpoint or rule.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'Region code for the AWS Region that you created the resource in.',
      () => [],
      false,
      false,
    ),
  ];
}
