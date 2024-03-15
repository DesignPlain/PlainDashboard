import { getMetastoreServiceNetworkConfigConsumer } from "./getMetastoreServiceNetworkConfigConsumer";

export interface getMetastoreServiceNetworkConfig {
  // The consumer-side network configuration for the Dataproc Metastore instance.
  Consumers?: Array<getMetastoreServiceNetworkConfigConsumer>;

  // Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
  CustomRoutesEnabled?: boolean;
}
