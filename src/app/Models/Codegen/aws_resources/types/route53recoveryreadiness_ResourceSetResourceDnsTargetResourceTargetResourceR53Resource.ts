import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource {
  // DNS Name that acts as the ingress point to a portion of application.
  domainName?: string;

  // Route53 record set id to uniquely identify a record given a `domain_name` and a `record_type`.
  recordSetId?: string;
}

export function route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource_GetTypes(): DynamicUIProps[] {
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
      "domainName",
      "DNS Name that acts as the ingress point to a portion of application.",
      [],
      false,
      false,
    ),
  ];
}
