import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  route53_RecordGeoproximityRoutingPolicy,
  route53_RecordGeoproximityRoutingPolicy_GetTypes,
} from "../types/route53_RecordGeoproximityRoutingPolicy";
import {
  route53_RecordAlias,
  route53_RecordAlias_GetTypes,
} from "../types/route53_RecordAlias";
import {
  route53_RecordFailoverRoutingPolicy,
  route53_RecordFailoverRoutingPolicy_GetTypes,
} from "../types/route53_RecordFailoverRoutingPolicy";
import {
  route53_RecordWeightedRoutingPolicy,
  route53_RecordWeightedRoutingPolicy_GetTypes,
} from "../types/route53_RecordWeightedRoutingPolicy";
import {
  route53_RecordCidrRoutingPolicy,
  route53_RecordCidrRoutingPolicy_GetTypes,
} from "../types/route53_RecordCidrRoutingPolicy";
import {
  route53_RecordLatencyRoutingPolicy,
  route53_RecordLatencyRoutingPolicy_GetTypes,
} from "../types/route53_RecordLatencyRoutingPolicy";
import {
  route53_RecordGeolocationRoutingPolicy,
  route53_RecordGeolocationRoutingPolicy_GetTypes,
} from "../types/route53_RecordGeolocationRoutingPolicy";

export interface RecordArgs {
  // A block indicating the routing behavior when associated health check fails. Conflicts with any other routing policy. Documented below.
  failoverRoutingPolicies?: Array<route53_RecordFailoverRoutingPolicy>;

  // A block indicating a weighted routing policy. Conflicts with any other routing policy. Documented below.
  weightedRoutingPolicies?: Array<route53_RecordWeightedRoutingPolicy>;

  // A string list of records. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add `\"\"` inside the provider configuration string (e.g., `"first255characters\"\"morecharacters"`).
  records?: Array<string>;

  // A block indicating a routing policy based on the IP network ranges of requestors. Conflicts with any other routing policy. Documented below.
  cidrRoutingPolicy?: route53_RecordCidrRoutingPolicy;

  // A block indicating a routing policy based on the latency between the requestor and an AWS region. Conflicts with any other routing policy. Documented below.
  latencyRoutingPolicies?: Array<route53_RecordLatencyRoutingPolicy>;

  // Set to `true` to indicate a multivalue answer routing policy. Conflicts with any other routing policy.
  multivalueAnswerRoutingPolicy?: boolean;

  // The name of the record.
  name?: string;

  // The TTL of the record.
  ttl?: number;

  // A block indicating a routing policy based on the geolocation of the requestor. Conflicts with any other routing policy. Documented below.
  geolocationRoutingPolicies?: Array<route53_RecordGeolocationRoutingPolicy>;

  // The health check the record should be associated with.
  healthCheckId?: string;

  // A block indicating a routing policy based on the geoproximity of the requestor. Conflicts with any other routing policy. Documented below.
  geoproximityRoutingPolicy?: route53_RecordGeoproximityRoutingPolicy;

  // Unique identifier to differentiate records with routing policies from one another. Required if using `cidr_routing_policy`, `failover_routing_policy`, `geolocation_routing_policy`,`geoproximity_routing_policy`, `latency_routing_policy`, `multivalue_answer_routing_policy`, or `weighted_routing_policy`.
  setIdentifier?: string;

  // The record type. Valid values are `A`, `AAAA`, `CAA`, `CNAME`, `DS`, `MX`, `NAPTR`, `NS`, `PTR`, `SOA`, `SPF`, `SRV` and `TXT`.
  type?: string;

  // The ID of the hosted zone to contain this record.
  zoneId?: string;

  /*
An alias block. Conflicts with `ttl` & `records`.
Documented below.
*/
  aliases?: Array<route53_RecordAlias>;

  /*
Allow creation of this record to overwrite an existing record, if any. This does not affect the ability to update the record using this provider and does not prevent other resources within this provider or manual Route 53 changes outside this provider from overwriting this record. `false` by default. This configuration is not recommended for most environments.

Exactly one of `records` or `alias` must be specified: this determines whether it's an alias record.
*/
  allowOverwrite?: boolean;
}
export class Record extends DS_Resource {
  // A block indicating a routing policy based on the latency between the requestor and an AWS region. Conflicts with any other routing policy. Documented below.
  public latencyRoutingPolicies?: Array<route53_RecordLatencyRoutingPolicy>;

  // The name of the record.
  public name?: string;

  // The TTL of the record.
  public ttl?: number;

  // A block indicating a weighted routing policy. Conflicts with any other routing policy. Documented below.
  public weightedRoutingPolicies?: Array<route53_RecordWeightedRoutingPolicy>;

  // A block indicating the routing behavior when associated health check fails. Conflicts with any other routing policy. Documented below.
  public failoverRoutingPolicies?: Array<route53_RecordFailoverRoutingPolicy>;

