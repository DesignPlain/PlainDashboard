import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint {
  /*
(Output)
The assigned URL for the node's Beacon API endpoint.
*/
  beaconApiEndpoint?: string;

  /*
(Output)
The assigned URL for the node's Beacon Prometheus metrics endpoint.
*/
  beaconPrometheusMetricsApiEndpoint?: string;

  /*
(Output)
The assigned URL for the node's execution client's Prometheus metrics endpoint.
*/
  executionClientPrometheusMetricsApiEndpoint?: string;
}

export function blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "beaconApiEndpoint",
      "(Output)\nThe assigned URL for the node's Beacon API endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "beaconPrometheusMetricsApiEndpoint",
      "(Output)\nThe assigned URL for the node's Beacon Prometheus metrics endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionClientPrometheusMetricsApiEndpoint",
      "(Output)\nThe assigned URL for the node's execution client's Prometheus metrics endpoint.",
      [],
      false,
      false,
    ),
  ];
}
