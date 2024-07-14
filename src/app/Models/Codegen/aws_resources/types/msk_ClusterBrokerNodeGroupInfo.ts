import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  msk_ClusterBrokerNodeGroupInfoStorageInfo,
  msk_ClusterBrokerNodeGroupInfoStorageInfo_GetTypes,
} from "./msk_ClusterBrokerNodeGroupInfoStorageInfo";
import {
  msk_ClusterBrokerNodeGroupInfoConnectivityInfo,
  msk_ClusterBrokerNodeGroupInfoConnectivityInfo_GetTypes,
} from "./msk_ClusterBrokerNodeGroupInfoConnectivityInfo";

export interface msk_ClusterBrokerNodeGroupInfo {
  // A list of subnets to connect to in client VPC ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-prop-brokernodegroupinfo-clientsubnets)).
  clientSubnets?: Array<string>;

  // Information about the cluster access configuration. See below. For security reasons, you can't turn on public access while creating an MSK cluster. However, you can update an existing cluster to make it publicly accessible. You can also create a new cluster and then update it to make it publicly accessible ([documentation](https://docs.aws.amazon.com/msk/latest/developerguide/public-access.html)).
  connectivityInfo?: msk_ClusterBrokerNodeGroupInfoConnectivityInfo;

  // Specify the instance type to use for the kafka brokersE.g., kafka.m5.large. ([Pricing info](https://aws.amazon.com/msk/pricing/))
  instanceType?: string;

  // A list of the security groups to associate with the elastic network interfaces to control who can communicate with the cluster.
  securityGroups?: Array<string>;

  // A block that contains information about storage volumes attached to MSK broker nodes. See below.
  storageInfo?: msk_ClusterBrokerNodeGroupInfoStorageInfo;

  // The distribution of broker nodes across availability zones ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-model-brokerazdistribution)). Currently the only valid value is `DEFAULT`.
  azDistribution?: string;
}

export function msk_ClusterBrokerNodeGroupInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientSubnets",
      "A list of subnets to connect to in client VPC ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-prop-brokernodegroupinfo-clientsubnets)).",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "connectivityInfo",
      "Information about the cluster access configuration. See below. For security reasons, you can't turn on public access while creating an MSK cluster. However, you can update an existing cluster to make it publicly accessible. You can also create a new cluster and then update it to make it publicly accessible ([documentation](https://docs.aws.amazon.com/msk/latest/developerguide/public-access.html)).",
      msk_ClusterBrokerNodeGroupInfoConnectivityInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "Specify the instance type to use for the kafka brokersE.g., kafka.m5.large. ([Pricing info](https://aws.amazon.com/msk/pricing/))",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "A list of the security groups to associate with the elastic network interfaces to control who can communicate with the cluster.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "storageInfo",
      "A block that contains information about storage volumes attached to MSK broker nodes. See below.",
      msk_ClusterBrokerNodeGroupInfoStorageInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "azDistribution",
      "The distribution of broker nodes across availability zones ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-model-brokerazdistribution)). Currently the only valid value is `DEFAULT`.",
      [],
      false,
      true,
    ),
  ];
}
