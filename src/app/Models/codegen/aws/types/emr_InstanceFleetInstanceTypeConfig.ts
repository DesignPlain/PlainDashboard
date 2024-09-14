import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emr_InstanceFleetInstanceTypeConfigEbsConfig,
  emr_InstanceFleetInstanceTypeConfigEbsConfig_GetTypes,
} from "./emr_InstanceFleetInstanceTypeConfigEbsConfig";
import {
  emr_InstanceFleetInstanceTypeConfigConfiguration,
  emr_InstanceFleetInstanceTypeConfigConfiguration_GetTypes,
} from "./emr_InstanceFleetInstanceTypeConfigConfiguration";

export interface emr_InstanceFleetInstanceTypeConfig {
  // Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
  ebsConfigs?: Array<emr_InstanceFleetInstanceTypeConfigEbsConfig>;

  // An EC2 instance type, such as m4.xlarge.
  instanceType?: string;

  // The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `aws.emr.InstanceFleet`.
  weightedCapacity?: number;

  // The bid price for each EC2 Spot instance type as defined by `instance_type`. Expressed in USD. If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%!.(MISSING)
  bidPrice?: string;

  // The bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by `instance_type`. Expressed as a number (for example, 20 specifies 20%!)(MISSING). If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%!.(MISSING)
  bidPriceAsPercentageOfOnDemandPrice?: number;

  // A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster. List of `configuration` blocks.
  configurations?: Array<emr_InstanceFleetInstanceTypeConfigConfiguration>;
}

export function emr_InstanceFleetInstanceTypeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "weightedCapacity",
      "The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `aws.emr.InstanceFleet`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bidPrice",
      "The bid price for each EC2 Spot instance type as defined by `instance_type`. Expressed in USD. If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bidPriceAsPercentageOfOnDemandPrice",
      "The bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by `instance_type`. Expressed as a number (for example, 20 specifies 20%). If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "configurations",
      "A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster. List of `configuration` blocks.",
      () => emr_InstanceFleetInstanceTypeConfigConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ebsConfigs",
      "Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.",
      () => emr_InstanceFleetInstanceTypeConfigEbsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "An EC2 instance type, such as m4.xlarge.",
      () => [],
      true,
      true,
    ),
  ];
}
