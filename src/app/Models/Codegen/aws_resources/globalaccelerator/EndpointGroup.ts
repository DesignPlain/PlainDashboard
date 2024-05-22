import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  globalaccelerator_EndpointGroupPortOverride,
  globalaccelerator_EndpointGroupPortOverride_GetTypes,
} from "../types/globalaccelerator_EndpointGroupPortOverride";
import {
  globalaccelerator_EndpointGroupEndpointConfiguration,
  globalaccelerator_EndpointGroupEndpointConfiguration_GetTypes,
} from "../types/globalaccelerator_EndpointGroupEndpointConfiguration";

export interface EndpointGroupArgs {
  // Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. Fields documented below.
  portOverrides?: Array<globalaccelerator_EndpointGroupPortOverride>;

  // The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener. The default value is 100.
  trafficDialPercentage?: number;

  // The name of the AWS Region where the endpoint group is located.
  endpointGroupRegion?: string;

  // The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.
  healthCheckIntervalSeconds?: number;

  /*
The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.
the provider will only perform drift detection of its value when present in a configuration.
*/
  healthCheckPort?: number;

  // The Amazon Resource Name (ARN) of the listener.
  listenerArn?: string;

  // The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
  thresholdCount?: number;

  // The list of endpoint objects. Fields documented below.
  endpointConfigurations?: Array<globalaccelerator_EndpointGroupEndpointConfiguration>;

  // If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (`/`). the provider will only perform drift detection of its value when present in a configuration.
  healthCheckPath?: string;

  // The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
  healthCheckProtocol?: string;
}
export class EndpointGroup extends Resource {
  // Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. Fields documented below.
  public portOverrides?: Array<globalaccelerator_EndpointGroupPortOverride>;

  // The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
  public thresholdCount?: number;

  // The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener. The default value is 100.
  public trafficDialPercentage?: number;

  // The list of endpoint objects. Fields documented below.
  public endpointConfigurations?: Array<globalaccelerator_EndpointGroupEndpointConfiguration>;

  // The name of the AWS Region where the endpoint group is located.
  public endpointGroupRegion?: string;

  // The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.
  public healthCheckIntervalSeconds?: number;

  // The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
  public healthCheckProtocol?: string;

  // The Amazon Resource Name (ARN) of the listener.
  public listenerArn?: string;

  // The Amazon Resource Name (ARN) of the endpoint group.
  public arn?: string;

  // If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (`/`). the provider will only perform drift detection of its value when present in a configuration.
  public healthCheckPath?: string;

  /*
The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.
the provider will only perform drift detection of its value when present in a configuration.
*/
  public healthCheckPort?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "healthCheckProtocol",
        "The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "portOverrides",
        "Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. Fields documented below.",
        globalaccelerator_EndpointGroupPortOverride_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "healthCheckIntervalSeconds",
        "The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "healthCheckPort",
        "The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.\nthe provider will only perform drift detection of its value when present in a configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "thresholdCount",
        "The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "endpointConfigurations",
        "The list of endpoint objects. Fields documented below.",
        globalaccelerator_EndpointGroupEndpointConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "healthCheckPath",
        "If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (`/`). the provider will only perform drift detection of its value when present in a configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "trafficDialPercentage",
        "The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener. The default value is 100.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointGroupRegion",
        "The name of the AWS Region where the endpoint group is located.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "listenerArn",
        "The Amazon Resource Name (ARN) of the listener.",
        [],
        true,
        true,
      ),
    ];
  }
}
