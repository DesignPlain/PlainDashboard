import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration,
  emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration_GetTypes,
} from "./emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration";
import {
  emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig,
  emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig_GetTypes,
} from "./emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig";

export interface emr_ClusterMasterInstanceFleetInstanceTypeConfig {
  // Bid price for each EC2 Spot instance type as defined by `instance_type`. Expressed in USD. If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%!.(MISSING)
  bidPrice?: string;

  // Bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by `instance_type`. Expressed as a number (for example, 20 specifies 20%!)(MISSING). If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%!.(MISSING)
  bidPriceAsPercentageOfOnDemandPrice?: number;

  // Configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster. List of `configuration` blocks.
  configurations?: Array<emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration>;

  // Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
  ebsConfigs?: Array<emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig>;

  // EC2 instance type, such as m4.xlarge.
  instanceType?: string;

  // Number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `aws.emr.InstanceFleet`.
  weightedCapacity?: number;
}

export function emr_ClusterMasterInstanceFleetInstanceTypeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bidPrice",
      "Bid price for each EC2 Spot instance type as defined by `instance_type`. Expressed in USD. If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bidPriceAsPercentageOfOnDemandPrice",
      "Bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by `instance_type`. Expressed as a number (for example, 20 specifies 20%). If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "configurations",
      "Configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster. List of `configuration` blocks.",
      emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ebsConfigs",
      "Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.",
      emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "EC2 instance type, such as m4.xlarge.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weightedCapacity",
      "Number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `aws.emr.InstanceFleet`.",
      [],
      false,
      true,
    ),
  ];
}
