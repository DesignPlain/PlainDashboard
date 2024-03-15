export interface BlockchainNodesEthereumDetailsAdditionalEndpoint {
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
