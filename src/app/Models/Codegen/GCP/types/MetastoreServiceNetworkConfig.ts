import { MetastoreServiceNetworkConfigConsumer } from "./MetastoreServiceNetworkConfigConsumer";

export interface MetastoreServiceNetworkConfig {
  // Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
  CustomRoutesEnabled?: boolean;

  /*
The consumer-side network configuration for the Dataproc Metastore instance.
Structure is documented below.
*/
  Consumers?: Array<MetastoreServiceNetworkConfigConsumer>;
}
