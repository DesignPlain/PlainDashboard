import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_getMetastoreServiceNetworkConfigConsumer,
  Dataproc_getMetastoreServiceNetworkConfigConsumer_GetTypes,
} from "./Dataproc_getMetastoreServiceNetworkConfigConsumer";

export interface Dataproc_getMetastoreServiceNetworkConfig {
  // The consumer-side network configuration for the Dataproc Metastore instance.
  Consumers?: Array<Dataproc_getMetastoreServiceNetworkConfigConsumer>;

  // Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
  CustomRoutesEnabled?: boolean;
}

export function Dataproc_getMetastoreServiceNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Consumers",
      "The consumer-side network configuration for the Dataproc Metastore instance.",
      Dataproc_getMetastoreServiceNetworkConfigConsumer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "CustomRoutesEnabled",
      "Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.",
      [],
      true,
      false,
    ),
  ];
}
