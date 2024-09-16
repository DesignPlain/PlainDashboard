import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface guardduty_DetectorDatasourcesS3Logs {
  /*
If true, enables [S3 protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html).
Defaults to `true`.
*/
  enable?: boolean;
}

export function guardduty_DetectorDatasourcesS3Logs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enable',
      'If true, enables [S3 protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html).\nDefaults to `true`.',
      () => [],
      true,
      false,
    ),
  ];
}
