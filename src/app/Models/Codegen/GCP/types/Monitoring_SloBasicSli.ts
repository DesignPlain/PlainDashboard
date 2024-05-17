import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_SloBasicSliLatency,
  Monitoring_SloBasicSliLatency_GetTypes,
} from "./Monitoring_SloBasicSliLatency";
import {
  Monitoring_SloBasicSliAvailability,
  Monitoring_SloBasicSliAvailability_GetTypes,
} from "./Monitoring_SloBasicSliAvailability";

export interface Monitoring_SloBasicSli {
  /*
Parameters for a latency threshold SLI.
Structure is documented below.
*/
  Latency?: Monitoring_SloBasicSliLatency;

  /*
An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.
*/
  Locations?: Array<string>;

  /*
An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.
*/
  Methods?: Array<string>;

  /*
The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.
*/
  Versions?: Array<string>;

  /*
Availability based SLI, dervied from count of requests made to this service that return successfully.
Structure is documented below.
*/
  Availability?: Monitoring_SloBasicSliAvailability;
}

export function Monitoring_SloBasicSli_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Latency",
      "Parameters for a latency threshold SLI.\nStructure is documented below.",
      Monitoring_SloBasicSliLatency_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Locations",
      "An optional set of locations to which this SLI is relevant.\nTelemetry from other locations will not be used to calculate\nperformance for this SLI. If omitted, this SLI applies to all\nlocations in which the Service has activity. For service types\nthat don't support breaking down by location, setting this\nfield will result in an error.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Methods",
      "An optional set of RPCs to which this SLI is relevant.\nTelemetry from other methods will not be used to calculate\nperformance for this SLI. If omitted, this SLI applies to all\nthe Service's methods. For service types that don't support\nbreaking down by method, setting this field will result in an\nerror.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Versions",
      "The set of API versions to which this SLI is relevant.\nTelemetry from other API versions will not be used to\ncalculate performance for this SLI. If omitted,\nthis SLI applies to all API versions. For service types\nthat don't support breaking down by version, setting this\nfield will result in an error.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Availability",
      "Availability based SLI, dervied from count of requests made to this service that return successfully.\nStructure is documented below.",
      Monitoring_SloBasicSliAvailability_GetTypes(),
      false,
      false,
    ),
  ];
}
