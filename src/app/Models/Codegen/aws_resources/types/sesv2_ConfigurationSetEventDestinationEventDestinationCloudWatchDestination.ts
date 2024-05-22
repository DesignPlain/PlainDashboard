import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration,
  sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration_GetTypes,
} from "./sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration";

export interface sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination {
  // An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch. See dimension_configuration below.
  dimensionConfigurations?: Array<sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration>;
}

export function sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dimensionConfigurations",
      "An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch. See dimension_configuration below.",
      sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
