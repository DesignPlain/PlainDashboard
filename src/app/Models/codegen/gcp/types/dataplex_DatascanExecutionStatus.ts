import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataplex_DatascanExecutionStatus {
  /*
(Output)
The time when the latest DataScanJob started.
*/
  latestJobEndTime?: string;

  /*
(Output)
The time when the latest DataScanJob ended.
*/
  latestJobStartTime?: string;
}

export function dataplex_DatascanExecutionStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'latestJobEndTime',
      '(Output)\nThe time when the latest DataScanJob started.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'latestJobStartTime',
      '(Output)\nThe time when the latest DataScanJob ended.',
      () => [],
      false,
      false,
    ),
  ];
}
