import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource,
  route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource_GetTypes,
} from "./route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource";

export interface route53recoveryreadiness_ResourceSetResourceDnsTargetResource {
  // Type of DNS Record of target resource.
  recordType?: string;

  // Target resource the R53 record specified with the above params points to.
  targetResource?: route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource;

  // DNS Name that acts as the ingress point to a portion of application.
  domainName?: string;

  // Hosted Zone ARN that contains the DNS record with the provided name of target resource.
  hostedZoneArn?: string;

  // Route53 record set id to uniquely identify a record given a `domain_name` and a `record_type`.
  recordSetId?: string;
}

export function route53recoveryreadiness_ResourceSetResourceDnsTargetResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recordSetId",
      "Route53 record set id to uniquely identify a record given a `domain_name` and a `record_type`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recordType",
      "Type of DNS Record of target resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "targetResource",
      "Target resource the R53 record specified with the above params points to.",
      route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "DNS Name that acts as the ingress point to a portion of application.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostedZoneArn",
      "Hosted Zone ARN that contains the DNS record with the provided name of target resource.",
      [],
      false,
      false,
    ),
  ];
}
