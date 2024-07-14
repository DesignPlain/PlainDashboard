import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource,
  route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource_GetTypes,
} from "./route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource";
import {
  route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource,
  route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource_GetTypes,
} from "./route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource";

export interface route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource {
  // NLB resource a DNS Target Resource points to. Required if `r53_resource` is not set.
  nlbResource?: route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource;

  // Route53 resource a DNS Target Resource record points to.
  r53Resource?: route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource;
}

export function route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nlbResource",
      "NLB resource a DNS Target Resource points to. Required if `r53_resource` is not set.",
      route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "r53Resource",
      "Route53 resource a DNS Target Resource record points to.",
      route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource_GetTypes(),
      false,
      false,
    ),
  ];
}
