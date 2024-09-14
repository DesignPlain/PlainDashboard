import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emr_ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig,
  emr_ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig_GetTypes,
} from "./emr_ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig";
import {
  emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration,
  emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration_GetTypes,
} from "./emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration";

export interface emr_ClusterCoreInstanceFleetInstanceTypeConfig {
  // Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
  ebsConfigs?: Array<emr_ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig>;

  // EC2 instance type, such as m4.xlarge.
  instanceType?: string;

  // Number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `aws.emr.InstanceFleet`.
  weightedCapacity?: number;

  // Bid price for each EC2 Spot instance type as defined by `instance_type`. Expressed in USD. If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%!.(MISSING)
  bidPrice?: string;

  // Bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by `instance_type`. Expressed as a number (for example, 20 specifies 20%!)(MISSING). If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%!.(MISSING)
  bidPriceAsPercentageOfOnDemandPrice?: number;

  // Configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster. List of `configuration` blocks.
  configurations?: Array<emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration>;
}

export function emr_ClusterCoreInstanceFleetInstanceTypeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ebsConfigs",
      "Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.",
      () => emr_ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "EC2 instance type, such as m4.xlarge.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weightedCapacity",
      "Number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `aws.emr.InstanceFleet`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bidPrice",
      "Bid price for each EC2 Spot instance type as defined by `instance_type`. Expressed in USD. If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bidPriceAsPercentageOfOnDemandPrice",
      "Bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by `instance_type`. Expressed as a number (for example, 20 specifies 20%). If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "configurations",
      "Configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster. List of `configuration` blocks.",
      () =>
        emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration_GetTypes(),
      false,
      true,
    ),
  ];
}
