import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxVersionNluSetting {
  /*
To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a no-match event will be triggered.
The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
*/
  classificationThreshold?: number;

  /*
Indicates NLU model training mode.
- MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
- MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train.
Possible values are: `MODEL_TRAINING_MODE_AUTOMATIC`, `MODEL_TRAINING_MODE_MANUAL`.
*/
  modelTrainingMode?: string;

  /*
Indicates the type of NLU model.
- MODEL_TYPE_STANDARD: Use standard NLU model.
- MODEL_TYPE_ADVANCED: Use advanced NLU model.
Possible values are: `MODEL_TYPE_STANDARD`, `MODEL_TYPE_ADVANCED`.
*/
  modelType?: string;
}

export function diagflow_CxVersionNluSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'classificationThreshold',
      'To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a no-match event will be triggered.\nThe score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'modelTrainingMode',
      'Indicates NLU model training mode.\n* MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.\n* MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train.\nPossible values are: `MODEL_TRAINING_MODE_AUTOMATIC`, `MODEL_TRAINING_MODE_MANUAL`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'modelType',
      'Indicates the type of NLU model.\n* MODEL_TYPE_STANDARD: Use standard NLU model.\n* MODEL_TYPE_ADVANCED: Use advanced NLU model.\nPossible values are: `MODEL_TYPE_STANDARD`, `MODEL_TYPE_ADVANCED`.',
      () => [],
      false,
      false,
    ),
  ];
}
