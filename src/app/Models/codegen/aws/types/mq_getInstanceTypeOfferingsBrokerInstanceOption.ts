import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone,
  mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone_GetTypes,
} from "./mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone";

export interface mq_getInstanceTypeOfferingsBrokerInstanceOption {
  // List of available AZs. See Availability Zones. below
  availabilityZones?: Array<mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone>;

  // Filter response by engine type.
  engineType?: string;

  // Filter response by host instance type.
  hostInstanceType?: string;

  // Filter response by storage type.
  storageType?: string;

  // The list of supported deployment modes.
  supportedDeploymentModes?: Array<string>;

  // The list of supported engine versions.
  supportedEngineVersions?: Array<string>;
}

export function mq_getInstanceTypeOfferingsBrokerInstanceOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "supportedDeploymentModes",
      "The list of supported deployment modes.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "supportedEngineVersions",
      "The list of supported engine versions.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "List of available AZs. See Availability Zones. below",
      () =>
        mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "engineType",
      "Filter response by engine type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostInstanceType",
      "Filter response by host instance type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "storageType",
      "Filter response by storage type.",
      () => [],
      true,
      false,
    ),
  ];
}
