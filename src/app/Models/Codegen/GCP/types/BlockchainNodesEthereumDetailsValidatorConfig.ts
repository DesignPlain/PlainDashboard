export interface BlockchainNodesEthereumDetailsValidatorConfig {
  // URLs for MEV-relay services to use for block building. When set, a managed MEV-boost service is configured on the beacon client.
  MevRelayUrls?: Array<string>;
}
