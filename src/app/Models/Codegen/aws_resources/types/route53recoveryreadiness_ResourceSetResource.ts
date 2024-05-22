import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  route53recoveryreadiness_ResourceSetResourceDnsTargetResource,
  route53recoveryreadiness_ResourceSetResourceDnsTargetResource_GetTypes,
} from "./route53recoveryreadiness_ResourceSetResourceDnsTargetResource";

export interface route53recoveryreadiness_ResourceSetResource {
  //
  componentId?: string;

  // Component for DNS/Routing Control Readiness Checks.
  dnsTargetResource?: route53recoveryreadiness_ResourceSetResourceDnsTargetResource;

  // Recovery group ARN or cell ARN that contains this resource set.
  readinessScopes?: Array<string>;

  // ARN of the resource.
  resourceArn?: string;
}

export function route53recoveryreadiness_ResourceSetResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "componentId", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "dnsTargetResource",
      "Component for DNS/Routing Control Readiness Checks.",
      route53recoveryreadiness_ResourceSetResourceDnsTargetResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "readinessScopes",
      "Recovery group ARN or cell ARN that contains this resource set.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "ARN of the resource.",
      [],
      false,
      false,
    ),
  ];
}
