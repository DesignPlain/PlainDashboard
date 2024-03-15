export interface AlertPolicyConditionConditionThresholdForecastOptions {
  /*
The length of time into the future to forecast
whether a timeseries will violate the threshold.
If the predicted value is found to violate the
threshold, and the violation is observed in all
forecasts made for the Configured `duration`,
then the timeseries is considered to be failing.
*/
  ForecastHorizon?: string;
}
