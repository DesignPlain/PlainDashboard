import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TrafficPolicyInstanceArgs {
  // Version of the traffic policy
  trafficPolicyVersion?: number;

  // TTL that you want Amazon Route 53 to assign to all the resource record sets that it creates in the specified hosted zone.
  ttl?: number;

  // ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.
  hostedZoneId?: string;

  // Domain name for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance.
  name?: string;

  // ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.
  trafficPolicyId?: string;
}
export class TrafficPolicyInstance extends Resource {
  // ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.
  public hostedZoneId?: string;

  // Domain name for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance.
  public name?: string;

  // ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.
  public trafficPolicyId?: string;

  // Version of the traffic policy
  public trafficPolicyVersion?: number;

  // TTL that you want Amazon Route 53 to assign to all the resource record sets that it creates in the specified hosted zone.
  public ttl?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "trafficPolicyVersion",
        "Version of the traffic policy",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ttl",
        "TTL that you want Amazon Route 53 to assign to all the resource record sets that it creates in the specified hosted zone.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostedZoneId",
        "ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Domain name for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "trafficPolicyId",
        "ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.",
        [],
        true,
        false,
      ),
    ];
  }
}
