import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_MetastoreServiceNetworkConfigConsumer,
  Dataproc_MetastoreServiceNetworkConfigConsumer_GetTypes,
} from "./Dataproc_MetastoreServiceNetworkConfigConsumer";

export interface Dataproc_MetastoreServiceNetworkConfig {
  /*
The consumer-side network configuration for the Dataproc Metastore instance.
Structure is documented below.
*/
  Consumers?: Array<Dataproc_MetastoreServiceNetworkConfigConsumer>;

  // Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
  CustomRoutesEnabled?: boolean;
}

export function Dataproc_MetastoreServiceNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Consumers",
      "The consumer-side network configuration for the Dataproc Metastore instance.\nStructure is documented below.",
      Dataproc_MetastoreServiceNetworkConfigConsumer_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "CustomRoutesEnabled",
      "Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.",
      [],
      false,
      false,
    ),
  ];
}
