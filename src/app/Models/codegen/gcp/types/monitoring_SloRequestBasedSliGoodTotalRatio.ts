import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface monitoring_SloRequestBasedSliGoodTotalRatio {
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
  badServiceFilter?: string;

  /*
A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying good service provided. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)
Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
*/
  goodServiceFilter?: string;

  /*
A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying total demanded service. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)
Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
*/
  totalServiceFilter?: string;
}

export function monitoring_SloRequestBasedSliGoodTotalRatio_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'totalServiceFilter',
      'A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nquantifying total demanded service. Exactly two of\ngood, bad, or total service filter must be defined (where\ngood + bad = total is assumed)\nMust have ValueType = DOUBLE or ValueType = INT64 and\nmust have MetricKind = DELTA or MetricKind = CUMULATIVE.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'badServiceFilter',
      'A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nquantifying bad service provided, either demanded service that\nwas not provided or demanded service that was of inadequate\nquality. Exactly two of\ngood, bad, or total service filter must be defined (where\ngood + bad = total is assumed)\nMust have ValueType = DOUBLE or ValueType = INT64 and\nmust have MetricKind = DELTA or MetricKind = CUMULATIVE.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'goodServiceFilter',
      'A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nquantifying good service provided. Exactly two of\ngood, bad, or total service filter must be defined (where\ngood + bad = total is assumed)\nMust have ValueType = DOUBLE or ValueType = INT64 and\nmust have MetricKind = DELTA or MetricKind = CUMULATIVE.',
      () => [],
      false,
      false,
    ),
  ];
}
