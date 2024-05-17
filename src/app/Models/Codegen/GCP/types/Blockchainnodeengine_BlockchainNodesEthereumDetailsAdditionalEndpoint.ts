import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint {
  /*
(Output)
The assigned URL for the node's Beacon API endpoint.
*/
  BeaconApiEndpoint?: string;

  /*
(Output)
The assigned URL for the node's Beacon Prometheus metrics endpoint.
*/
  BeaconPrometheusMetricsApiEndpoint?: string;

  /*
(Output)
The assigned URL for the node's execution client's Prometheus metrics endpoint.
*/
  ExecutionClientPrometheusMetricsApiEndpoint?: string;
}

export function Blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BeaconPrometheusMetricsApiEndpoint",
      "(Output)\nThe assigned URL for the node's Beacon Prometheus metrics endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExecutionClientPrometheusMetricsApiEndpoint",
      "(Output)\nThe assigned URL for the node's execution client's Prometheus metrics endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BeaconApiEndpoint",
      "(Output)\nThe assigned URL for the node's Beacon API endpoint.",
      [],
      false,
      false,
    ),
  ];
}
