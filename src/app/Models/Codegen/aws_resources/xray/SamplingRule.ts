import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SamplingRuleArgs {
  // The name of the sampling rule.
  ruleName?: string;

  // Matches the `name` that the service uses to identify itself in segments.
  serviceName?: string;

  // The percentage of matching requests to instrument, after the reservoir is exhausted.
  fixedRate?: number;

  // Matches the hostname from a request URL.
  host?: string;

  // Matches the HTTP method of a request.
  httpMethod?: string;

  // A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
  reservoirSize?: number;

  // Matches the ARN of the AWS resource on which the service runs.
  resourceArn?: string;

  // The version of the sampling rule format (`1` )
  version?: number;

  // Matches attributes derived from the request.
  attributes?: Map<string, string>;

  // The priority of the sampling rule.
  priority?: number;

  // Matches the `origin` that the service uses to identify its type in segments.
  serviceType?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;

  // Matches the path from a request URL.
  urlPath?: string;
}
export class SamplingRule extends Resource {
  // Matches the `origin` that the service uses to identify its type in segments.
  public serviceType?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // Matches the path from a request URL.
  public urlPath?: string;

  // The ARN of the sampling rule.
  public arn?: string;

  // Matches attributes derived from the request.
  public attributes?: Map<string, string>;

  // The percentage of matching requests to instrument, after the reservoir is exhausted.
  public fixedRate?: number;

  // The priority of the sampling rule.
  public priority?: number;

  // Matches the hostname from a request URL.
  public host?: string;

  // Matches the ARN of the AWS resource on which the service runs.
  public resourceArn?: string;

  // The name of the sampling rule.
  public ruleName?: string;

  // Matches the `name` that the service uses to identify itself in segments.
  public serviceName?: string;

  // Matches the HTTP method of a request.
  public httpMethod?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
  public reservoirSize?: number;

  // The version of the sampling rule format (`1` )
  public version?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "The priority of the sampling rule.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceType",
        "Matches the `origin` that the service uses to identify its type in segments.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "httpMethod",
        "Matches the HTTP method of a request.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "Matches the ARN of the AWS resource on which the service runs.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "version",
        "The version of the sampling rule format (`1` )",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "host",
        "Matches the hostname from a request URL.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "reservoirSize",
        "A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "attributes",
        "Matches attributes derived from the request.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "urlPath",
        "Matches the path from a request URL.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleName",
        "The name of the sampling rule.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceName",
        "Matches the `name` that the service uses to identify itself in segments.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "fixedRate",
        "The percentage of matching requests to instrument, after the reservoir is exhausted.",
        [],
        true,
        false,
      ),
    ];
  }
}
