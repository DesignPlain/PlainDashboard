import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions {
  // The method for setting up document ID. Valid values: `FIREHOSE_DEFAULT`, `NO_DOCUMENT_ID`.
  defaultDocumentIdFormat?: string;
}

export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'defaultDocumentIdFormat',
      'The method for setting up document ID. Valid values: `FIREHOSE_DEFAULT`, `NO_DOCUMENT_ID`.',
      () => [],
      true,
      false,
    ),
  ];
}
