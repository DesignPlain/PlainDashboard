import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  oam_getLinkLinkConfigurationLogGroupConfiguration,
  oam_getLinkLinkConfigurationLogGroupConfiguration_GetTypes,
} from "./oam_getLinkLinkConfigurationLogGroupConfiguration";
import {
  oam_getLinkLinkConfigurationMetricConfiguration,
  oam_getLinkLinkConfigurationMetricConfiguration_GetTypes,
} from "./oam_getLinkLinkConfigurationMetricConfiguration";

export interface oam_getLinkLinkConfiguration {
  // Configuration for filtering which log groups are to send log events from the source account to the monitoring account. See `log_group_configuration` Block for details.
  logGroupConfigurations?: Array<oam_getLinkLinkConfigurationLogGroupConfiguration>;

  // Configuration for filtering which metric namespaces are to be shared from the source account to the monitoring account. See `metric_configuration` Block for details.
  metricConfigurations?: Array<oam_getLinkLinkConfigurationMetricConfiguration>;
}

export function oam_getLinkLinkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "logGroupConfigurations",
      "Configuration for filtering which log groups are to send log events from the source account to the monitoring account. See `log_group_configuration` Block for details.",
      () => oam_getLinkLinkConfigurationLogGroupConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "metricConfigurations",
      "Configuration for filtering which metric namespaces are to be shared from the source account to the monitoring account. See `metric_configuration` Block for details.",
      () => oam_getLinkLinkConfigurationMetricConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
