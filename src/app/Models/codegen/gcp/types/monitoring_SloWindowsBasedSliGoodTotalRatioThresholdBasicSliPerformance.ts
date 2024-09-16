import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency,
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency_GetTypes,
} from './monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency';
import {
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability,
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability_GetTypes,
} from './monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability';

export interface monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance {
  /*
Availability based SLI, dervied from count of requests made to this service that return successfully.
Structure is documented below.
*/
  availability?: monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability;

  /*
Parameters for a latency threshold SLI.
Structure is documented below.
*/
  latency?: monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency;

  /*
An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.
*/
  locations?: Array<string>;

  /*
An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.
*/
  methods?: Array<string>;

  /*
The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.
*/
  versions?: Array<string>;
}

export function monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'availability',
      'Availability based SLI, dervied from count of requests made to this service that return successfully.\nStructure is documented below.',
      () =>
        monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'latency',
      'Parameters for a latency threshold SLI.\nStructure is documented below.',
      () =>
        monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'locations',
      "An optional set of locations to which this SLI is relevant.\nTelemetry from other locations will not be used to calculate\nperformance for this SLI. If omitted, this SLI applies to all\nlocations in which the Service has activity. For service types\nthat don't support breaking down by location, setting this\nfield will result in an error.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'methods',
      "An optional set of RPCs to which this SLI is relevant.\nTelemetry from other methods will not be used to calculate\nperformance for this SLI. If omitted, this SLI applies to all\nthe Service's methods. For service types that don't support\nbreaking down by method, setting this field will result in an\nerror.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'versions',
      "The set of API versions to which this SLI is relevant.\nTelemetry from other API versions will not be used to\ncalculate performance for this SLI. If omitted,\nthis SLI applies to all API versions. For service types\nthat don't support breaking down by version, setting this\nfield will result in an error.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
