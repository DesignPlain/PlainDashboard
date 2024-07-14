import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface monitoring_AlertPolicyConditionConditionThresholdForecastOptions {
  /*
The length of time into the future to forecast
whether a timeseries will violate the threshold.
If the predicted value is found to violate the
threshold, and the violation is observed in all
forecasts made for the Configured `duration`,
then the timeseries is considered to be failing.
*/
  forecastHorizon?: string;
}

export function monitoring_AlertPolicyConditionConditionThresholdForecastOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "forecastHorizon",
      "The length of time into the future to forecast\nwhether a timeseries will violate the threshold.\nIf the predicted value is found to violate the\nthreshold, and the violation is observed in all\nforecasts made for the Configured `duration`,\nthen the timeseries is considered to be failing.",
      [],
      true,
      false,
    ),
  ];
}