  // A block indicating a routing policy based on the geoproximity of the requestor. Conflicts with any other routing policy. Documented below.
  public geoproximityRoutingPolicy?: route53_RecordGeoproximityRoutingPolicy;

  // A string list of records. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add `\"\"` inside the provider configuration string (e.g., `"first255characters\"\"morecharacters"`).
  public records?: Array<string>;

  /*
An alias block. Conflicts with `ttl` & `records`.
Documented below.
*/
  public aliases?: Array<route53_RecordAlias>;

  // [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) built using the zone domain and `name`.
  public fqdn?: string;

  // Set to `true` to indicate a multivalue answer routing policy. Conflicts with any other routing policy.
  public multivalueAnswerRoutingPolicy?: boolean;

  // Unique identifier to differentiate records with routing policies from one another. Required if using `cidr_routing_policy`, `failover_routing_policy`, `geolocation_routing_policy`,`geoproximity_routing_policy`, `latency_routing_policy`, `multivalue_answer_routing_policy`, or `weighted_routing_policy`.
  public setIdentifier?: string;

  // The ID of the hosted zone to contain this record.
  public zoneId?: string;

  /*
Allow creation of this record to overwrite an existing record, if any. This does not affect the ability to update the record using this provider and does not prevent other resources within this provider or manual Route 53 changes outside this provider from overwriting this record. `false` by default. This configuration is not recommended for most environments.

Exactly one of `records` or `alias` must be specified: this determines whether it's an alias record.
*/
  public allowOverwrite?: boolean;

  // A block indicating a routing policy based on the geolocation of the requestor. Conflicts with any other routing policy. Documented below.
  public geolocationRoutingPolicies?: Array<route53_RecordGeolocationRoutingPolicy>;

  // The record type. Valid values are `A`, `AAAA`, `CAA`, `CNAME`, `DS`, `MX`, `NAPTR`, `NS`, `PTR`, `SOA`, `SPF`, `SRV` and `TXT`.
  public type?: string;

  // A block indicating a routing policy based on the IP network ranges of requestors. Conflicts with any other routing policy. Documented below.
  public cidrRoutingPolicy?: route53_RecordCidrRoutingPolicy;

  // The health check the record should be associated with.
  public healthCheckId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "failoverRoutingPolicies",
        "A block indicating the routing behavior when associated health check fails. Conflicts with any other routing policy. Documented below.",
        () => route53_RecordFailoverRoutingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "weightedRoutingPolicies",
        "A block indicating a weighted routing policy. Conflicts with any other routing policy. Documented below.",
        () => route53_RecordWeightedRoutingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "healthCheckId",
        "The health check the record should be associated with.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowOverwrite",
        "Allow creation of this record to overwrite an existing record, if any. This does not affect the ability to update the record using this provider and does not prevent other resources within this provider or manual Route 53 changes outside this provider from overwriting this record. `false` by default. This configuration is not recommended for most environments.\n\nExactly one of `records` or `alias` must be specified: this determines whether it's an alias record.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "records",
        'A string list of records. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add `\\"\\"` inside the provider configuration string (e.g., `"first255characters\\"\\"morecharacters"`).',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multivalueAnswerRoutingPolicy",
        "Set to `true` to indicate a multivalue answer routing policy. Conflicts with any other routing policy.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "geolocationRoutingPolicies",
        "A block indicating a routing policy based on the geolocation of the requestor. Conflicts with any other routing policy. Documented below.",
        () => route53_RecordGeolocationRoutingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "aliases",
        "An alias block. Conflicts with `ttl` & `records`.\nDocumented below.",
        () => route53_RecordAlias_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cidrRoutingPolicy",
        "A block indicating a routing policy based on the IP network ranges of requestors. Conflicts with any other routing policy. Documented below.",
        () => route53_RecordCidrRoutingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ttl",
        "The TTL of the record.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The record type. Valid values are `A`, `AAAA`, `CAA`, `CNAME`, `DS`, `MX`, `NAPTR`, `NS`, `PTR`, `SOA`, `SPF`, `SRV` and `TXT`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "zoneId",
        "The ID of the hosted zone to contain this record.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "latencyRoutingPolicies",
        "A block indicating a routing policy based on the latency between the requestor and an AWS region. Conflicts with any other routing policy. Documented below.",
        () => route53_RecordLatencyRoutingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the record.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "geoproximityRoutingPolicy",
        "A block indicating a routing policy based on the geoproximity of the requestor. Conflicts with any other routing policy. Documented below.",
        () => route53_RecordGeoproximityRoutingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "setIdentifier",
        "Unique identifier to differentiate records with routing policies from one another. Required if using `cidr_routing_policy`, `failover_routing_policy`, `geolocation_routing_policy`,`geoproximity_routing_policy`, `latency_routing_policy`, `multivalue_answer_routing_policy`, or `weighted_routing_policy`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
