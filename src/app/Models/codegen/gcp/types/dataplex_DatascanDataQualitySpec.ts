import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataplex_DatascanDataQualitySpecPostScanActions,
  dataplex_DatascanDataQualitySpecPostScanActions_GetTypes,
} from './dataplex_DatascanDataQualitySpecPostScanActions';
import {
  dataplex_DatascanDataQualitySpecRule,
  dataplex_DatascanDataQualitySpecRule_GetTypes,
} from './dataplex_DatascanDataQualitySpecRule';

export interface dataplex_DatascanDataQualitySpec {
  /*
Actions to take upon job completion.
Structure is documented below.
*/
  postScanActions?: dataplex_DatascanDataQualitySpecPostScanActions;

  // A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  rowFilter?: string;

  /*
The list of rules to evaluate against a data source. At least one rule is required.
Structure is documented below.
*/
  rules?: Array<dataplex_DatascanDataQualitySpecRule>;

  /*
The percentage of the records to be selected from the dataset for DataScan.
Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if `sampling_percent` is not specified, 0 or 100.
*/
  samplingPercent?: number;
}

export function dataplex_DatascanDataQualitySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'postScanActions',
      'Actions to take upon job completion.\nStructure is documented below.',
      () => dataplex_DatascanDataQualitySpecPostScanActions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rowFilter',
      'A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'rules',
      'The list of rules to evaluate against a data source. At least one rule is required.\nStructure is documented below.',
      () => dataplex_DatascanDataQualitySpecRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'samplingPercent',
      'The percentage of the records to be selected from the dataset for DataScan.\nValue can range between 0.0 and 100.0 with up to 3 significant decimal digits.\nSampling is not applied if `sampling_percent` is not specified, 0 or 100.',
      () => [],
      false,
      false,
    ),
  ];
}
