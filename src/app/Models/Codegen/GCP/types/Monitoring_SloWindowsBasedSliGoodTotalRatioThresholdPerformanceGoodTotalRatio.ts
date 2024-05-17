import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio {
  /*
A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying bad service provided, either demanded service that
was not provided or demanded service that was of inadequate
quality. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)
Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
*/
  BadServiceFilter?: string;

  /*
A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying good service provided. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)
Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
*/
  GoodServiceFilter?: string;

  /*
A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying total demanded service. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)
Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
*/
  TotalServiceFilter?: string;
}

export function Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BadServiceFilter",
      "A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nquantifying bad service provided, either demanded service that\nwas not provided or demanded service that was of inadequate\nquality. Exactly two of\ngood, bad, or total service filter must be defined (where\ngood + bad = total is assumed)\nMust have ValueType = DOUBLE or ValueType = INT64 and\nmust have MetricKind = DELTA or MetricKind = CUMULATIVE.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GoodServiceFilter",
      "A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nquantifying good service provided. Exactly two of\ngood, bad, or total service filter must be defined (where\ngood + bad = total is assumed)\nMust have ValueType = DOUBLE or ValueType = INT64 and\nmust have MetricKind = DELTA or MetricKind = CUMULATIVE.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TotalServiceFilter",
      "A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nquantifying total demanded service. Exactly two of\ngood, bad, or total service filter must be defined (where\ngood + bad = total is assumed)\nMust have ValueType = DOUBLE or ValueType = INT64 and\nmust have MetricKind = DELTA or MetricKind = CUMULATIVE.",
      [],
      false,
      false,
    ),
  ];
}
